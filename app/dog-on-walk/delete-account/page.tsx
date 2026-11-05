import React from "react";
import type { Metadata } from "next";
import { DeleteAccountForm } from "./delete-form";
import "./styles.css";

export const metadata: Metadata = {
  title: "Delete Your Account · Dog on Walk",
  description:
    "How to delete your Dog on Walk account, in the app or by asking us, and what happens to your data.",
};

const CONTACT = "baranidharanofficial@gmail.com";

export default function DeleteAccountPage() {
  return (
    <div className="p-8 max-w-3xl">
      <img
        src="/dog-on-walk/icon.jpg"
        alt="Dog on Walk"
        className="h-[100px] mb-3 rounded-[22px]"
      />
      <h3>Delete Your Dog on Walk Account</h3>
      <p>
        Dog on Walk is made by Apptify. Signing in is optional: you only have
        an account if you signed in with Apple, Google, or an email and
        password. You can delete that account at any time, in either of the
        ways below.
      </p>

      <h4>Delete It in the App (Quickest)</h4>
      <ol className="list-decimal pl-6 pb-4">
        <li>Open Dog on Walk and tap Map on the home screen.</li>
        <li>Tap the gear button to open Settings.</li>
        <li>
          Under Account, tap <strong>Delete account</strong> and confirm.
        </li>
        <li>
          Sign in once more, or type your password, to confirm it&rsquo;s you.
        </li>
      </ol>
      <p>Your account is deleted straight away.</p>

      <h4>Or Ask Us to Delete It</h4>
      <p>
        No longer have the app? Send us the request below. We&rsquo;ll email
        you to check the request is yours, then delete your account within 30
        days and let you know when it&rsquo;s done. You can also email{" "}
        <a
          className="underline"
          href={`mailto:${CONTACT}?subject=${encodeURIComponent(
            "Delete my Dog on Walk account"
          )}`}
        >
          {CONTACT}
        </a>{" "}
        from the address you signed in with.
      </p>
      <DeleteAccountForm app="dog-on-walk" />

      <h4>What Gets Deleted</h4>
      <ul className="list-disc pl-6 pb-4">
        <li>
          Your account in Google Firebase Authentication: your account ID,
          email address and name, and your password if you used email.
        </li>
        <li>
          Your entries in any Walk with Friends rooms: your dog&rsquo;s name
          and look, and how your room walks went.
        </li>
      </ul>

      <h4>What Stays</h4>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <strong>Data on your phone.</strong> Your dog, walks, streaks,
          journey and settings are stored only on your device, so we
          can&rsquo;t see or delete them. They stay until you delete the app.
        </li>
        <li>
          <strong>Purchase records.</strong> Apple or Google, and RevenueCat
          (which handles purchases for us), keep records of what you bought,
          for accounting and so you can restore purchases. We don&rsquo;t give
          them your name or email.
        </li>
        <li>
          <strong>Usage statistics.</strong> Firebase Analytics events
          aren&rsquo;t linked to your account. Google deletes them
          automatically under its standard retention settings.
        </li>
      </ul>

      <h4>Subscriptions</h4>
      <p>
        Deleting your account does not cancel a Pro subscription. Cancel it in
        your App Store or Google Play account settings. A lifetime purchase
        stays with your Apple or Google account, and you can get it back with
        Restore purchases in Settings.
      </p>

      <p>
        See the{" "}
        <a className="underline" href="/dog-on-walk/privacy">
          privacy policy
        </a>{" "}
        for everything Dog on Walk collects.
      </p>
    </div>
  );
}
