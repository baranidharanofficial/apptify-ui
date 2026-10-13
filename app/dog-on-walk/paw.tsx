export function Paw({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <ellipse cx="12" cy="16.2" rx="5.2" ry="4.6" />
            <ellipse cx="5.2" cy="10.4" rx="2.2" ry="2.7" />
            <ellipse cx="9.3" cy="6.4" rx="2.2" ry="2.8" />
            <ellipse cx="14.7" cy="6.4" rx="2.2" ry="2.8" />
            <ellipse cx="18.8" cy="10.4" rx="2.2" ry="2.7" />
        </svg>
    );
}
