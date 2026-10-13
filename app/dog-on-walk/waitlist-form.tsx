"use client";

import { useState, useTransition, type FormEvent } from "react";
import { joinWaitlist } from "@/actions/joinWaitlist";
import { Paw } from "./paw";

export function WaitlistForm() {
    const [joined, setJoined] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setError(null);
        startTransition(async () => {
            const result = await joinWaitlist(formData);
            if (result.ok) {
                setJoined(true);
            } else {
                setError(result.error);
            }
        });
    };

    if (joined) {
        return (
            <div className="dow-joined" role="status">
                <Paw className="dow-joined-paw" />
                <p>
                    <strong>You&rsquo;re on the list!</strong>
                    <br />
                    We&rsquo;ll email you the day Dog on Walk launches.
                </p>
            </div>
        );
    }

    return (
        <form className="dow-form" onSubmit={onSubmit}>
            <label htmlFor="dow-email" className="dow-label">
                Get notified on launch day
            </label>
            <div className="dow-field">
                <input
                    id="dow-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    required
                    maxLength={320}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "dow-error" : "dow-hint"}
                    disabled={pending}
                />
                {/* Honeypot, kept out of sight and out of the tab order. */}
                <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="dow-honeypot"
                    aria-hidden="true"
                />
                <button type="submit" disabled={pending}>
                    {pending ? "Joining…" : "Notify me"}
                </button>
            </div>
            {error ? (
                <p id="dow-error" className="dow-error" role="alert">
                    {error}
                </p>
            ) : (
                <p id="dow-hint" className="dow-hint">
                    One email when we launch. No spam, ever.
                </p>
            )}
        </form>
    );
}
