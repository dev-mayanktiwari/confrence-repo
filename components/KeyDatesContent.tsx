import { Calendar, FileText, UserCheck } from "lucide-react";

export default function KeyDatesContent() {
  const keyDates = [
    {
      title: "Paper Submission Starts",
      date: "February 28, 2025",
      icon: Calendar,
    },
    {
      title: "Notification of Acceptance",
      date: "March 30, 2025",
      icon: FileText,
    },
    {
      title: "Final Paper Submission",
      date: "April 10, 2025",
      icon: UserCheck,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
          IMPORTANT DATES
        </h2>
        <hr className="border-t-2 border-blue-900 mb-6" />
      </section>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {keyDates.map((item, index) => (
          <section
            key={index}
            className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <item.icon className="text-red-900 mr-3" size={24} />
              <h3 className="font-extrabold text-red-900 text-xl">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 text-lg ml-9">{item.date}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
