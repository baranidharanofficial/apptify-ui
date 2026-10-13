"use client";

import { useState, useTransition, type FormEvent, type ReactNode } from "react";
import { joinWaitlist, type WaitlistApp } from "@/actions/joinWaitlist";
import "./waitlist.css";

// Shared launch-day signup. Each page themes it through the --wl-* custom
// properties (see waitlist.css) rather than restyling its parts.
export function WaitlistForm({
    app,
    appName,
    doneIcon,
}: {
    app: WaitlistApp;
    appName: string;
    doneIcon: ReactNode;
}) {
    const [joined, setJoined] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();
    const id = `wl-${app}`;

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setError(null);
        startTransition(async () => {
            const result = await joinWaitlist(app, formData);
            if (result.ok) {
                setJoined(true);
            } else {
                setError(result.error);
            }
        });
    };

    if (joined) {
        return (
            <div className="wl-card wl-joined" role="status">
                <span className="wl-joined-icon">{doneIcon}</span>
                <p>
                    <strong>You&rsquo;re on the list!</strong>
                    <br />
                    We&rsquo;ll email you the day {appName} launches.
                </p>
            </div>
        );
    }

    return (
        <form className="wl-card wl-form" onSubmit={onSubmit}>
            <label htmlFor={`${id}-email`} className="wl-label">
                Get notified on launch day
            </label>
            <div className="wl-field">
                <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    required
                    maxLength={320}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? `${id}-error` : `${id}-hint`}
                    disabled={pending}
                />
                {/* Honeypot, kept out of sight and out of the tab order. */}
                <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="wl-honeypot"
                    aria-hidden="true"
                />
                <button type="submit" disabled={pending}>
                    {pending ? "Joining…" : "Notify me"}
                </button>
            </div>
            {error ? (
                <p id={`${id}-error`} className="wl-error" role="alert">
                    {error}
                </p>
            ) : (
                <p id={`${id}-hint`} className="wl-hint">
                    One email when we launch. No spam, ever.
                </p>
            )}
        </form>
    );
}
