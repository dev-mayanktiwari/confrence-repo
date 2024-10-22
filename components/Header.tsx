import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="IIT Tirupati Logo"
          width={80}
          height={80}
          className="mr-2"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold">TIRUPATI</h2>
        </div>
      </div>
      <div className="text-center flex-grow">
        <h1 className="text-4xl font-bold text-maroon mb-2">NCC 2024</h1>
        <p className="text-xl text-blue-600">
          30th National Conference on Communications
        </p>
        <p className="text-sm">
          28th February - 2nd March 2024, Indian Institute of Technology Madras
        </p>
      </div>
      <div>
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="NCC Logo"
          width={80}
          height={80}
        />
      </div>
    </header>
  );
}
