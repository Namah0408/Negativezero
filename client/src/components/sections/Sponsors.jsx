import { sponsors } from "../../data/sponsors";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-zinc-950">
      <Container>
        <SectionHeading title="Trusted By" />
        <div className="flex justify-center gap-12 flex-wrap">
          {sponsors.map((s) => (
            <img key={s.name} src={s.logo} alt={s.name} className="h-20" />
          ))}
        </div>
      </Container>
    </section>
  );
}