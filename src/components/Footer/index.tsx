import Image from 'next/image';

import { footerLinks } from '../../constants';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />

          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((e, index) => (
            <div key={index} className="footer__link">
              <h3 className="font-bold">{e.title}</h3>

              {e.links.map((item, index) => (
                <Link key={index} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>

        <div className="footer__copyrights-links">
          <Link href="/privacy-policy" className="text-gray-500">
            Privacy Policy
          </Link>
        </div>

        <div className="footer__copyrights-links">
          <Link href="/terms-of-use" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};
