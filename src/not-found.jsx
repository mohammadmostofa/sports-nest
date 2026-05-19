import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6 text-center">

      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-blue-500">404</h1>

      {/* Title */}
      <h2 className="text-2xl -tracking-widest font-semibold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-3 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
      >
        Go Back Home
      </Link>

    </div>
  );
}