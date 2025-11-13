import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-muted-foreground bg-linear-to-r from-white via-indigo-200/60 to-white dark:from-gray-900 dark:via-indigo-900/40 dark:to-gray-900 mt-40 transition-colors duration-500">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
          <a href="#">
            <h2 className="text-indigo-600 font-bold text-xl">EvolveCV</h2>
          </a>
          <div>
            <p className="text-muted-foreground font-semibold">Product</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground font-semibold">Resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Community
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Careers
                  <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                    We’re hiring!
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-indigo-600 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60">
            Making every customer feel valued—no matter the size of your
            audience.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <a href="#" rel="noreferrer">
              <Instagram className="hover:text-indigo-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/kushal-chavan-44350b269/"
              rel="noreferrer"
            >
              <Linkedin className="hover:text-indigo-500" />
            </a>
            <a href="https://x.com/kushalchavan_" rel="noreferrer">
              <Twitter className="hover:text-indigo-500" />
            </a>
            <a href="#" rel="noreferrer">
              <Youtube className="hover:text-indigo-500" />
            </a>
          </div>
          <p className="mt-3 text-center">© 2025 Resume. Builder</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
