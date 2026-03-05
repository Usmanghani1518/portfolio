import Image from "next/image";
import { Github, Mail } from "lucide-react";

export default function AuthorCard() {
  return (
    <div className="bg-card-dark border border-border-subtle rounded-xl p-8 mt-16">
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-6">
        {/* Profile Image */}
        <div className="relative w-16 h-16 shrink-0">
          <Image
            src="/images/profile.png"
            alt="Usman Ghani"
            fill
            className="rounded-full object-cover ring-2 ring-primary-cyan ring-offset-2 ring-offset-card-dark"
          />
        </div>

        {/* Author Info */}
        <div>
          <span className="font-heading font-bold text-text-primary text-lg block">
            Usman Ghani
          </span>
          <span className="text-primary-cyan text-sm font-mono mb-2 block">
            Full-Stack Developer & AI Engineer
          </span>
          <p className="text-slate-400 text-sm leading-relaxed">
            Building production-grade AI systems and web applications for
            international clients. 3+ years shipping end-to-end products across
            the US and Australia.
          </p>
          <div className="flex gap-3 mt-3 justify-center md:justify-start">
            <a
              href="https://github.com/Usmanghani1518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:usmanghani.developer@gmail.com"
              className="text-text-muted hover:text-primary-cyan transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
