import Link from "next/link";

export default function NavLink() {
  return (
    <div className="flex items-center flex-col md:flex-row space-x-3">
      <Link href="/download">
        <a className="text-white ">Download</a>
      </Link>
      <Link href="/help">
        <a className="text-white ">Help</a>
      </Link>

      <Link href="/login">
        <a className=" border-2 border-white rounded-full px-10 py-1 text-white">
          Login
        </a>
      </Link>

      <Link href="/signup">
        <a className=" bg-white rounded-full px-10 py-1">Sign Up</a>
      </Link>
    </div>
  );
}
