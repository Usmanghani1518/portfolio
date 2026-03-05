export default function TerminalWindow() {
  return (
    <div className="border border-primary-cyan rounded-xl overflow-hidden shadow-[0_0_24px_rgba(6,182,212,0.3)]">
      {/* Top bar */}
      <div className="h-10 bg-[#1e293b] flex items-center px-4 gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="font-mono text-xs text-[#64748B] ml-3">
          {"usman-portfolio \u2014 bash"}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 font-mono text-sm leading-relaxed bg-[#0f172a]">
        <p>
          <span className="text-primary-cyan">{"\u27A4"}</span>{" "}
          <span className="text-green-400">{"~/projects"}</span>{" "}
          <span className="text-text-primary">{"git checkout master"}</span>
        </p>
        <p className="text-[#94a3b8]">{"Switched to branch 'master'"}</p>
        <p className="mt-2">
          <span className="text-primary-cyan">{"\u27A4"}</span>{" "}
          <span className="text-green-400">{"~/projects"}</span>{" "}
          <span className="text-text-primary">{"npm run develop"}</span>
        </p>
        <p className="text-[#cbd5e1]">{"> portfolio@1.0.0 develop"}</p>
        <p className="text-[#cbd5e1]">{"> next dev"}</p>
        <p className="text-primary-cyan mt-4">
          {"ready - started server on 0.0.0.0:3000"}
        </p>
        <p className="text-[#cbd5e1] italic">
          <span className="cursor-blink">_</span>
        </p>
      </div>
    </div>
  );
}
