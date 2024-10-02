import FormA from "@/components/FormA";
import { X } from "lucide-react";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9f9fa]">
      <div className="relative h-[600px] w-[500px] shadow-2xl text-center rounded-xl">
        <X className="absolute top-2 right-2" opacity={0.4}/>
        <FormA/>
      </div>
    </main>
  );
}
