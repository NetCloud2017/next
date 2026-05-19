import Link from "next/link";
export default function Notfound() {
  return (
    <div>
      <h2>not found</h2>
      <p>could not found this page</p>

      <Link href="/"> return Home</Link>
    </div>
  );
}
