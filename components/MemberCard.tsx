import Image from "next/image";

interface MemberCardProps {
  name: string;
  role: string;
  affiliation: string;
  imageUrl: string;
}

export default function MemberCard({
  name,
  role,
  affiliation,
  imageUrl,
}: MemberCardProps) {
  return (
    <div className="bg-white  rounded-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500 mt-1">{affiliation}</p>
      </div>
    </div>
  );
}
