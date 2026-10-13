import Link from "next/link";
import { CATEGORIES, type Idea, type IdeasReport } from "@/lib/ideas";

const longDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

const shortDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
    });

const slug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export function IdeasView({
    report,
    dates,
}: {
    report: IdeasReport | null;
    dates: string[];
}) {
    return (
        <main className="ix">
            <header className="ix-head">
                <p className="ix-eyebrow">Daily app ideas</p>
                <h1 className="ix-title">
                    {report ? longDate(report.date) : "No reports yet"}
                </h1>
                {report ? (
                    <p className="ix-summary">{report.summary}</p>
                ) : (
                    <p className="ix-summary">
                        The first report lands here after the morning routine
                        runs (9:00 AM IST).
                    </p>
                )}
            </header>

            {dates.length > 1 && (
                <nav className="ix-dates" aria-label="Past reports">
                    {dates.map((date) => (
                        <Link
                            key={date}
                            href={date === dates[0] ? "/ideas" : `/ideas/${date}`}
                            className="ix-date"
                            aria-current={date === report?.date ? "page" : undefined}
                        >
                            {shortDate(date)}
                        </Link>
                    ))}
                </nav>
            )}

            {report && <Report report={report} />}
        </main>
    );
}

function Report({ report }: { report: IdeasReport }) {
    // The routine writes ideas best-first, so file order is the overall rank.
    const ranked = report.ideas.map((idea, i) => ({ idea, rank: i + 1 }));
    const groups = CATEGORIES.map((category) => ({
        category,
        items: ranked.filter(({ idea }) =>
            category === "Other"
                ? !CATEGORIES.includes(idea.category) || idea.category === "Other"
                : idea.category === category
        ),
    })).filter((group) => group.items.length > 0);

    return (
        <>
            <nav className="ix-chips" aria-label="Categories">
                {groups.map(({ category, items }) => (
                    <a key={category} href={`#${slug(category)}`} className="ix-chip">
                        {category} <span>{items.length}</span>
                    </a>
                ))}
            </nav>

            {groups.map(({ category, items }) => (
                <section key={category} id={slug(category)} className="ix-group">
                    <h2 className="ix-group-title">{category}</h2>
                    {items.map(({ idea, rank }) => (
                        <IdeaCard key={idea.id} idea={idea} rank={rank} />
                    ))}
                </section>
            ))}
        </>
    );
}

function IdeaCard({ idea, rank }: { idea: Idea; rank: number }) {
    return (
        <article className="ix-card" id={idea.id}>
            <div className="ix-card-top">
                <span className="ix-rank">#{rank}</span>
                <span className="ix-meta">
                    Pain {idea.painScore}/10 · {idea.effort}
                </span>
            </div>
            <h3 className="ix-card-title">{idea.title}</h3>
            <p className="ix-oneliner">{idea.oneLiner}</p>

            <dl className="ix-facts">
                <dt>Problem</dt>
                <dd>{idea.problem}</dd>
                <dt>Who</dt>
                <dd>{idea.targetUsers}</dd>
                <dt>Money</dt>
                <dd>{idea.monetization}</dd>
            </dl>

            <h4 className="ix-label">What people are saying</h4>
            <ul className="ix-sources">
                {idea.sources.map((source) => (
                    <li key={source.url} className="ix-source">
                        <blockquote>“{source.quote}”</blockquote>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.platform} · {source.title}
                        </a>
                        {(source.engagement || source.date) && (
                            <span className="ix-source-meta">
                                {[source.engagement, source.date].filter(Boolean).join(" · ")}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            {idea.mvp.length > 0 && (
                <details className="ix-more">
                    <summary>MVP scope</summary>
                    <ul>
                        {idea.mvp.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ul>
                </details>
            )}

            {idea.competitors.length > 0 && (
                <details className="ix-more">
                    <summary>Existing options and their gaps</summary>
                    <ul>
                        {idea.competitors.map((c) => (
                            <li key={c.name}>
                                {c.url ? (
                                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                                        {c.name}
                                    </a>
                                ) : (
                                    <strong>{c.name}</strong>
                                )}
                                : {c.gap}
                            </li>
                        ))}
                    </ul>
                </details>
            )}
        </article>
    );
}
