import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="p-4 items-end align-bottom border-b border-y-blue-300 flex justify-between">
      <h1 className="px-4 text-3xl text-white">
        <Link href="/">stiqr</Link>
      </h1>

      <ul className="flex justify-around w-1/6">
        <li className="">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
