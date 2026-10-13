import type { Metadata } from "next";
import { getReport, listReportDates } from "@/lib/ideas";
import { IdeasView } from "./ideas-view";
import "./styles.css";

// A private research page: reachable by URL, kept out of search results.
export const metadata: Metadata = {
    title: "Daily app ideas — Apptify",
    robots: { index: false, follow: false },
};

export default async function IdeasPage() {
    const dates = await listReportDates();
    const report = dates[0] ? await getReport(dates[0]) : null;
    return <IdeasView report={report} dates={dates} />;
}
