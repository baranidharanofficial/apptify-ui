"use client";

import { useState, useTransition, type FormEvent, type ReactNode } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuCheckCircle, LuHelpCircle, LuMail, LuTrash2 } from "react-icons/lu";
import {
    requestAccountDeletion,
    type DeletionApp,
} from "@/actions/requestAccountDeletion";

const METHODS: [value: string, label: string, icon: ReactNode][] = [
    ["apple", "Apple", <FaApple key="apple" />],
    ["google", "Google", <FcGoogle key="google" />],
    ["email", "Email", <LuMail key="email" />],
    ["unsure", "Not sure", <LuHelpCircle key="unsure" />],
];

const NEXT_STEPS = [
    "We email you to check the request is yours.",
    "We delete your account within 30 days.",
    "We email you again when it’s done.",
];

// Sends the request to the developer by email; nothing is deleted until
// they've confirmed with the requester.
export function DeleteAccountForm({ app }: { app: DeletionApp }) {
    const [sentTo, setSentTo] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setError(null);
        startTransition(async () => {
            const result = await requestAccountDeletion(app, formData);
            if (result.ok) {
                setSentTo(String(formData.get("email") ?? "").trim());
            } else {
                setError(result.error);
            }
        });
    };

    if (sentTo !== null) {
        return (
            <div className="dda-done" role="status">
                <LuCheckCircle className="dda-done-icon" aria-hidden="true" />
                <p className="dda-done-title">Request sent</p>
                <p className="dda-done-text">
                    Look out for an email to <strong>{sentTo}</strong>.
                </p>
                <ol className="dda-timeline">
                    {NEXT_STEPS.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </div>
        );
    }

    return (
        <form className="dda-form" onSubmit={onSubmit}>
            <div className="dda-field">
                <label htmlFor="dda-email">Your account&rsquo;s email</label>
                <input
                    id="dda-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    required
                    maxLength={320}
                    disabled={pending}
                    aria-invalid={error ? true : undefined}
                    aria-describedby="dda-email-hint"
                />
                <p id="dda-email-hint" className="dda-hint">
                    <FaApple aria-hidden="true" />
                    <span>
                        Hid your email with Sign in with Apple? Find the address
                        on your iPhone in Settings &rsaquo; your name &rsaquo;
                        Sign in with Apple &rsaquo; Dog on Walk.
                    </span>
                </p>
            </div>

            <fieldset className="dda-field" disabled={pending}>
                <legend>How did you sign in?</legend>
                <div className="dda-methods">
                    {METHODS.map(([value, label, icon]) => (
                        <label key={value} className="dda-method">
                            <input
                                type="radio"
                                name="method"
                                value={value}
                                defaultChecked={value === "unsure"}
                            />
                            <span>
                                {icon}
                                {label}
                            </span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="dda-field">
                <label htmlFor="dda-note">
                    Anything else? <span className="dda-optional">Optional</span>
                </label>
                <textarea
                    id="dda-note"
                    name="note"
                    rows={3}
                    maxLength={1000}
                    disabled={pending}
                    placeholder="For example, roughly when you signed up"
                />
            </div>

            <label className="dda-confirm">
                <input type="checkbox" name="confirm" required disabled={pending} />
                <span>
                    I understand my Dog on Walk account will be deleted for
                    good.
                </span>
            </label>

            {/* Honeypot, kept out of sight and out of the tab order. */}
            <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="dda-honeypot"
                aria-hidden="true"
            />

            {error && (
                <p className="dda-error" role="alert">
                    {error}
                </p>
            )}

            <button type="submit" disabled={pending} className="dda-button">
                <LuTrash2 aria-hidden="true" />
                {pending ? "Sending…" : "Request account deletion"}
            </button>
        </form>
    );
}
