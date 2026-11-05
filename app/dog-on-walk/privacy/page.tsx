import React from "react";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Privacy Policy · Dog on Walk",
};

export default function PolicyPage() {
  return (
    <div className="p-8 max-w-3xl">
      <img
        src="/dog-on-walk/icon.jpg"
        alt="Dog on Walk"
        className="h-[100px] mb-3 rounded-[22px]"
      />
      <h3>Privacy Policy</h3>
      <p>Last updated: November 5, 2026</p>

      <h4>Introduction</h4>
      <p>
        This Privacy Policy explains what information the Dog on Walk app ("Dog
        on Walk", "we", "us") collects, how it is used, and the choices you
        have. Dog on Walk is a focus timer: while you stay on task, your dog
        heads out on a walk. Dog on Walk is built by Apptify. By using Dog on
        Walk, you agree to the practices described in this policy.
      </p>

      <h4>Your Data Stays on Your Device</h4>
      <p>
        Your dog's name and look, your walks, streaks, journey progress,
        postcards, bones, shop items, to-dos and settings are stored only on
        your device. We do not run servers of our own and do not upload this
        data. The home screen widget reads the same data from your device. If
        you delete the app, this data is deleted with it.
      </p>

      <h4>Accounts (Optional)</h4>
      <p>
        You do not need an account to use Dog on Walk. You can choose to sign
        in with Apple or Google so Pro comes with you to a new phone, and to
        walk with friends. Sign-in is handled by Google Firebase
        Authentication, which receives your account ID, name and email address
        from Apple or Google (with Apple, you can choose to hide your email).
        Your account ID is also shared with RevenueCat so your purchases can be
        restored. Your walks and progress are not uploaded, except what rooms
        share (see below).
      </p>
      <p>
        You can sign out, or delete your account, in Settings at any time.
        Deleting your account removes it from Firebase Authentication.
      </p>

      <h4>Walking with Friends (Optional)</h4>
      <p>
        Rooms let you walk together with friends. They need you to be signed
        in. If you create or join a room, your dog's name and look, your room
        code, your account ID and how your room walks go (walking, sat down,
        finished, or away from the app) are stored in Google Cloud Firestore so
        the friends in that room can see them. Nothing else about your walks is
        shared. Leaving a room deletes your entry, and rooms nobody uses are
        deleted.
      </p>

      <h4>"Match My Real Dog" Photos</h4>
      <p>
        If you use Match my real dog, Dog on Walk asks for access to your
        camera or photo library so you can pick a photo of your dog. The photo
        you choose is sent to Google's Gemini model through Firebase AI Logic,
        only to suggest colors and markings for your in-app dog. Dog on Walk
        does not store the photo or upload any other photos, and the photo is
        not used for advertising. Its processing is subject to Google's terms
        for Firebase AI Logic. The share card that shows your match is made on your device and is
        only shared if you choose to share it.
      </p>

      <h4>Weather and Your City</h4>
      <p>
        If you choose a city, the name you search for is sent to Open-Meteo to
        find matching places, and the chosen city's coordinates are sent to
        Open-Meteo to get its current weather. Sunrise and sunset are worked
        out on your device. Dog on Walk never uses GPS or your device's
        location.
      </p>

      <h4>Analytics</h4>
      <p>
        We use Google Firebase Analytics to understand how the app is used and
        to improve it. It records events such as a walk being started or
        finished, a screen being opened, or a purchase being made. We do not
        send your name, your dog's name, your email or anything you type.
        Firebase Analytics also collects standard information automatically,
        such as an app instance ID, your device model, operating system
        version, app version and approximate region.
      </p>

      <h4>App Security</h4>
      <p>
        Dog on Walk uses Firebase App Check, with Google Play Integrity on
        Android and Apple App Attest on iPhone, to confirm that requests to
        Firebase come from the genuine app. This sends device attestation
        information to Google and Apple, and is not used to identify you.
      </p>

      <h4>Purchases and Subscriptions</h4>
      <p>
        Dog on Walk Pro is offered as a monthly or yearly auto-renewing
        subscription, or as a one-time lifetime purchase. Payments are
        processed by Apple (App Store) or Google (Google Play); we never
        receive your payment card details. Purchases are managed through
        RevenueCat, which receives an app user ID (anonymous, or your account
        ID if you sign in) and your purchase receipts so Pro can be restored.
      </p>
      <p>
        You can manage or cancel your subscription at any time in your App
        Store or Google Play account settings. Subscriptions renew
        automatically unless cancelled at least 24 hours before the end of the
        current period.
      </p>

      <h4>Notifications</h4>
      <p>
        Dog on Walk schedules local notifications, such as a reminder that your
        dog is waiting for a walk. They are created on your device; we do not
        send push notifications from a server. You can turn them off in the
        app or in your device settings.
      </p>

      <h4>Third-Party Services</h4>
      <p>
        Dog on Walk relies on the following services, each governed by its own
        privacy policy:
      </p>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <a className="underline" href="https://firebase.google.com/support/privacy">
            Google Firebase
          </a>{" "}
          (Authentication, Firestore, Analytics, AI Logic and App Check)
        </li>
        <li>
          <a className="underline" href="https://www.revenuecat.com/privacy">
            RevenueCat
          </a>{" "}
          (purchases and subscriptions)
        </li>
        <li>
          <a className="underline" href="https://open-meteo.com/en/terms">
            Open-Meteo
          </a>{" "}
          (city search and weather)
        </li>
        <li>
          <a className="underline" href="https://www.apple.com/legal/privacy/">
            Apple
          </a>{" "}
          (Sign in with Apple, App Store payments and App Attest)
        </li>
        <li>
          <a className="underline" href="https://policies.google.com/privacy">
            Google
          </a>{" "}
          (Google Sign-In, Google Play payments and Play Integrity)
        </li>
      </ul>

      <h4>Data Retention and Your Choices</h4>
      <p>
        Data on your device stays there until you uninstall the app. Room
        entries stay in Firestore until you leave the room, or until the room
        is no longer used and is deleted. Your account stays in Firebase
        Authentication until you delete it in Settings. Analytics data is kept
        by Google under its standard retention settings. If you can no longer
        open the app and want your account or data removed, contact us and we
        will delete it.
      </p>

      <h4>Security</h4>
      <p>
        Data sent to Firebase, RevenueCat and Open-Meteo is transmitted over
        encrypted connections, and room entries can only be read by people
        signed in to the app who have the room code. No method of transmission or storage is 100%
        secure, however, and we cannot guarantee absolute security.
      </p>

      <h4>Children's Privacy</h4>
      <p>
        Dog on Walk is not directed at children under 13, and we do not
        knowingly collect personal information from children. If you believe a
        child has provided us with personal information, please contact us and
        we will delete it.
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
