"use client";

import { useState } from "react";

interface Props {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="group relative bg-[#1e1e1e] rounded-xl border border-[#333] overflow-hidden">
      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-[#333]">
        <span className="text-xs text-[#888] font-mono">
          {language || "code"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#888] hover:text-white transition-colors font-medium"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Copiado
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>

      {/* Código */}
      <div className="overflow-x-auto">
        <pre className="text-sm text-[#d4d4d4] font-mono leading-relaxed p-4 m-0">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
