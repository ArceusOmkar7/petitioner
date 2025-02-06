import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="mt-auto py-6 bg-primary text-white">
      <div className="container text-center">
        <p>© 2024 PetitionPro. Making change happen.</p>
        <div className="mt-4 space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
