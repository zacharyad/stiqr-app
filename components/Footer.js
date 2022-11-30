import Link from "next/link";

export default function footer() {
  return (
    <footer className="flex justify-between p-2 text-sm">
      <p className="">copyright 2022</p>
      <h2 className="w-5/6 text-2xl text-end">
        <Link href="/">stiqr</Link>
      </h2>
    </footer>
  );
}
