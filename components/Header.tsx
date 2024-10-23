import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="relative w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
          <Image
            src="/header.svg"
            alt="NCC 2024 - 30th National Conference on Communications"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </header>
  );
}
