import Content from "@/components/MainPageContent";
import Slideshow from "@/components/Slideshow";
import Topics from "@/components/Topics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Slideshow/>
      <h1>Topics</h1>
      <Topics/>
    </div>
  );
}
