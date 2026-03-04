import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <Container>
        <SectionHeading
          title="About NegativeZero"
          subtitle="Curated flea experiences with culture and commerce."
        />
        <p className="text-center text-gray-400 max-w-3xl mx-auto">
          We create immersive flea fairs that connect emerging brands
          with urban audiences through curated experiences.
        </p>
      </Container>
    </section>
  );
}