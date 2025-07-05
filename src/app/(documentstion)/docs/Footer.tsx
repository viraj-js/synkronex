import React from "react";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import footerContent from './content/en/footer';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

const Footer = () => (
  <footer className="w-full border-t border-border bg-background/70 py-6 mt-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <span>{footerContent.copyright}</span>
      </div>
      <div className="flex items-center gap-4">
        {footerContent.links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-xs">
        {footerContent.madeWith}
      </div>
    </div>
  </footer>
);

export default Footer;
