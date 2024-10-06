import Hero from "../components/Hero";
// import Services from "../components/Services";
import Clients from "../components/Clients";
import CallCenter from "../components/CallCenter";
import NumbersAndLines from "../components/NumbersAndLines";
import CRM from "../components/CRM";
import WhatsApp from "../components/WhatsApp";
import CallToAction from "../components/CallToAction";
import ScrollingServices from "../components/Services";

function Home() {
  return (
    <main>
      <Hero />
      {/* <Clients /> */}
      <ScrollingServices />
      <CallCenter />
      <NumbersAndLines />
      <CRM />
      <WhatsApp />
      <CallToAction />
    </main>
  );
}

export default Home;
