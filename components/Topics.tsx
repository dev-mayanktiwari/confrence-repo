export default function Topics() {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-900">Call for Papers - NCC 2024</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">About NCC 2024</h2>
            <p className="text-indigo-900">
              The 30th National Conference on Communications (NCC 2024) will be held at Indian Institute of Technology Tirupati, Tirupati, India during February 23-25, 2024. NCC is an annual conference series in India aimed at facilitating scientific exchange, fostering research collaborations and showcasing the latest developments in the field of communications engineering. The technical program will include keynotes, tutorials, regular paper sessions and poster sessions.
            </p>
          </section>
  
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <h2 className="text-2xl font-bold text-indigo-800 mb-4">Communications</h2>
                <ul className="space-y-2 text-indigo-900">
                  <li>Communications theory and systems</li>
                  <li>Information and coding theory</li>
                  <li>Wireless communications</li>
                  <li>Satellite and space communications</li>
                  <li>Quantum communications and computing</li>
                  <li>Security and privacy issues in communications</li>
                  <li>Smart grid and power line communications</li>
                  <li>Edge communications</li>
                  <li>Machine learning/AI- based solutions for wireless communications</li>
                  <li>Energy harvesting and green communications</li>
                  <li>Molecular, biological and multi-scale communications</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-indigo-800 mb-4">Network and learning theory</h2>
                <ul className="space-y-2 text-indigo-900">
                  <li>5G/B5G/6G/next-generation networks</li>
                  <li>Wireless and wireline networks</li>
                  <li>Quantum networking</li>
                  <li>Big data, machine learning and AI for networks</li>
                  <li>Biological networks</li>
                  <li>Cloud & fog/edge computing and networking</li>
                  <li>Complex networks/ social networks</li>
                  <li>Cyber-physical systems / IoT</li>
                  <li>Network economics and pricing</li>
                  <li>Network security and privacy</li>
                  <li>Sensor and ad hoc networks</li>
                  <li>Software-defined networking</li>
                </ul>
              </div>
            </div>
          </div>
  
          <section className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Important Dates</h2>
            <ul className="space-y-2 text-indigo-900">
              <li><span className="font-semibold">Paper Submission Deadline:</span> September 30, 2023</li>
              <li><span className="font-semibold">Notification of Acceptance:</span> November 30, 2023</li>
              <li><span className="font-semibold">Camera Ready Submission:</span> December 15, 2023</li>
              <li><span className="font-semibold">Author Registration Deadline:</span> December 15, 2023</li>
            </ul>
          </section>
  
          <section className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Submission Guidelines</h2>
            <p className="mb-4 text-indigo-900">
              Prospective authors are invited to submit full papers of up to 6 pages in IEEE conference format. All submissions must be in PDF format and should be submitted online through EDAS. The papers will undergo a peer-review process. Accepted and presented papers will be published in the conference proceedings and submitted for inclusion in IEEE Xplore.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-r" role="alert">
              <p className="font-bold">Note:</p>
              <p>At least one author of each accepted paper must register for the conference and present the paper.</p>
            </div>
          </section>
  
          <section className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Best Paper Awards</h2>
            <p className="text-indigo-900">
              NCC 2024 will present Best Paper Awards to high quality papers in each track. The awards will be decided by a committee based on both paper content and presentation quality.
            </p>
          </section>
  
          <section className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Contact Information</h2>
            <p className="text-indigo-900">For any queries regarding paper submission, please contact:</p>
            <p className="font-semibold text-indigo-900 mt-2">ncc2024@iittp.ac.in</p>
          </section>
        </div>
      </div>
    )
  }