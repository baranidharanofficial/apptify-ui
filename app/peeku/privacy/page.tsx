import React from "react";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Privacy Policy · Peeku",
};

export default function PolicyPage() {
  return (
    <div className="p-8 max-w-3xl">
      <img src="/Peeku.png" alt="Peeku" className="h-[100px] mb-3 rounded-[22px]" />
      <h3>Privacy Policy</h3>
      <p>Last updated: October 27, 2026</p>

      <h4>Introduction</h4>
      <p>
        This Privacy Policy explains what information the Peeku app ("Peeku",
        "we", "us") collects, how it is used, and the choices you have. Peeku
        asks for one slow breath before the apps you choose open, so you can
        decide whether you really want to open them. Peeku is built by Apptify.
        By using Peeku, you agree to the practices described in this policy.
      </p>

      <h4>No Accounts, No Analytics</h4>
      <p>
        Peeku does not require you to sign up or sign in, and we do not ask for
        your name, email address, phone number, or any other contact details to
        use the app. Peeku does not include analytics, advertising, or tracking
        tools, and we do not sell or share your data.
      </p>

      <h4>Your Data Stays on Your Device</h4>
      <p>
        The apps you choose to guard, your settings, your pause history (which
        app you opened, when, how long you breathed, and whether you opened the
        app or walked away), and any answer you give to the optional "What are
        you here for?" question are stored only on your device. We do not
        upload this data to our servers. The home screen widget reads the same
        data from your device. If you delete the app, this data is deleted with
        it. You can also clear your history at any time in Settings.
      </p>

      <h4>Screen Time on iPhone</h4>
      <p>
        On iPhone, Peeku uses Apple's Screen Time frameworks (Family Controls,
        Managed Settings and Device Activity) to hold the apps you choose until
        you have taken a breath. Apple does not tell Peeku which apps you
        picked in its list: Peeku only receives anonymous tokens for them.
        Screen time figures are shown by Apple inside Peeku and are never
        handed to the app. None of this information leaves your device.
      </p>

      <h4>Accessibility Service on Android</h4>
      <p>
        On Android, Peeku uses an Accessibility Service, which you turn on
        yourself, to notice when one of your guarded apps comes to the front so
        it can show the breathing screen first. It reads only the name of the
        app coming to the foreground. If you turn on the optional reel counter,
        it also notices when the short video player in Instagram, YouTube,
        Facebook or Snapchat moves to the next video, and whether that video is
        marked as sponsored, so ads are not counted. If you choose to block
        reels, it presses Back to close the reels player and nothing else. It
        never stores the contents of your screen, and nothing it sees leaves
        your device, except your daily reel totals if you join Scroll Battles
        (see below).
      </p>
      <p>
        Peeku also asks for permission to display over other apps, which it
        uses only to show the breathing screen in front of the app you opened.
      </p>

      <h4>Apple Health</h4>
      <p>
        If you turn on "Mindful Minutes" in Settings, Peeku saves each breath
        you take to Apple Health as a mindful session. Peeku only writes this
        data; it does not read anything from Apple Health. You can turn this
        off in Peeku or in the Health app at any time.
      </p>

      <h4>Scroll Battles (Optional, Android)</h4>
      <p>
        Scroll Battles lets you compare daily reel counts with friends. It is
        off unless you join. When you join, Peeku signs you in anonymously with
        Google Firebase and stores the name you choose, a friend code, your
        daily reel totals for recent days, and the list of friends you have
        added in Google Cloud Firestore. Your name and reel totals are visible
        only to the friends you add with their code. Leaving Scroll Battles in
        the app deletes this record, your friend code, and the anonymous
        account.
      </p>

      <h4>App Icons</h4>
      <p>
        When you add an app by name on iPhone, Peeku looks up its icon using
        Apple's public App Store search. The name you typed and your country
        are sent to Apple to find the icon. No other information is sent.
      </p>

      <h4>Purchases and Subscriptions</h4>
      <p>
        Peeku Pro is offered as an auto-renewing subscription. On iPhone, a
        subscription is required to use Peeku. Payments are processed by Apple
        (App Store) or Google (Google Play); we never receive your payment card
        details or your name. Peeku checks with the store on your device
        whether your subscription is active.
      </p>
      <p>
        You can manage or cancel your subscription at any time in your App
        Store or Google Play account settings. Subscriptions renew
        automatically unless cancelled at least 24 hours before the end of the
        current period.
      </p>

      <h4>Notifications</h4>
      <p>
        On iPhone, Peeku uses a local notification to open the breathing screen
        when you tap "Breathe" on the block screen. Notifications are created
        on your device; we do not send push notifications from a server. You
        can turn them off in your device settings.
      </p>

      <h4>Third-Party Services</h4>
      <p>
        Peeku relies on the following services, each governed by its own
        privacy policy:
      </p>
      <ul className="list-disc pl-6 pb-4">
        <li>
          <a className="underline" href="https://firebase.google.com/support/privacy">
            Google Firebase
          </a>{" "}
          (Scroll Battles, only if you join)
        </li>
        <li>
          <a className="underline" href="https://www.apple.com/legal/privacy/">
            Apple
          </a>{" "}
          (App Store payments, Screen Time, Apple Health, and App Store icon
          search)
        </li>
        <li>
          <a className="underline" href="https://policies.google.com/privacy">
            Google Play
          </a>{" "}
          (payments on Android)
        </li>
      </ul>

      <h4>Data Retention and Your Choices</h4>
      <p>
        Data on your device stays there until you clear it in Settings or
        uninstall the app. Scroll Battles data stays in Firestore until you
        leave Scroll Battles in the app. If you can no longer open the app and
        want your Scroll Battles record removed, contact us with your friend
        code and we will delete it.
      </p>

      <h4>Security</h4>
      <p>
        Data sent to Firebase and Apple is transmitted over encrypted
        connections, and Scroll Battles records can only be read by the
        friends you add. No method of transmission or storage is 100% secure,
        however, and we cannot guarantee absolute security.
      </p>

      <h4>Children's Privacy</h4>
      <p>
        Peeku is not directed at children under 13, and we do not knowingly
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
