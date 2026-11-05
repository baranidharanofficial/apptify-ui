"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Where requests go, and who they come from (apptify.in is verified in
// Resend). The requester is the reply-to, so answering the email confirms
// with them before anything is deleted.
const TO = "baranidharanofficial@gmail.com";
const FROM = "Apptify <no-reply@apptify.in>";

// The client only ever names the app; its name and the steps for deleting
// stay on the server.
const APPS = {
    "dog-on-walk": {
        name: "Dog on Walk",
        steps: [
            "1. Reply to this email to confirm the request came from the account owner.",
            "2. Firebase console (dog-on-walk-app) > Authentication > Users: find the email and note its User UID.",
            "3. Firestore > rooms: delete any rooms/{code}/members/{UID} documents.",
            "4. Authentication > Users: delete the user.",
            "5. Reply to confirm the account is deleted (within 30 days of the request).",
            "Purchase records stay in RevenueCat, as the deletion page says.",
        ],
    },
} as const;

export type DeletionApp = keyof typeof APPS;

const METHODS = {
    apple: "Sign in with Apple",
    google: "Sign in with Google",
    email: "Email and password",
    unsure: "Not sure",
} as const;

export type DeletionResult = { ok: true } | { ok: false; error: string };

// Emails the request to the developer, who confirms with the requester and
// deletes the account by hand.
export const requestAccountDeletion = async (
    app: DeletionApp,
    formData: FormData
): Promise<DeletionResult> => {
    // Honeypot: hidden from people, filled in by naive bots. Pretend it
    // worked so they don't retry.
    if (formData.get("company")) {
        return { ok: true };
    }

    const target = APPS[app];
    if (!target) {
        return { ok: false, error: "Something went wrong. Please try again." };
    }

    const email = formData.get("email");
    if (
        typeof email !== "string" ||
        email.length > 320 ||
        !EMAIL_PATTERN.test(email.trim())
    ) {
        return { ok: false, error: "Please enter a valid email address." };
    }
    const address = email.trim().toLowerCase();

    const methodKey = formData.get("method");
    const method =
        typeof methodKey === "string" && methodKey in METHODS
            ? METHODS[methodKey as keyof typeof METHODS]
            : METHODS.unsure;

    const rawNote = formData.get("note");
    const note = typeof rawNote === "string" ? rawNote.trim().slice(0, 1000) : "";

    try {
        const { error } = await resend.emails.send({
            from: FROM,
            to: TO,
            reply_to: address,
            subject: `${target.name}: account deletion request from ${address}`,
            text: [
                `Someone asked to delete their ${target.name} account.`,
                "",
                `Email: ${address}`,
                `Signed in with: ${method}`,
                `Note: ${note || "(none)"}`,
                `Received: ${new Date().toISOString()}`,
                "",
                "To do:",
                ...target.steps,
            ].join("\n"),
        });
        if (error) {
            console.error("Resend emails.send failed:", error);
            return { ok: false, error: "Something went wrong. Please try again." };
        }
    } catch (error: unknown) {
        console.error("Resend emails.send threw:", getErrorMessage(error));
        return { ok: false, error: "Something went wrong. Please try again." };
    }

    return { ok: true };
};
