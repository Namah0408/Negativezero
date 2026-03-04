import { testimonials } from "../../data/testimonials";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="What People Say" />
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <p className="text-gray-400 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}