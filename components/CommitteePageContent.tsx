import { MemberCard } from "./MemberCard";
interface CommitteeMember {
  name: string;
  role: string;
  affiliation: string;
  imageUrl: string;
}

interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}

interface CommitteeProps {
  sections: CommitteeSection[];
}

export default function CommitteePageContent({ sections }: CommitteeProps) {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {sections.map((section, index) => (
        <section key={index} className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-primary tracking-tight">
              {section.title}
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {section.members.map((member, memberIndex) => (
              <MemberCard key={memberIndex} {...member} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
