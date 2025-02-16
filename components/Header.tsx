import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/galgotia-college-logo.png"
          alt="GCET Logo"
          width={240}
          height={100}
          className="mr-2"
        />
      </div>
      <div className="text-center flex-grow">
        <h1 className="text-4xl font-bold text-maroon mb-2">ICCC 2025</h1>
        <p className="text-xl text-blue-600">
          International Conference on Computer and Communication
        </p>
        <p className="text-sm">
          28<sup>th</sup> April - 29<sup>th</sup> April 2025, Galgotia College
          of Engineering and Technology
        </p>
        <p className="text-sm">
        Plot no. 1, Knowledge Park -II, Greater Noida, G.B. Nagar, U.P. 201310
        </p>
      </div>
      {/* <div>
        <Image src="/ICCC-logo0.png" alt="ICCC Logo" width={214} height={100} />
      </div> */}
    </header>
  );
}

// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="w-full bg-white">
//       <div className="container mx-auto px-4 py-4 flex justify-center items-center">
//         <div className="relative w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
//           <Image
//             src="/ICCC.svg"
//             alt="ICCC 2024 - 30th International Conference on Communications"
//             fill
//             priority
//             sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
//             style={{
//               objectFit: "contain",
//             }}
//           />
//         </div>
//       </div>
//     </header>
//   );
// }
