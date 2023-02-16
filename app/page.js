import { Footer, Navbar, } from "../components";
import InfoBar from "../components/InfoBar";
import Philosophie from "../sections/Philosophie";
import {
  About,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

function Page() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <InfoBar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0"></div>
        <Philosophie />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0"></div>
        <WhatsNew />
      </div>

      <World />

      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0"></div>
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
