import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-6 text-center antialiased">
      <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
        Error 404
      </span>

      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-4 text-base text-slate-400 max-w-md mx-auto leading-relaxed">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">  
        <Link
          href="/" 
          className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition-all w-full sm:w-auto"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}