type BackgroundGlowProps = {
  className?: string;
};

export default function BackgroundGlow({ className = "" }: BackgroundGlowProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-40 -left-32 h-96 w-96 animate-blob rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 animate-blob rounded-full bg-purple-600/25 blur-[120px] [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 animate-blob rounded-full bg-teal-500/20 blur-[120px] [animation-delay:8s]" />
    </div>
  );
}
