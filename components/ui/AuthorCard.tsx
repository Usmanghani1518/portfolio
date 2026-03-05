"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Mail } from "lucide-react";

export default function AuthorCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-card-dark border border-border-subtle rounded-xl p-8 mt-16">
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-6">
        {/* Profile Image or Fallback */}
        {imgError ? (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 ring-2 ring-primary-cyan ring-offset-2 ring-offset-card-dark">
            <span className="text-text-primary font-heading font-bold text-lg">
              UG
            </span>
          </div>
        ) : (
          <div className="relative w-16 h-16 shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Usman Ghani"
              fill
              className="rounded-full object-cover ring-2 ring-primary-cyan ring-offset-2 ring-offset-card-dark"
              onError={() => setImgError(true)}
            />
          </div>
        )}

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

      {/* Dev note - hidden in production */}
      {process.env.NODE_ENV === "development" && (
        <p className="text-text-muted text-xs mt-4 text-center opacity-60">
          {"Add your profile photo at /public/images/profile.jpg to replace the initials avatar."}
        </p>
      )}
    </div>
  );
}
