import {ShareButtons} from "./ui/ShareButtons";

export default function CallforPaper() {
    return (
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
            Call For Paper
          </h2>
          <hr className="border-t-2 border-blue-900 mb-6" />
        </section>
        <section className="mb-8 text-justify">
          <p>
          Authors are solicited to contribute to the conference
           by submitting articles that illustrate research results- projects,
            surveying works and industrial experiences that describe significant advances in computing,
             communication control and Networking. Topics of interest for submission include,
              but are not limited to:
          </p>
        </section>
        <section className="text-justify">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Track Details :</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li className="text-gray-700 text-sm">Data Analytics, Data Science and Data Mining</li>
        <li className="text-gray-700 text-sm">Machine Learning And Its Application</li>
        <li className="text-gray-700 text-sm">Big Data Mining and Deep Learning</li>
        <li className="text-gray-700 text-sm">Machine Learning & Deep Learning in Image Processing</li>
        <li className="text-gray-700 text-sm">Artificial Intelligence with Internet of Things</li>
        <li className="text-gray-700 text-sm">Internet of Things (IoT) with Robotics and Automation</li>
        <li className="text-gray-700 text-sm">Artificial Intelligence with Natural Language Processing and Fuzzy Logic</li>
        <li className="text-gray-700 text-sm">Artificial Neural Networks and Convolution Neural Networks</li>
        <li className="text-gray-700 text-sm">Signals and Systems, VLSI Design, Antennas & Embedded Systems</li>
        <li className="text-gray-700 text-sm">Computer Networks, Wireless Sensor Networks and Mobile Communication</li>
        <li className="text-gray-700 text-sm">Network Security, Internet of Things (IoT) Security, Cloud Security and Cyber Security</li>
        <li className="text-gray-700 text-sm">Parallel and Distributed Systems, Cloud Computing, Green Computing & Block Chain Technology</li>
        <li className="text-gray-700 text-sm">Computer Systems, Software Engineering & Web Development</li>
        <li className="text-gray-700 text-sm">Image / Video Processing & Data Compression</li>
        <li className="text-gray-700 text-sm">Control Systems & Automation, IoT with Control Systems & Information Systems</li>
        <li className="text-gray-700 text-sm">Machine Learning & Deep Learning with Cyber Security</li>
        <li className="text-gray-700 text-sm">Researches and Innovations on COVID-19</li>
      </ul>
    </div>
        </section>
        <ShareButtons/>
      </div>
    );
  }
  