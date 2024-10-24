import CommitteePageContent from "@/components/CommitteePageContent";
import committeeData from "../(constants)/committeData";

export default function CommitteePage() {
  return (
    <div className="min-h-screen">
      <CommitteePageContent sections={committeeData} />
    </div>
  );
}
