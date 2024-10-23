import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CommitteeMember {
  name: string;
  role: string;
  affiliation: string;
  imageUrl: string;
}

export function MemberCard({
  name,
  role,
  affiliation,
  imageUrl,
}: CommitteeMember) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
          <Image
            src={imageUrl}
            alt={name}
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1 text-center">
          {name}
        </h3>
        <p className="text-sm text-blue-600 font-medium mb-1">{role}</p>
        <p className="text-xs text-gray-500 text-center">{affiliation}</p>
      </CardContent>
    </Card>
  );
}
