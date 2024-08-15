import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center ">
        <Link href='/main/addtodo' className="text-lg "> به تو دو لیست خوش آمدید</Link>
    </div>
  );
}
