import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LuChevronDown, LuMail } from "react-icons/lu";
import { fredoka } from "../fredoka";
// Shares the account deletion page's look (cards, badges, footer).
import "../delete-account/styles.css";
import "./styles.css";

export const metadata: Metadata = {
  title: "Support · Dog on Walk",
  description:
    "Help with Dog on Walk: walks, Pro and subscriptions, walking with friends, weather, reminders and the widget. Or email us.",
  icons: {
    icon: "/dog-on-walk/icon.jpg",
    apple: "/dog-on-walk/icon.jpg",
  },
};

const CONTACT = "baranidharanofficial@gmail.com";

/** The name of something on screen in the app, like a button. */
function Ui({ children }: { children: ReactNode }) {
  return <span className="dda-ui">{children}</span>;
}

function Faq({ q, children }: { q: string; children: ReactNode }) {
  return (
    <details className="dds-faq">
      <summary>
        {q}
        <LuChevronDown aria-hidden="true" className="dds-faq-chevron" />
      </summary>
      <div className="dds-faq-answer">{children}</div>
    </details>
  );
}

export default function SupportPage() {
  return (
    <main className={`dda ${fredoka.variable}`}>
      <header className="dda-hero">
        <a className="dda-brand" href="/dog-on-walk">
          <img src="/dog-on-walk/icon.jpg" alt="" width={44} height={44} />
          Dog on Walk
        </a>
        <h1>How can we help?</h1>
        <p className="dda-lede">
          A question about Dog on Walk, a bug to report or an idea for your
          dog&rsquo;s next walk? Find a quick answer below, or write to us.
        </p>
      </header>

      <div className="dda-body">
        <section className="dda-card" aria-labelledby="dds-contact">
          <div className="dda-card-head">
            <span className="dda-badge" aria-hidden="true">
              <LuMail />
            </span>
            <div>
              <p className="dda-eyebrow">Contact</p>
              <h2 id="dds-contact">Email us</h2>
            </div>
          </div>
          <p className="dda-muted">
            Tell us what happened and which phone you use. A screenshot helps
            too. We read every message.
          </p>
          <a
            className="dds-button"
            href={`mailto:${CONTACT}?subject=${encodeURIComponent(
              "Dog on Walk support"
            )}`}
          >
            <LuMail aria-hidden="true" />
            Email support
          </a>
          <p className="dda-alt">
            Or write to <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
          </p>
        </section>

        <section aria-labelledby="dds-faq">
          <h2 id="dds-faq" className="dda-section-title">
            Common questions
          </h2>
          <div className="dda-card dds-faq-list">
            <Faq q="Why did my walk end early?">
              <p>
                Your dog only walks while Dog on Walk is open. Locking your
                screen is fine, but if you switch to another app for more than
                10 seconds, your dog sits down and the walk ends. To stop on
                purpose, use <Ui>Hold to give up</Ui>.
              </p>
            </Faq>

            <Faq q="How do I get Pro back on a new phone?">
              <p>
                Open Settings (tap <Ui>Map</Ui> on the home screen, then the
                gear) and tap <Ui>Restore purchases</Ui>, signed in to the same
                Apple ID or Google account you bought Pro with.
              </p>
              <p>
                If you signed in to Dog on Walk on your old phone, tap{" "}
                <Ui>Sign in</Ui> under Account and use the same Apple, Google or
                email sign-in, and Pro comes with you.
              </p>
            </Faq>

            <Faq q="How do I cancel my subscription?">
              <p>
                Subscriptions renew automatically unless cancelled at least 24
                hours before the end of the current period. Deleting the app or
                your account doesn&rsquo;t cancel them.
              </p>
              <ul className="dds-bullets">
                <li>
                  <strong>iPhone:</strong> open the Settings app, tap your
                  name, then Subscriptions, then Dog on Walk.
                </li>
                <li>
                  <strong>Android:</strong> open Google Play, tap your profile
                  picture, then Payments &amp; subscriptions, then
                  Subscriptions.
                </li>
              </ul>
              <p>
                You can also tap <Ui>Manage subscription</Ui> in the
                app&rsquo;s Settings.
              </p>
            </Faq>

            <Faq q="Can I get a refund?">
              <p>
                Apple and Google handle all payments, so refunds go through
                them. For the App Store, visit{" "}
                <a href="https://reportaproblem.apple.com">
                  reportaproblem.apple.com
                </a>
                . For Google Play, see{" "}
                <a href="https://support.google.com/googleplay/answer/2479637">
                  Google Play refunds
                </a>
                .
              </p>
            </Faq>

            <Faq q="How do I walk with friends?">
              <p>
                Tap <Ui>Walk together</Ui> on the home screen and sign in. Tap{" "}
                <Ui>Create a room</Ui> and share the code. Your friends tap{" "}
                <Ui>Join a friend</Ui> and enter it. Up to 8 dogs can walk in
                a room, and everyone&rsquo;s walk starts at the same time.
              </p>
            </Faq>

            <Faq q="Why doesn't the sky match my weather?">
              <p>
                In Settings, under Time and weather, set <Ui>Your city</Ui>{" "}
                and turn on <Ui>Match my real weather</Ui>. Dog on Walk never
                uses GPS. It only looks up the weather for the city you pick.
              </p>
            </Faq>

            <Faq q="I'm not getting reminders">
              <p>
                Check that <Ui>Daily focus reminder</Ui> is on in the
                app&rsquo;s Settings, and that notifications for Dog on Walk
                are allowed in your phone&rsquo;s settings.
              </p>
            </Faq>

            <Faq q="How do I add the home screen widget?">
              <ul className="dds-bullets">
                <li>
                  <strong>iPhone:</strong> touch and hold an empty spot on your
                  Home Screen, tap Edit, then Add Widget, and search for Dog on
                  Walk.
                </li>
                <li>
                  <strong>Android:</strong> touch and hold an empty spot on
                  your home screen, tap Widgets, and find Dog on Walk.
                </li>
              </ul>
              <p>Your dog is happy once today&rsquo;s focus goal is met.</p>
            </Faq>

            <Faq q="What happens to my data?">
              <p>
                Your dog, walks, streaks and progress stay on your phone.
                Signing in is optional. Read the{" "}
                <a href="/dog-on-walk/privacy">privacy policy</a> for the
                details.
              </p>
            </Faq>

            <Faq q="How do I delete my account?">
              <p>
                In Settings, under Account, tap <Ui>Delete account</Ui>. If you
                can&rsquo;t open the app,{" "}
                <a href="/dog-on-walk/delete-account">
                  ask us to delete it here
                </a>
                .
              </p>
            </Faq>
          </div>
        </section>

        <footer className="dda-footer">
          <a href="/dog-on-walk/privacy">Privacy policy</a>
          <span aria-hidden="true">·</span>
          <a href="/dog-on-walk/delete-account">Delete account</a>
          <span aria-hidden="true">·</span>
          <span>
            Made by <a href="/">Apptify</a>
          </span>
        </footer>
      </div>
    </main>
  );
}
