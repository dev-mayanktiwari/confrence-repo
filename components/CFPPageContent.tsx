import {
  Communications,
  NetworkAndLearningTheory,
  RFAndElectricalCommunication,
  SignalAndImageProcessing,
} from "@/app/(constants)/topics";

export default function CFPContent() {
  return (
    //  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
          Call for Papers and Submissions
        </h2>
        <hr className="border-t-2 border-blue-900 mb-6" />
      </section>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg">
          The 30th National Conference on Communications (NC3 2024) will be held
          at Galgotia College of Engineering and Technology, Greater Noida
          during April 28 - April 29, 2025.
          {/* NC3 is an annual conference organized
          under the joint sponsorship of the IEEE Communications Society India
          Chapter and the IEEE India Council.  */}
          The conference aims to bring together researchers and practitioners
          from academia and industry to discuss the state-of-the-art in
          communications technology.
        </p>

        <h2 className="text-2xl font-semibold text-blue-900 mt-12 mb-6">
          Areas of Interest
        </h2>

        <p className="mb-4">
          NC3 2025 solicits original technical papers in the following areas of
          interest (but not limited to):
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <TopicSection title="Communications" topics={Communications} />
          <TopicSection
            title="Network and Learning Theory"
            topics={NetworkAndLearningTheory}
          />
          <TopicSection
            title="Signal & Image Processing"
            topics={SignalAndImageProcessing}
          />
          <TopicSection
            title="RF & Optical Communication"
            topics={RFAndElectricalCommunication}
          />
        </div>

        {/* <h2 className="text-2xl font-semibold text-blue-900 mt-12 mb-6">
          Paper Submission Guidelines
        </h2> */}
        {/* 
        <ul className="list-disc pl-6 space-y-3">
          <li>
            Prospective authors are invited to submit original technical papers
            of up to 6 pages for review, following the standard conference
            format.
          </li>
          <li>
            All submissions should be written in English and submitted as a PDF
            file.
          </li>
          <li>
            Papers will be reviewed on the basis of originality, significance,
            technical soundness, and clarity of exposition.
          </li>
          <li>
            Accepted and presented papers will be published in the conference
            proceedings and submitted to UGC Care I and UGC Care II.
          </li>
          <li>
            Papers must be submitted via email. The submission link will be
            provided soon.
          </li>
        </ul> */}

        {/* <h2 className="text-2xl font-semibold text-blue-900 mt-12 mb-6">
          Important Dates
        </h2> */}

        {/* <div className="bg-blue-50 rounded-lg p-6 shadow-md">
          <DateItem label="Paper Submission Deadline" date="October 15, 2023" />
          <DateItem
            label="Notification of Acceptance"
            date="December 15, 2023"
          />
          <DateItem
            label="Camera-Ready Paper Submission"
            date="January 15, 2024"
          />
          <DateItem
            label="Author Registration Deadline"
            date="January 15, 2024"
          />
        </div> */}
      </div>
    </div>
  );
}

function TopicSection({ title, topics }: { title: string; topics: string[] }) {
  return (
    <div className="bg-blue-50 rounded-lg p-5 shadow-md">
      <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {topics.map((topic, index) => (
          <li key={index} className="text-sm">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DateItem({ label, date }: { label: string; date: string }) {
  return (
    <div className="flex justify-between items-center border-b border-blue-200 py-3 last:border-b-0">
      <span className="font-semibold">{label}:</span>
      <span>{date}</span>
    </div>
  );
}
