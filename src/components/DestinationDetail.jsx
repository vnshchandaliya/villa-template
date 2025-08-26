import { useParams } from "react-router-dom";

export default function DestinationDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {id.replace("-", " ")} Details
      </h1>
      <p className="text-lg text-gray-600">
        This is the detail page for <span className="font-semibold">{id}</span>.
        Yahan aap har property ka gallery, description, pricing etc. show kar
        sakte ho.
      </p>
    </div>
  );
}
