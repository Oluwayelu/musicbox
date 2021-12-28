import Link from "next/link";

export default function NavLink() {
  return (
    <div className="flex items-center flex-col md:flex-row">
      <Link href="/download">
        <a className="text-white mx-3">Download</a>
      </Link>
      <Link href="/help">
        <a className="text-white mx-3">Help</a>
      </Link>

      <Link href="/login">
        <a className="mx-3 border-2 border-white rounded-full px-10 py-1 text-white">
          Login
        </a>
      </Link>

      <Link href="/signup">
        <a className="mx-3 bg-white rounded-full px-10 py-1">Sign Up</a>
      </Link>
    </div>
  );
}
