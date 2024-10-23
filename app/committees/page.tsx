import CommitteePageContent from "@/components/CommitteePageContent";

const committeeData = [
  {
    title: "Organising Committee (Chief Patrons)",
    members: [
      {
        name: "Shri Sunil Galgotia",
        role: "Chairman",
        affiliation: "Galgotias Educational Institutions",
        imageUrl: "/person.jpg",
      },
      {
        name: "Dr. Dhruv Galgotia",
        role: "CEO",
        affiliation: "Galgotias Educational Institutions",
        imageUrl: "/person.jpg",
      },
      // Add more members as needed
    ],
  },
  {
    title: "Patron(s)",
    members: [
      {
        name: "Prof.(Dr.) Vikram Bali",
        role: "Director",
        affiliation: "Galgotias College of Engineering & Technology",
        imageUrl: "/person.jpg",
      },
      // Add more members as needed
    ],
  },
  {
    title: "Co-Patron(s)",
    members: [
      {
        name: "Prof. Brijesh Singh",
        role: "Dean Academics",
        affiliation: "Galgotias College of Engineering & Technology",
        imageUrl: "/person.jpg",
      },
      // Add more members as needed
    ],
  },
];

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CommitteePageContent sections={committeeData} />
    </div>
  );
}
