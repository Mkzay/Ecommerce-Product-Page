import Hero from "./hero-section";
import Text from "./text-section";

export default function Body() {
  return (
    <div className="flex items-center justify-center flex-col md:gap-10 md:flex-row">
      <Hero />
      <Text />
    </div>
  );
}
