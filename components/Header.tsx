import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex flex-1 items-center justify-start">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="V Docs logo"
          height={32}
          width={32}
          className="mr-2"
        />
        <span className="hidden md:inline font-semibold text-xl">V Docs</span>
      </Link>
      {children}
    </div>
  );
};

export default Header;
