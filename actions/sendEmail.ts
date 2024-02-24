"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderName = formData.get("senderName");
    const senderEmail = formData.get("senderEmail");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }
    if (!validateString(senderName, 5000)) {
        return {
            error: "Invalid name",
        };
    }
    if (!validateString(subject, 5000)) {
        return {
            error: "Invalid subject",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "baranidharanofficial@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                senderName: senderName,
                subject: subject,
                message: message,
                senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
