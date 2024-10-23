import type { Metadata } from "next";
import MovingLine from "@/components/MovingLineComponent";
import Slideshow from "@/components/Slideshow";
import LatestUpdates from "@/components/UpdatePanel";

export const metadata: Metadata = {
  title: "Home - NCC 2024",
  description: "Welcome to the 30th National Conference on Communications",
};

const movingLineMessages = [
  "Registration is now open!",
  "Call for paper submissions",
  "Early bird registration ends soon",
];

const latestUpdates = [
  { date: "2023-05-15", content: "Conference dates announced" },
  { date: "2023-05-10", content: "Keynote speakers confirmed" },
  { date: "2023-05-05", content: "Call for papers released" },
];

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
          { text: "Welcome to NCC 2024" },
          { text: "30th National Conference on Communications" },
          { text: "Call for Papers", link: "/call-for-papers" },
          { text: "IIT Madras" },
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
