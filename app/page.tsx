import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1>Hello World</h1>
      <Link href="/rsvp">RSVP Here!</Link>
    </main>
  );
}
