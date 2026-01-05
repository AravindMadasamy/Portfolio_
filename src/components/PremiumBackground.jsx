function PremiumBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 animated-premium-gradient" />

      {/* Soft radial depth */}
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-indigo-200/30 blur-3xl" />
    </div>
  );
}

export default PremiumBackground;
