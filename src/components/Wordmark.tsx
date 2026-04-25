type Variant = 'light' | 'dark';

export function Wordmark({
  variant = 'dark',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href="#top" className={`inline-flex items-center group ${className}`} aria-label="Medcom AS">
      <img
        src={variant === 'dark' ? '/wordmark-dark.svg' : '/wordmark.svg'}
        alt="Medcom AS"
        className="h-7 md:h-8 w-auto"
        width={280}
        height={48}
      />
    </a>
  );
}
