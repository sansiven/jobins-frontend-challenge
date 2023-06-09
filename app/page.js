import Menu from "@components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-wrapper w-full flex justify-center items-center h-full">
      <Link href={"/admin/dashboard"} className="mt-10">
        Go to Dashboard
      </Link>
    </main>
  );
}
