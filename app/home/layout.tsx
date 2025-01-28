import type { Metadata } from "next";
import MovingLine from "@/components/MovingLineComponent";
import Slideshow from "@/components/Slideshow";
import LatestUpdates from "@/components/UpdatePanel";
import latestUpdates from "../(constants)/latestUpdatesProps";

export const metadata: Metadata = {
  title: "International Conference on Computer and Communications - ICCC 2025",
  description:
    "Join the International Conference on Computer & Communications (ICCC 2025) for the latest updates on computer science, communications technology, and cutting-edge research. Call for Papers now open.",
  keywords: [
    "ICCC 2025",
    "International Conference on Computer and Communications",
    "Call for Papers",
    "Computer Science",
    "Communications Technology",
    "Research Conference",
    "Technology Updates",
  ],
  openGraph: {
    title:
      "International Conference on Computer and Communications - ICCC 2025",
    description:
      "Discover groundbreaking research in computer and communications at ICCC 2025. Submit your paper now.",
    // url: "https://your-website.com",
    // type: "website",
    // images: [
    //   {
    //     url: "https://your-website.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "ICCC 2025 Conference Banner",
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
      <Slideshow />
      <MovingLine
        messages={[
          { text: "Welcome to ICCC 2025" },
          {
            text: "International Conference on Computer & Communications",
          },
          { text: "Call for Papers", link: "/cfp" },
        ]}
        speed={40}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        fontSize="text-base md:text-lg"
        separator="•"
        className="shadow-md"
      />
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
