import { stats } from "../../data/stats";
import useCounter from "../../hooks/useCounter";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Stat({ value, label }) {
  const count = useCounter(value);
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold">{count}+</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section id="impact" className="py-24 bg-zinc-950">
      <Container>
        <SectionHeading title="Our Impact" subtitle="Measured growth." />
        <div className="grid md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}