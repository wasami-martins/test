import Link from "next/link";

export default function Notfound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-3xl mb-3 pb-3">404</h1>
      <p className="text-3xl font-bold mb-3 pb-3">page not found</p>
      <p>
        <Link href="/"> Back Home</Link>
      </p>
    </div>
  );
}
