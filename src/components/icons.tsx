import { cn } from "@/lib/utils";

export const Icons = {
  logo: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" 
      className={cn("size-4", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  sparkles: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M12 3L14 9L20 10L15 15L16 21L12 18L8 21L9 15L4 10L10 9L12 3Z" />
    </svg>
  ),
  microsoft: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-4", className)}
    >
      <rect x="2" y="2" width="9" height="9" />
      <rect x="13" y="2" width="9" height="9" />
      <rect x="2" y="13" width="9" height="9" />
      <rect x="13" y="13" width="9" height="9" />
    </svg>
  ),
  aws: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ),
  google: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  intel: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  soc2: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M12 22V12" />
      <path d="M12 12L2 7" />
      <path d="M12 12l10-5" />
    </svg>
  ),
  soc2Dark: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M12 22V12" />
      <path d="M12 12L2 7" />
      <path d="M12 12l10-5" />
    </svg>
  ),
  hipaa: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  hipaaDark: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  gdpr: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  gdprDark: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  boat: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M3 18h18l-9-15z" />
      <path d="M3 18c0 2 1.5 3 3 3s3-1 3-3" />
      <path d="M15 18c0 2 1.5 3 3 3s3-1 3-3" />
    </svg>
  ),
  supabase: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M12 12L2 7" />
      <path d="M12 12l10-5" />
      <path d="M12 12v10" />
    </svg>
  ),
  figma: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
  workos: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  runwayml: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M12 12L2 7" />
      <path d="M12 12l10-5" />
    </svg>
  ),
  gemini: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <circle cx="8" cy="12" r="6" />
      <circle cx="16" cy="12" r="6" />
    </svg>
  ),
  vercel: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 19.7778H22L12 2Z" />
    </svg>
  ),
  replit: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  posthog: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("size-4", className)}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M8 10h8M8 14h8" />
    </svg>
  )
};