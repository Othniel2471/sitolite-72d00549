const Marquee = () => {
  const text = "Let's Work Together • ";
  const repeated = text.repeat(10);

  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="flex whitespace-nowrap">
        <span className="marquee font-display text-4xl md:text-6xl font-bold text-foreground/10">
          {repeated}
        </span>
        <span className="marquee font-display text-4xl md:text-6xl font-bold text-foreground/10">
          {repeated}
        </span>
      </div>
    </section>
  );
};

export default Marquee;
