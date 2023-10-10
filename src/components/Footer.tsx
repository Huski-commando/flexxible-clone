import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface ColumnProps {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex justify-start items-center flex-col w-full gap-20 bg-light-white lg:px-20 py-6 px-5 border-t-2">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            alt="flexibble footer logo"
            width={115}
            height={38}
          />
          <p className="text-sm text-start font-normal mt-5 max-w-xs">
            Flexibble is the world&apos;s leading community for creatives to
            share, grow, and get hired.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            links={footerLinks[3].links}
            title={footerLinks[3].title}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              links={footerLinks[4].links}
              title={footerLinks[4].title}
            />
            <FooterColumn
              links={footerLinks[5].links}
              title={footerLinks[5].title}
            />
          </div>
          <FooterColumn
            links={footerLinks[6].links}
            title={footerLinks[6].title}
          />
        </div>
      </div>

      <div className="flex justify-between items-center max-sm:flex-col w-full text-sm font-normal border-t py-4">
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray-500">
          <span className="text-black font-semibold">10,214</span> Projects
          Submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
