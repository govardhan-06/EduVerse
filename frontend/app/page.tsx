import SpacesSection from "../components/SpacesSection";
import Carousel from "../components/Carousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="mx-auto pt-16">
          <div className="bg-white px-10 py-5">
            <Carousel/>
            <SpacesSection/>
          </div>
      </main>
    </div>
  );
}
