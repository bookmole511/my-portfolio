import Link from "next/link";

const Footer = () => {
  return (
    <footer className="-translate-y-px bg-white border-t border-border">
      <div className="container">
        <div className="border-x border-border">
          <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7 text-center">
          © 2025-{new Date().getFullYear()} Park Jaeseok. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
