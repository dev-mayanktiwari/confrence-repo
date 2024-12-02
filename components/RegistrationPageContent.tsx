import { BlinkingText } from "./BlinkingText";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
          Registration Information
        </h2>
        <hr className="border-t-2 border-blue-900 mb-6" />
      </section>
      <div className="space-y-8">
        {/* <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8"
          role="alert"
        >
          <BlinkingText
            text="Registration link will be available soon"
            className="text-lg font-semibold block text-center"
          />
        </div> */}
        <section>
          <p className="text-justify">
            Each accepted paper must have at least one full registration or a
            student author registration. Each full registration can support up
            to two accepted papers, whereas a student author registration covers
            only one paper. In addition to the above, for your paper to be
            included in the NC3 2025 proceedings published in UGC Care I and UGC
            Care II, it must be presented at the 2025 International Conference
            on Computer and Communications (NC3). A paper with no presenter may
            be removed from the conference proceedings.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Registration Fees
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b border-r">Category</th>

                  <th className="py-2 px-4 border-b">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-r text-center">
                    Academicians/ Scientists/ Researchers/ Students
                  </td>
                  <td className="py-2 px-4 border-b text-center">₹ 2,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-r text-center">
                    Ph.D. Scholars
                  </td>
                  <td className="py-2 px-4 border-b text-center">₹ 3,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border -r text-center">
                    Online Participants
                  </td>
                  <td className="py-2 px-4 border-b text-center">₹ 2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Registration Link
          </h2>
          <p>
            <a
              href="https://easychair.org/conferences/?conf=nccc2025"
              target="_blank"
              className="font-bold underline text-blue-500 text-xl"
            >
              {" "}
              Click here{" "}
            </a>
          </p>
        </section>
        {/* <section className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Important Notes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              At least one author of each accepted paper must register for the
              conference at the full rate.
            </li>
            <li>
              Each full registration covers up to two papers by the same author.
            </li>
            <li>
              The registration fee includes access to all technical sessions,
              conference proceedings, and meals during the conference days.
            </li>
            <li>
              Student registrations must be accompanied by proof of full-time
              student status.
            </li>
            <li>
              IEEE member rates apply to members of IEEE or IEEE Communications
              Society. Proof of membership will be required during registration.
            </li>
            <li>
              Early bird registration rates are available until January 15,
              2024. After this date, regular registration rates will apply.
            </li>
            <li>
              All fees are in Indian Rupees (INR) and are inclusive of
              applicable taxes.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Payment Methods
          </h2>
          <p>
            Details about payment methods will be provided when the registration
            link becomes available.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Cancellations received before January 31, 2024, will be eligible
              for a refund, less a 20% administrative fee.
            </li>
            <li>
              No refunds will be given for cancellations received after January
              31, 2024.
            </li>
            <li>
              All cancellation requests must be submitted in writing to the
              conference organizers.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Contact Information
          </h2>
          <p>For any queries regarding registration, please contact:</p>
          <p className="font-semibold">Email: ncc2024@iittp.ac.in</p>
        </section> */}
      </div>
    </div>
  );
}
