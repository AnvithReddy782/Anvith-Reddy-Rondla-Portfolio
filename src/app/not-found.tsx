import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[70dvh] items-center px-6 pt-24">
        <div className="container-main max-w-xl">
          <span className="label mb-5 block">Error 404</span>
          <h1 className="display-lg">This page was never shipped.</h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
            The page you are looking for does not exist or has been moved. The
            projects, however, are all still in production.
          </p>
          <Link href="/" className="btn-secondary mt-9">
            Back to the portfolio
          </Link>
        </div>
      </main>
    </>
  );
}
