import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

export default function Sponsorships() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="Sponsorship Opportunities" />
        <div className="grid md:grid-cols-3 gap-8">
          {["Title Sponsor", "Co-Sponsor", "Activity Partner"].map((tier) => (
            <Card key={tier}>
              <h3 className="text-2xl font-bold mb-4">{tier}</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Logo placement</li>
                <li>Stage branding</li>
                <li>Social media promotion</li>
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}