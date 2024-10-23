import CallforPaper from "@/components/callforpapers";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Slideshow />
      <h1>Call for Paper Submission</h1>
      <CallforPaper/>
    </div>
  );
}
