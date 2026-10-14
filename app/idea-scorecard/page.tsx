import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import "./styles.css";

const REPO = "https://github.com/baranidharanofficial/idea-scorecard";

const description =
    "A Claude Code skill that scores app ideas on evidence, not vibes: real complaints, real prices and real competitors, then a verdict and the cheapest next test.";

export const metadata: Metadata = {
    title: "Idea Scorecard — Apptify",
    description,
    openGraph: {
        type: "website",
        url: "https://www.apptify.in/idea-scorecard",
        title: "Idea Scorecard",
        description,
        siteName: "Apptify",
    },
};

type Verdict = "Build" | "Validate" | "Park" | "Kill";

// The nine criteria, in rubric order, with the indie weights and what the
// ends of the 1 to 5 scale mean (references/rubric.md in the skill).
const CRITERIA = [
    { key: "pain", label: "Pain", weight: 20, q: "How badly and how often does it hurt?", low: "A mild annoyance", high: "Costs money, sleep or a job" },
    { key: "evidence", label: "Evidence", weight: 15, q: "Do real people say so, in public, recently?", low: "Only your own belief", high: "5+ sources across 2+ platforms" },
    { key: "pay", label: "Willingness to pay", weight: 15, q: "Do people already pay to fix it?", low: "Free is good enough", high: "They pay today for a worse fix" },
    { key: "reach", label: "Reach", weight: 10, q: "How many people have it, and can you find them?", low: "Hundreds, hard to find", high: "Millions, easy to target" },
    { key: "gap", label: "Competition gap", weight: 10, q: "Is there a clear hole in what exists?", low: "Loved, free rivals", high: "Nothing does it, and you checked" },
    { key: "distribution", label: "Distribution", weight: 10, q: "Can a small team reach users cheaply?", low: "Needs ads or sales calls", high: "Every user brings others" },
    { key: "effort", label: "Build effort", weight: 10, q: "How small and safe is the first version?", low: "Months, or risky tech", high: "A few days" },
    { key: "fit", label: "Builder fit", weight: 5, q: "Do you have the skills and the interest?", low: "Outside your skills", high: "You are the user" },
    { key: "retention", label: "Retention", weight: 5, q: "Will people keep using it?", low: "Once, then gone", high: "A daily habit" },
] as const;

type Key = (typeof CRITERIA)[number]["key"];

// Two ideas the skill scored for us, straight from their scorecards.
const EXAMPLES: {
    title: string;
    oneLiner: string;
    total: number;
    verdict: Verdict;
    confidence: string;
    sources: string;
    scores: Record<Key, number>;
    flag: string;
    forIt: string;
    against: string;
    next: string;
}[] = [
    {
        title: "Solar marketplace",
        oneLiner: "Compare rooftop solar companies in one place, for Indian homeowners.",
        total: 51,
        verdict: "Park",
        confidence: "High",
        sources: "6 sources · Reddit, consumer forum, news",
        scores: { pain: 3, evidence: 4, pay: 3, reach: 5, gap: 3, distribution: 3, effort: 3, fit: 3, retention: 1 },
        flag: "Cold start: empty until each city has installers, prices and reviews",
        forIt: "50 lakh installs so far, and every buyer picks from 34,219 registered vendors. Government ratings count volume, not quality.",
        against: "Bought once, so nobody comes back. Only installers pay, which means city by city sales.",
        next: "One city, by hand, for 21 days. Pass at 30 quote requests and 3 of 5 installers willing to pay per lead.",
    },
    {
        title: "Reels to trip",
        oneLiner: "Turn saved Instagram reels and TikToks into a trip plan with a rough budget.",
        total: 43,
        verdict: "Park",
        confidence: "High",
        sources: "9 sources · Hacker News, App Store, news",
        scores: { pain: 2, evidence: 4, pay: 3, reach: 4, gap: 3, distribution: 3, effort: 2, fit: 3, retention: 2 },
        flag: "Platform risk: no official way to read a reel's audio or transcript",
        forIt: "The leading app gathered 5,185 ratings in under a year and charges about $50 a year.",
        against: "Expedia, Mindtrip and ten small apps already ship it, and trips happen a few times a year.",
        next: "A waitlist page for Indian travellers on Android with a ₹99 founding option. Pass at 150 signups in 14 days.",
    },
];

const VERDICTS: { name: Verdict; from: number; to: number; meaning: string }[] = [
    { name: "Kill", from: 0, to: 40, meaning: "Drop it and move on" },
    { name: "Park", from: 40, to: 55, meaning: "Not now. Rescore on new evidence" },
    { name: "Validate", from: 55, to: 72, meaning: "Run the next test before real code" },
    { name: "Build", from: 72, to: 100, meaning: "Start the smallest useful version" },
];

const RULES = [
    {
        title: "Every quote is real",
        body: "Each piece of evidence is a link it opened, the person's own words and a date. If a page won't load, it isn't cited.",
    },
    {
        title: "Evidence is counted",
        body: "A high Evidence score needs enough independent sources. A high Willingness to pay needs proof that someone pays. The engine refuses anything less.",
    },
    {
        title: "It argues against you",
        body: "Every card carries the strongest honest case against the idea, and generous scores come down because of it.",
    },
    {
        title: "Always a next step",
        body: "The cheapest test that would change the verdict, with a pass line, a cost and a number of days.",
    },
];

const STEPS = [
    {
        title: "Add the skill",
        body: <>Clone it into your skills folder with the command above. It only needs Node 20+.</>,
    },
    {
        title: "Start it in Claude Code",
        body: (
            <>
                Run <code>/idea-scorecard</code> and describe the idea, or hand it a whole list.
            </>
        ),
    },
    {
        title: "Say what it's for",
        body: "Side income, a fun side project or a venture bet. The weights follow your goal.",
    },
    {
        title: "Let it research",
        body: "It looks for complaints, workarounds, prices and competitors, then scores all nine criteria.",
    },
    {
        title: "Read the verdict",
        body: "A scorecard per idea, a leaderboard for a batch, and the test to run next.",
    },
];

export default function IdeaScorecardPage() {
    return (
        <main className="isc">
            <header className="isc-hero">
                <p className="isc-eyebrow">Claude Code skill</p>
                <h1 className="isc-title">Idea Scorecard</h1>
                <p className="isc-lede">
                    Scores app ideas on evidence, not vibes. Real complaints,
                    real prices and real competitors, then a verdict and the
                    cheapest next test.
                </p>
                <div className="isc-actions">
                    <a className="isc-github" href={REPO} target="_blank" rel="noopener noreferrer">
                        <FaGithub aria-hidden="true" />
                        View on GitHub
                    </a>
                    <code className="isc-command">/idea-scorecard</code>
                </div>

                <div className="isc-hero-card">
                    <Scorecard idea={EXAMPLES[0]} />
                </div>
            </header>

            <section className="isc-section" aria-labelledby="isc-real">
                <div className="isc-section-head">
                    <h2 id="isc-real" className="isc-h2">Two of our ideas, scored</h2>
                    <p className="isc-sub">
                        Neither made the cut, and both cards say exactly why
                        and what would change it.
                    </p>
                </div>
                <div className="isc-scale" role="img" aria-label="Verdict scale from 0 to 100: Kill under 40, Park 40 to 54, Validate 55 to 71, Build 72 and up. Solar marketplace sits at 51, Reels to trip at 43.">
                    <div className="isc-scale-bar">
                        {VERDICTS.map((v) => (
                            <span
                                key={v.name}
                                className={`isc-zone isc-zone--${v.name.toLowerCase()}`}
                                style={{ "--from": v.from, "--to": v.to } as CSSProperties}
                            >
                                {v.name}
                            </span>
                        ))}
                        {EXAMPLES.map((idea, i) => (
                            <span
                                key={idea.title}
                                className={`isc-pin${i % 2 ? " isc-pin--low" : ""}`}
                                style={{ "--at": idea.total } as CSSProperties}
                            >
                                <b>{idea.total}</b> {idea.title}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="isc-examples">
                    {EXAMPLES.map((idea) => (
                        <Scorecard key={idea.title} idea={idea} detailed />
                    ))}
                </div>
            </section>

            <section className="isc-section" aria-labelledby="isc-rubric">
                <div className="isc-section-head">
                    <h2 id="isc-rubric" className="isc-h2">Nine questions, fixed answers</h2>
                    <p className="isc-sub">
                        Each one is scored 1 to 5 against written anchors, so
                        a 4 means the same on every idea. Weights shown for a
                        side income goal.
                    </p>
                </div>
                <ul className="isc-rubric">
                    {CRITERIA.map((c) => (
                        <li key={c.key}>
                            <span className="isc-rubric-weight">{c.weight}</span>
                            <h3>{c.label}</h3>
                            <p>{c.q}</p>
                            <span className="isc-rubric-ends">
                                <span>1 · {c.low}</span>
                                <span>5 · {c.high}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="isc-section" aria-labelledby="isc-rules">
                <div className="isc-section-head">
                    <h2 id="isc-rules" className="isc-h2">Built to be honest</h2>
                    <p className="isc-sub">
                        A flattering score that wastes three months is the
                        worst thing it could give you.
                    </p>
                </div>
                <ul className="isc-rules">
                    {RULES.map((r) => (
                        <li key={r.title}>
                            <h3>{r.title}</h3>
                            <p>{r.body}</p>
                        </li>
                    ))}
                </ul>
                <ul className="isc-verdicts">
                    {VERDICTS.slice().reverse().map((v) => (
                        <li key={v.name}>
                            <span className={`isc-verdict isc-verdict--${v.name.toLowerCase()}`}>{v.name}</span>
                            <span className="isc-verdict-range">
                                {v.name === "Build" ? "72+" : v.name === "Kill" ? "under 40" : `${v.from} to ${v.to - 1}`}
                            </span>
                            <span className="isc-verdict-meaning">{v.meaning}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="isc-section" aria-labelledby="isc-steps">
                <div className="isc-section-head">
                    <h2 id="isc-steps" className="isc-h2">How to use it</h2>
                </div>
                <pre className="isc-install">
                    <code>git clone {REPO}.git ~/.claude/skills/idea-scorecard</code>
                </pre>
                <ol className="isc-steps">
                    {STEPS.map((step) => (
                        <li key={step.title}>
                            <h3>{step.title}</h3>
                            <p>{step.body}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <footer className="isc-footer">
                Open source under MIT on{" "}
                <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a>
                {" "}· Made by <Link href="/">Apptify</Link>
            </footer>
        </main>
    );
}

// One idea's scorecard: the total, the verdict and a bar per criterion.
// `detailed` adds the case for and against and the next test.
function Scorecard({ idea, detailed = false }: { idea: (typeof EXAMPLES)[number]; detailed?: boolean }) {
    return (
        <article className="isc-card">
            <div className="isc-card-head">
                <div>
                    <h3 className="isc-card-title">{idea.title}</h3>
                    <p className="isc-card-line">{idea.oneLiner}</p>
                </div>
                <div className="isc-card-score">
                    <span className="isc-card-total">
                        {idea.total}
                        <small>/100</small>
                    </span>
                    <span className={`isc-verdict isc-verdict--${idea.verdict.toLowerCase()}`}>{idea.verdict}</span>
                </div>
            </div>
            <p className="isc-card-meta">
                {idea.confidence} confidence · {idea.sources}
            </p>
            <ul className="isc-bars">
                {CRITERIA.map((c) => (
                    <li key={c.key}>
                        <span className="isc-bar-label">{c.label}</span>
                        <span
                            className="isc-bar"
                            style={{ "--s": idea.scores[c.key] } as CSSProperties}
                            aria-label={`${idea.scores[c.key]} out of 5`}
                        />
                        <span className="isc-bar-n">{idea.scores[c.key]}</span>
                    </li>
                ))}
            </ul>
            <p className="isc-card-flag">
                <span aria-hidden="true">⚑</span> {idea.flag}
            </p>
            {detailed && (
                <dl className="isc-card-notes">
                    <div>
                        <dt>For</dt>
                        <dd>{idea.forIt}</dd>
                    </div>
                    <div>
                        <dt>Against</dt>
                        <dd>{idea.against}</dd>
                    </div>
                    <div>
                        <dt>Next test</dt>
                        <dd>{idea.next}</dd>
                    </div>
                </dl>
            )}
        </article>
    );
}
