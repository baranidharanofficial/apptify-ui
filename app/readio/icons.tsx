export function Headphones({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M3.5 15v-3a8.5 8.5 0 0 1 17 0v3" />
            <rect x="2.5" y="14" width="5" height="7" rx="1.8" fill="currentColor" />
            <rect x="16.5" y="14" width="5" height="7" rx="1.8" fill="currentColor" />
        </svg>
    );
}
