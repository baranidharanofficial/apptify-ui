import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  LuBarChart,
  LuCheck,
  LuCreditCard,
  LuMail,
  LuMap,
  LuReceipt,
  LuSettings,
  LuShieldCheck,
  LuSmartphone,
  LuTrash2,
  LuUserX,
  LuUsers,
} from "react-icons/lu";
import { fredoka } from "../fredoka";
import { DeleteAccountForm } from "./delete-form";
import "./styles.css";

export const metadata: Metadata = {
  title: "Delete Your Account · Dog on Walk",
  description:
    "How to delete your Dog on Walk account, in the app or by asking us, and what happens to your data.",
  icons: {
    icon: "/dog-on-walk/icon.jpg",
    apple: "/dog-on-walk/icon.jpg",
  },
};

const CONTACT = "baranidharanofficial@gmail.com";

/** The name of something on screen in the app, like a button. */
function Ui({ icon, danger, children }: {
  icon: ReactNode;
  danger?: boolean;
  children: ReactNode;
}) {
  return (
    <span className={`dda-ui${danger ? " dda-ui-danger" : ""}`}>
      {icon}
      {children}
    </span>
  );
}

function DataItem({ icon, title, children }: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li>
      <span className="dda-item-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </li>
  );
}

export default function DeleteAccountPage() {
  return (
    <main className={`dda ${fredoka.variable}`}>
      <header className="dda-hero">
        <a className="dda-brand" href="/dog-on-walk">
          <img src="/dog-on-walk/icon.jpg" alt="" width={44} height={44} />
          Dog on Walk
        </a>
        <h1>Delete your account</h1>
        <p className="dda-lede">
          Signing in to Dog on Walk is optional. If you made an account with
          Apple, Google or an email, you can delete it at any time, in either
          of the ways below.
        </p>
      </header>

      <div className="dda-body">
        <section className="dda-card" aria-labelledby="dda-in-app">
          <div className="dda-card-head">
            <span className="dda-badge" aria-hidden="true">
              <LuSmartphone />
            </span>
            <div>
              <p className="dda-eyebrow">Option 1 · Quickest</p>
              <h2 id="dda-in-app">Delete it in the app</h2>
            </div>
          </div>
          <ol className="dda-steps">
            <li>
              Open Dog on Walk and tap <Ui icon={<LuMap />}>Map</Ui> on the
              home screen.
            </li>
            <li>
              Tap the <Ui icon={<LuSettings />}>gear</Ui> button to open
              Settings.
            </li>
            <li>
              Under Account, tap{" "}
              <Ui icon={<LuTrash2 />} danger>
                Delete account
              </Ui>{" "}
              and confirm.
            </li>
            <li>
              Sign in once more, or type your password, to confirm it&rsquo;s
              you.
            </li>
          </ol>
          <p className="dda-good">
            <LuCheck aria-hidden="true" />
            Your account is deleted straight away.
          </p>
        </section>

        <section className="dda-card" aria-labelledby="dda-ask">
          <div className="dda-card-head">
            <span className="dda-badge dda-badge-sky" aria-hidden="true">
              <LuMail />
            </span>
            <div>
              <p className="dda-eyebrow">Option 2 · No app?</p>
              <h2 id="dda-ask">Ask us to delete it</h2>
            </div>
          </div>
          <p className="dda-muted">
            We&rsquo;ll email you to check the request is yours, then delete
            your account within 30 days and let you know when it&rsquo;s done.
          </p>
          <DeleteAccountForm app="dog-on-walk" />
          <p className="dda-alt">
            Prefer email? Write to{" "}
            <a
              href={`mailto:${CONTACT}?subject=${encodeURIComponent(
                "Delete my Dog on Walk account"
              )}`}
            >
              {CONTACT}
            </a>{" "}
            from the address you signed in with.
          </p>
        </section>

        <section aria-labelledby="dda-data">
          <h2 id="dda-data" className="dda-section-title">
            What happens to your data
          </h2>
          <div className="dda-grid">
            <div className="dda-card dda-card-tight">
              <h3 className="dda-list-title dda-list-title-deleted">
                <LuTrash2 aria-hidden="true" />
                Deleted
              </h3>
              <ul className="dda-list">
                <DataItem icon={<LuUserX />} title="Your account">
                  Your account ID, email address and name in Google Firebase,
                  and your password if you signed in with email.
                </DataItem>
                <DataItem icon={<LuUsers />} title="Your room entries">
                  Your dog&rsquo;s name and look, and how your Walk with
                  Friends walks went.
                </DataItem>
              </ul>
            </div>
            <div className="dda-card dda-card-tight">
              <h3 className="dda-list-title dda-list-title-kept">
                <LuShieldCheck aria-hidden="true" />
                Kept
              </h3>
              <ul className="dda-list">
                <DataItem icon={<LuSmartphone />} title="Data on your phone">
                  Your dog, walks, streaks, journey and settings live only on
                  your device, so we can&rsquo;t see or delete them. They stay
                  until you delete the app.
                </DataItem>
                <DataItem icon={<LuReceipt />} title="Purchase records">
                  Apple or Google, and RevenueCat (which handles purchases for
                  us), keep what you bought, for accounting and so you can
                  restore it. We don&rsquo;t give them your name or email.
                </DataItem>
                <DataItem icon={<LuBarChart />} title="Usage statistics">
                  Firebase Analytics events aren&rsquo;t linked to your
                  account. Google deletes them under its standard retention
                  settings.
                </DataItem>
              </ul>
            </div>
          </div>
        </section>

        <aside className="dda-callout">
          <LuCreditCard aria-hidden="true" />
          <p>
            <strong>Deleting your account doesn&rsquo;t cancel Pro.</strong>{" "}
            Cancel a subscription in your App Store or Google Play account
            settings. A lifetime purchase stays with your Apple or Google
            account, and you can get it back with Restore purchases in
            Settings.
          </p>
        </aside>

        <footer className="dda-footer">
          <a href="/dog-on-walk/privacy">Privacy policy</a>
          <span aria-hidden="true">·</span>
          <span>
            Made by <a href="/">Apptify</a>
          </span>
        </footer>
      </div>
    </main>
  );
}
