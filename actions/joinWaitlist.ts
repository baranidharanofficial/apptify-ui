"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

// Deliberately loose: the browser's type="email" check does the strict part,
// and Resend rejects anything it can't deliver to.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Each app's launch list is its own Resend audience. The client only ever
// names the app; which env var (and so which audience) that maps to stays
// on the server.
const AUDIENCE_ENV = {
    "dog-on-walk": "RESEND_DOG_ON_WALK_AUDIENCE_ID",
} as const;

export type WaitlistApp = keyof typeof AUDIENCE_ENV;

export type WaitlistResult = { ok: true } | { ok: false; error: string };

// Adds the email to the app's Resend audience, so launch day is one
// Broadcast to that audience from the Resend dashboard.
export const joinWaitlist = async (
    app: WaitlistApp,
    formData: FormData
): Promise<WaitlistResult> => {
    // Honeypot: hidden from people, filled in by naive bots. Pretend it
    // worked so they don't retry.
    if (formData.get("company")) {
        return { ok: true };
    }

    const email = formData.get("email");
    if (
        typeof email !== "string" ||
        email.length > 320 ||
        !EMAIL_PATTERN.test(email.trim())
    ) {
        return { ok: false, error: "Please enter a valid email address." };
    }

    const envName = AUDIENCE_ENV[app];
    const audienceId = envName && process.env[envName];
    if (!audienceId) {
        console.error(`${envName ?? `Audience for "${app}"`} is not set`);
        return { ok: false, error: "Signups aren't open yet. Try again soon." };
    }

    try {
        const { error } = await resend.contacts.create({
            audienceId,
            email: email.trim().toLowerCase(),
            unsubscribed: false,
        });
        if (error) {
            console.error("Resend contacts.create failed:", error);
            return { ok: false, error: "Something went wrong. Please try again." };
        }
    } catch (error: unknown) {
        console.error("Resend contacts.create threw:", getErrorMessage(error));
        return { ok: false, error: "Something went wrong. Please try again." };
    }

    return { ok: true };
};
