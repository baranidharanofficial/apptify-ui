import { promises as fs } from "fs";
import path from "path";

// Daily app-idea reports, written to data/ideas/YYYY-MM-DD.json by the
// "Daily app ideas" cloud routine. This file is the schema that routine
// follows, so keep the two in step.

export const CATEGORIES = [
    "Mobile app",
    "Web app",
    "SaaS",
    "Browser extension",
    "Desktop app",
    "AI tool",
    "Developer tool",
    "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Source = {
    platform: string; // "Reddit", "X", "Hacker News", "Play Store review", ...
    title: string; // Post title, or the community/thread it came from
    url: string;
    quote: string; // The user's own words, verbatim
    engagement?: string; // "412 upvotes · 96 comments"
    date?: string; // YYYY-MM-DD the post was made
};

export type Competitor = {
    name: string;
    url?: string;
    gap: string; // Why users are still unhappy with it
};

export type Idea = {
    id: string;
    title: string;
    category: Category;
    oneLiner: string;
    problem: string;
    targetUsers: string;
    painScore: number; // 1–10: how intense and how widespread
    effort: "Weekend" | "1–2 weeks" | "1 month+";
    monetization: string;
    mvp: string[];
    competitors: Competitor[];
    sources: Source[];
};

export type IdeasReport = {
    date: string; // YYYY-MM-DD, IST
    summary: string;
    ideas: Idea[];
};

const DATA_DIR = path.join(process.cwd(), "data", "ideas");
const DATE_FILE = /^(\d{4}-\d{2}-\d{2})\.json$/;

// Newest first.
export async function listReportDates(): Promise<string[]> {
    let files: string[];
    try {
        files = await fs.readdir(DATA_DIR);
    } catch {
        return [];
    }
    return files
        .map((file) => DATE_FILE.exec(file)?.[1])
        .filter((date): date is string => Boolean(date))
        .sort()
        .reverse();
}

export async function getReport(date: string): Promise<IdeasReport | null> {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
    try {
        const raw = await fs.readFile(path.join(DATA_DIR, `${date}.json`), "utf8");
        return JSON.parse(raw) as IdeasReport;
    } catch {
        return null;
    }
}
