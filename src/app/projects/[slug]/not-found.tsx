import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[70dvh] items-center px-6 pt-24">
        <div className="container-main max-w-xl">
          <span className="label mb-5 block">Error 404</span>
          <h1 className="display-lg">Case study not found.</h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link href="/#work" className="btn-secondary mt-9">
            <ArrowLeft size={14} />
            Back to all work
          </Link>
        </div>
      </main>
    </>
  );
}
