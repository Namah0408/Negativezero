import { demographics } from "../../data/demographics";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Demographics() {
  return (
    <section className="py-24 bg-zinc-950">
      <Container>
        <SectionHeading title="Audience Profile" />
        <div className="grid md:grid-cols-3 gap-8">
          {demographics.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}