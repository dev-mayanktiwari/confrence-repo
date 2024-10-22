export default function Content() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our College</h2>
        <p className="text-gray-700">
          Our college is committed to providing high-quality education and
          fostering a vibrant academic community. With state-of-the-art
          facilities and dedicated faculty, we strive to prepare our students
          for successful careers and meaningful contributions to society.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>College Ranked Top 10 in National Survey</li>
          <li>New Research Center Opening Next Month</li>
          <li>Annual Cultural Festival Dates Announced</li>
          <li>Alumni Donation Funds New Scholarship Program</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Open House for Prospective Students - May 15</li>
          <li>Guest Lecture Series: Innovation in Technology - May 20</li>
          <li>Summer Internship Fair - June 5</li>
          <li>Graduation Ceremony - June 30</li>
        </ul>
      </section>
    </div>
  );
}
