import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import { AuthProviders } from ".";

const Navbar = () => {
  const session = {};

  return (
    <nav className="flexBetween px-8 py-5 border-b border-nav-border gap-4">
      <div className="flex-1 flex justify-start items-center gap-10">
        {/* Logo */}
        <Link href="">
          <Image src="/logo.svg" alt="Flexible" width={115} height={43} />
        </Link>

        {/* navLinks */}
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-4">
        {session ? (
          <>
            User Photo
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
