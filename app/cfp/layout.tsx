import type { Metadata } from "next";
import LatestUpdates from "@/components/UpdatePanel";
import latestUpdates from "../(constants)/latestUpdatesProps";

export const metadata: Metadata = {
  title: "Call for Papers - NCCC 2025",
  description:
    "Submit your papers to the 1st National Conference on Computer and Communications (NCCC 2025) and explore a wide range of research areas including communications, network theory, and signal processing. Join us at Galgotia College of Engineering and Technology in April 2025.",
  keywords: [
    "NCCC 2025",
    "Call for Papers",
    "Communications",
    "Signal Processing",
    "Network Theory",
    "Research Conference",
    "Galgotia College",
    "Computer and Communications Conference",
  ],
  openGraph: {
    title: "Call for Papers - NCCC 2025",
    description:
      "Join NCCC 2025 at Galgotia College and submit your research in communications, network theory, and more. Explore cutting-edge research opportunities.",
    // url: "https://your-website.com/cfp",
    type: "article",
    // images: [
    //   {
    //     url: "https://your-website.com/og-cfp-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "NCCC 2025 Call for Papers",
    //   },
    // ],
  },
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
