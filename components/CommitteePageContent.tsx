import MemberCard from "./MemberCard";

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
    <div className="container mx-auto px-4 py-8">
      {sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
            {section.title}
          </h2>
          <hr className="border-t-2 border-blue-900 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {section.members.map((member, memberIndex) => (
              <MemberCard
                key={memberIndex}
                name={member.name}
                role={member.role}
                affiliation={member.affiliation}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
