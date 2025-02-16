import type { Metadata } from "next";
import LatestUpdates from "@/components/UpdatePanel";
import latestUpdates from "../(constants)/latestUpdatesProps";

export const metadata: Metadata = {
  title: "Paper Submission Guidelines - ICCC 2025",
  description:
    "Detailed guidelines for preparing and submitting papers for the International Conference on Computer and Communications (ICCC) 2025. Learn about the manuscript requirements and presentation rules.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex-grow flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 p-4 order-2 lg:order-1 mt-3">
          <div className="bg-white shadow-md rounded-lg p-4 min-h-[600px]">
            <h2 className="text-xl font-bold mb-4 text-blue-900">
              Latest Updates
            </h2>
            <LatestUpdates updates={latestUpdates} />
          </div>
        </aside>
        <main className="flex-grow p-4 order-1 lg:order-2">{children}</main>
      </div>
    </>
  );
}
