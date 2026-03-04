import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 text-center bg-zinc-950">
      <Container>
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Experiences Together
        </h2>

        <p className="text-gray-400 mb-8">
          Partner with us for the next edition.
        </p>

        <Button
          href="https://mail.google.com/mail/?view=cm&fs=1&to=negativezerongp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </Button>
      </Container>
    </section>
  );
}