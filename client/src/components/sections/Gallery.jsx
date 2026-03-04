import { gallery } from "../../data/gallery";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <Container>
        <SectionHeading title="Event Highlights" />
        
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="event"
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(el) => {
                    if (el) el.playbackRate = 0.75;
                  }}
                  className="w-full h-72 object-cover "
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}