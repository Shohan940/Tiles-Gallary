
export default function MarqueeSection() {
  const announcement =
    "New Arrivals: Your Tile Name | Weekly Feature: Modern Geometric Patterns | Join the Community";

  return (
    <section className="overflow-hidden border-y border-[#B87955]/30 bg-[#F6F3ED] py-5">
      <div className="marquee-track flex w-max">
        <p className="marquee-text">
          {announcement} ✦
        </p>

        <p className="marquee-text" aria-hidden="true">
          {announcement} ✦
        </p>
      </div>
    </section>
  );
}
