interface Update {
  date: string;
  content: string;
}

interface LatestUpdatesProps {
  updates: Update[];
}

export default function LatestUpdates({ updates }: LatestUpdatesProps) {
  return (
    <div className="space-y-4 overflow-y-auto max-h-[500px]">
      {updates.map((update, index) => (
        <div
          key={index}
          className="border-b border-gray-200 pb-2 last:border-b-0"
        >
          <p className="text-sm text-gray-600 mb-1">{update.date}</p>
          <p className="text-gray-800">{update.content}</p>
        </div>
      ))}
    </div>
  );
}
