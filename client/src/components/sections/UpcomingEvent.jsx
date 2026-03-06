import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function UpcomingEvent() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <SectionHeading title="Next Edition" />
        
        <div className="text-center space-y-6">
          <p className="text-3xl font-bold">12th April 2026</p>
          <p className="text-gray-400">
            SCZCC Nagpur | 4000+ Expected Visitors
          </p>

          {/* Brochure Button */}
          <a
            href="/brochure/NegativeZeroBrochure!.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
          >
            View Event Brochure
          </a>
        </div>

      </Container>
    </section>
  );
}