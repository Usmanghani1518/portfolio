import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Usmanghani1518", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/usman-ghani-b56431271/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:usmanghani.developer@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="font-heading text-xl font-bold text-text-primary">
              {"Usman"}
              <span className="text-primary-cyan">.</span>
            </span>
            <p className="font-mono text-[12px] text-[#64748B] mt-2">
              &copy; {new Date().getFullYear()} Usman Ghani. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#64748B] hover:text-primary-cyan transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#64748B] hover:text-primary-cyan transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom micro-line */}
        <div className="text-center mt-8 pt-8 border-t border-border-subtle">
          <p className="font-mono text-[11px] text-[#475569]">
            {"Designed & Built by Usman Ghani"}
          </p>
        </div>
      </div>
    </footer>
  );
}
