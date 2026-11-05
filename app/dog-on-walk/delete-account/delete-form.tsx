"use client";

import { useState, useTransition, type FormEvent } from "react";
import {
    requestAccountDeletion,
    type DeletionApp,
} from "@/actions/requestAccountDeletion";

const METHODS = [
    ["apple", "Sign in with Apple"],
    ["google", "Sign in with Google"],
    ["email", "Email and password"],
    ["unsure", "Not sure"],
] as const;

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
            <div className="da-card da-done" role="status">
                <p>
                    <strong>Request sent.</strong> We&rsquo;ll email{" "}
                    {sentTo || "you"} to check the request is yours, then
                    delete your account within 30 days and let you know when
                    it&rsquo;s done.
                </p>
            </div>
        );
    }

    return (
        <form className="da-card" onSubmit={onSubmit}>
            <label htmlFor="da-email" className="da-label">
                Your account&rsquo;s email
            </label>
            <input
                id="da-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                required
                maxLength={320}
                disabled={pending}
                aria-invalid={error ? true : undefined}
                aria-describedby="da-email-hint"
                className="da-input"
            />
            <p id="da-email-hint" className="da-hint">
                Used Sign in with Apple and chose Hide My Email? Find the
                address on your iPhone in Settings &rsaquo; your name &rsaquo;
                Sign in with Apple &rsaquo; Dog on Walk.
            </p>

            <fieldset className="da-fieldset" disabled={pending}>
                <legend className="da-label">How did you sign in?</legend>
                <div className="da-options">
                    {METHODS.map(([value, label]) => (
                        <label key={value} className="da-option">
                            <input
                                type="radio"
                                name="method"
                                value={value}
                                defaultChecked={value === "unsure"}
                            />
                            {label}
                        </label>
                    ))}
                </div>
            </fieldset>

            <label htmlFor="da-note" className="da-label">
                Anything else? <span className="da-optional">(optional)</span>
            </label>
            <textarea
                id="da-note"
                name="note"
                rows={3}
                maxLength={1000}
                disabled={pending}
                className="da-input"
            />

            {/* Honeypot, kept out of sight and out of the tab order. */}
            <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="da-honeypot"
                aria-hidden="true"
            />

            {error && (
                <p className="da-error" role="alert">
                    {error}
                </p>
            )}

            <button type="submit" disabled={pending} className="da-button">
                {pending ? "Sending…" : "Request account deletion"}
            </button>
        </form>
    );
}
