import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b bg-slate-600 text-white">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="flex-start space-x-4 text-sm">
          <Link href="/permanent" className="flex-start">
            Permanent Lighting
          </Link>
          <Link href="/packages" className="flex-start">
            Pro Packages & Ready To Hang
          </Link>
          <Link href="/bulbs" className="flex-start">
            C9 and C7 Bulbs
          </Link>
          <Link href="/mini" className="flex-start">
            Mini Lights
          </Link>
          <Link href="/stringers" className="flex-start">
            Socker Spools & Stringers
          </Link>
          <Link href="/accessories" className="flex-start">
            Accessories
          </Link>
          <Link href="/decor" className="flex-start">
            Decor
          </Link>
          <Link href="/patio" className="flex-start">
            Patio Lights
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
