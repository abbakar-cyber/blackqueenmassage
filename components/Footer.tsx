import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/bqms-logo.png" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={link}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="https://www.facebook.com/profile.php?id=100075464952716&mibextid=LQQJ4d"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
                  <h3><strong>Socials</strong></h3>
                <ul className="regular-14 flex gap-4 text-gray-30">
                <li><Link href='https://www.facebook.com/profile.php?id=100075464952716&mibextid=LQQJ4d'><Image src="/facebook.svg" alt="logo" width={24} height={24}/></Link></li>
                  <li><Link href="https://www.instagram.com/taylormarry_?igsh=YjNqbnk3MWF1bnk2&utm_source=qr"><Image src="/instagram.svg" alt="logo" width={24} height={24}/></Link></li>
                  <li><Link href="https://www.snapchat.com/add/taylorannespa?share_id=XdA_ssgQTVmekzZPR5_BJw&locale=en_US"><Image src="/snapchat.png" alt="logo" width={24} height={24}/></Link></li>
                </ul>
              
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          &copy; 2021 Black Queen Massage And Escort | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
