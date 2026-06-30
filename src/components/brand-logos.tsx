import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const GeminiLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"
      fill="url(#geminiGrad)"
    />
    <defs>
      <linearGradient id="geminiGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" />
        <stop offset="0.5" stopColor="#818cf8" />
        <stop offset="1" stopColor="#c084fc" />
      </linearGradient>
    </defs>
  </svg>
);

export const OpenAILogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-emerald-600 dark:text-emerald-500`} {...props}>
    <path d="M21.2 10.7a4.9 4.9 0 0 0-2.3-4.1 4.9 4.9 0 0 0-4.8-.1 4.9 4.9 0 0 0-4.2-2.3 4.9 4.9 0 0 0-4.4 2.8 4.9 4.9 0 0 0-2.2 4.1 4.9 4.9 0 0 0 2.3 4.1 4.9 4.9 0 0 0 4.8.1 4.9 4.9 0 0 0 4.2 2.3 4.9 4.9 0 0 0 4.4-2.8 4.9 4.9 0 0 0 2.2-4.1zM11.1 5.3a2.9 2.9 0 0 1 2.9 2v3.7H11a2.9 2.9 0 0 1-2.9-2.9v-.8a2.9 2.9 0 0 1 2.9-2.1zm-4.7 3a2.9 2.9 0 0 1 1 2.7l-1.6 2.7a2.9 2.9 0 0 1-3.7-1.1c-.8-1.4-.4-3.2 1-3.9v-.3a2.9 2.9 0 0 1 3.3-.1zm-.8 7.3a2.9 2.9 0 0 1-1.9-2v-3.7H6.7a2.9 2.9 0 0 1 2.9 2.9v.8c0 1-.5 1.8-1.3 2.1zm5.2 3.1a2.9 2.9 0 0 1-2.9-2v-3.7H13a2.9 2.9 0 0 1 2.9 2.9v.8a2.9 2.9 0 0 1-2.9 2.1zm4.7-3a2.9 2.9 0 0 1-1-2.7l1.6-2.7a2.9 2.9 0 0 1 3.7 1.1c.8 1.4.4 3.2-1 3.9v.3a2.9 2.9 0 0 1-3.3.1zm.8-7.3a2.9 2.9 0 0 1 1.9 2v3.7h-3a2.9 2.9 0 0 1-2.9-2.9v-.8c0-1 .5-1.8 1.3-2.1l2.7.1z" />
  </svg>
);

export const AnthropicLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${className} text-[#cc5a37]`} {...props}>
    <path d="M12 2C8 2 6 6 6 10c0 4 2 8 6 12 4-4 6-8 6-12 0-4-2-8-6-8z" />
    <path d="M6 10h12" />
    <path d="M12 6v8" />
  </svg>
);

export const GoogleSheetsLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
    <path d="M8 8h3v3H8V8zm5 0h3v3h-3V8zm-5 5h3v3H8v-3zm5 0h3v3h-3v-3z" fill="white" />
  </svg>
);

export const GoogleFormsLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#7248B9" />
    <line x1="7" y1="8" x2="17" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="16" x2="13" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GmailLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect width="24" height="24" rx="4" fill="#F2F2F2" />
    <path d="M20 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5Z" fill="#E0E0E0" />
    <path d="M22 7V13L12 18L2 13V7C2 6 2.9 5.2 4 5.2H20C21.1 5.2 22 6 22 7Z" fill="#EA4335" />
    <path d="M12 12.5L22 7V17C22 18.1 21.1 19 20 19H17V9.5L12 12.5L7 9.5V19H4C2.9 19 2 18.1 2 17V7L12 12.5Z" fill="#C5221F" />
  </svg>
);

export const DiscordLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#5865F2]`} {...props}>
    <path d="M20.3 4.4a10.8 10.8 0 0 0-5.2-1.6l-.3.6a14.8 14.8 0 0 0-5.6 0l-.3-.6a10.8 10.8 0 0 0-5.2 1.6C1 8.8.2 16.4 1.2 21a11.9 11.9 0 0 0 6.6 3.4 9 9 0 0 0 1.4-2.3c-.9-.4-1.8-.8-2.6-1.4l.5-.4A8.7 8.7 0 0 0 12 21a8.7 8.7 0 0 0 4.9-.7l.5.4c-.8.6-1.7 1-2.6 1.4a9 9 0 0 0 1.4 2.3 11.9 11.9 0 0 0 6.6-3.4c1-4.6.2-12.2-2.5-16.6zm-11.8 11a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8zm7 0a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8z" />
  </svg>
);

export const SlackLogo = ({ className = 'h-5 w-5', ...props }: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M5 9.5a2.5 2.5 0 1 1-2.5-2.5H5v2.5zm0 1.25a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 5 20.75a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5z" fill="#36C5F0" />
    <path d="M9.5 5A2.5 2.5 0 1 1 12 2.5V5h-2.5zm1.25 0a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3.25 12a2.5 2.5 0 0 1 2.5-2.5h5V5z" fill="#2EB67D" />
    <path d="M19 14.5a2.5 2.5 0 1 1 2.5 2.5H19v-2.5zm0-1.25a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 19 3.25a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5z" fill="#ECB22E" />
    <path d="M14.5 19a2.5 2.5 0 1 1-2.5 2.5V19h2.5zm-1.25 0a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5z" fill="#E01E5A" />
  </svg>
);
