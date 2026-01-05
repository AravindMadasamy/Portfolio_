function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center -z-10"
    >
      {/* Large soft blob */}
      <div className="w-[420px] h-[420px] rounded-full bg-indigo-200/30 blur-3xl" />

      {/* Secondary subtle layer */}
      <div className="absolute w-[260px] h-[260px] rounded-full bg-slate-200/40 blur-2xl translate-x-32 translate-y-24" />
    </div>
  );
}

export default HeroIllustration;
