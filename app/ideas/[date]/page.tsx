import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getReport, listReportDates } from "@/lib/ideas";
import { IdeasView } from "../ideas-view";
import "../styles.css";

export const metadata: Metadata = {
    title: "Daily app ideas — Apptify",
    robots: { index: false, follow: false },
};

export const dynamicParams = false;

export async function generateStaticParams() {
    const dates = await listReportDates();
    return dates.map((date) => ({ date }));
}

export default async function IdeasDayPage({ params }: { params: { date: string } }) {
    const report = await getReport(params.date);
    if (!report) notFound();
    return <IdeasView report={report} dates={await listReportDates()} />;
}
