import { Guidelines1 } from "@/app/(constants)/GuidelinesConstants";

export default function GuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
          Paper Submission Guidelines
        </h2>
        <hr className="border-t-2 border-blue-900 mb-6" />
      </section>
      <div className="space-y-8">
        <section>
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-900">
              INSTRUCTIONS FOR PREPARING FINAL MANUSCRIPT
            </h2>
          </section>
          <h2 className="text-xl font-bold mb-4 text-red-900">
            Please keep the following in mind while preparing your final
            manuscripts:
          </h2>
        </section>
        <section className="pl-3">
          <p className="text-justify">
            <ul>
              {Guidelines1.map((guideline, index) => (
                <li key={index} className="list-disc">
                  {" "}
                  {guideline}{" "}
                </li>
              ))}
            </ul>
            <ul className="list-disc">
              <li>
                All papers must be submitted through the CMT Portal.
              </li>
            </ul>
          </p>
        </section>
        <section>
          <p>
            Each accepted paper must have at least one full registration or a
            student author registration. Each full registration can support up
            to two accepted papers, whereas a student author registration covers
            only one paper. In addition to the above, for your paper to be
            included in the IC3 2025 proceedings published in UGC Care I and UGC
            Care II, it must be presented at the 2025 International Conference
            on Computer and Communications (IC3). A paper with no presenter may
            be removed from the conference proceedings.
          </p>
        </section>
      </div>
    </div>
  );
}
