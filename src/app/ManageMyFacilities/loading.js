
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] w-full gap-4">
      <span className="loading loading-ring loading-lg text-error scale-150"></span>
      
      <p className="text-lg font-semibold animate-pulse text-slate-500 tracking-wider">
        Loading Manage My Facilities ...
      </p>
    </div>
  );
}