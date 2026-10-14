import React from "react";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Privacy Policy · Habidots",
};

export default function PolicyPage() {
  return (
    <div className="p-8 max-w-3xl">
      <img src="/Habidots.png" alt="Habidots" className="h-[100px] mb-3" />
      <h3>Privacy Policy</h3>
      <p>Last updated: October 14, 2026</p>

      <h4>Introduction</h4>
      <p>
        This Privacy Policy explains what information the Habidots app
        ("Habidots", "we", "us") collects, how it is used, and the choices you
        have. Habidots is a habit tracker built by Apptify. By using Habidots,
        you agree to the practices described in this policy.
      </p>

      <h4>No Accounts</h4>
      <p>
        Habidots does not require you to sign up or sign in. We do not ask for
        your name, email address, phone number, or any other contact details to
        use the app.
      </p>

      <h4>Your Habit Data Stays on Your Device</h4>
      <p>
        The habits you create, your check-ins, streaks, notes, reminders, and
        app settings are stored locally on your device. We do not upload this
        data to our servers. If you use the Export feature, the backup file is
        created on your device and you choose where to save or share it. If you
        delete the app, this local data is deleted with it unless you have
        exported a backup.
      </p>

      <h4>Analytics and Crash Reports</h4>
      <p>
        To understand how the app is used and to fix problems, Habidots sends
        anonymous usage events and crash or error reports to PostHog, our
        analytics provider. This may include the screens you visit, features
        you use (for example, that a habit was created or a purchase screen was
        opened), app version, device model, operating system version, language,
        and a random identifier generated for your installation. These events
        do not include the names or contents of your habits, and they are not
        linked to your identity. We do not use this data for advertising and we
        do not sell it.
      </p>

      <h4>Purchases and Subscriptions</h4>
      <p>
        Habidots Pro is offered as an auto-renewing subscription or a one-time
        purchase. Payments are processed by Apple (App Store) or Google (Google
        Play); we never receive your payment card details. We use RevenueCat to
        verify purchases and manage your Pro access. RevenueCat receives an
        anonymous app user identifier, your purchase and subscription history,
        and basic device information. To connect purchase events with
        anonymous analytics, the anonymous PostHog identifier may be shared
        with RevenueCat.
      </p>
      <p>
        You can manage or cancel your subscription at any time in your App
        Store or Google Play account settings. Subscriptions renew
        automatically unless cancelled at least 24 hours before the end of the
        current period.
      </p>

      <h4>App Content</h4>
      <p>
        The app downloads general content such as daily messages, news, and
        version information from Google Firebase. This content is the same for
        all users; no personal data is sent to us when it is fetched, although
        Firebase, like any web service, receives standard technical data such
        as your IP address in order to deliver it.
      </p>

      <h4>Notifications</h4>
      <p>
        Habit reminders are scheduled locally on your device. You can turn them
        off at any time in the app or in your device settings.
      </p>

      <h4>Third-Party Services</h4>
      <p>
        Habidots uses the following third-party services, each governed by its
        own privacy policy:
      </p>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <a className="underline" href="https://posthog.com/privacy">
            PostHog
          </a>{" "}
          (analytics and crash reports)
        </li>
        <li>
          <a className="underline" href="https://www.revenuecat.com/privacy">
            RevenueCat
          </a>{" "}
          (purchase management)
        </li>
        <li>
          <a className="underline" href="https://firebase.google.com/support/privacy">
            Google Firebase
          </a>{" "}
          (app content)
        </li>
        <li>
          <a className="underline" href="https://www.apple.com/legal/privacy/">
            Apple App Store
          </a>{" "}
          and{" "}
          <a className="underline" href="https://policies.google.com/privacy">
            Google Play
          </a>{" "}
          (payments)
        </li>
      </ul>

      <h4>Data Retention and Your Choices</h4>
      <p>
        Data on your device stays there until you delete it or uninstall the
        app. Anonymous analytics data is retained by PostHog only as long as
        needed to analyse usage and fix issues. Because we do not know who you
        are, we cannot link analytics data to you directly, but if you would
        like your installation's data removed, contact us and include the app
        version and device you use and we will do our best to help.
      </p>

      <h4>Security</h4>
      <p>
        We use reasonable measures to protect the information processed by the
        app, and data sent to our service providers is transmitted over
        encrypted connections. No method of transmission or storage is 100%
        secure, however, and we cannot guarantee absolute security.
      </p>

      <h4>Children's Privacy</h4>
      <p>
        Habidots is not directed at children under 13, and we do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal information, please contact us and we will
        delete it.
      </p>

      <h4>Changes to This Policy</h4>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated date, and take effect when posted.
      </p>

      <h4>Contact Us</h4>
      <p>
        If you have any questions about this Privacy Policy, contact us at{" "}
        <a className="underline" href="mailto:baranidharanofficial@gmail.com">
          baranidharanofficial@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
