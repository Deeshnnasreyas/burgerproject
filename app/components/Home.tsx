import Delivery from "./Delivery/Delivery";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Offers from "./Offers/Offers";
import Popular from "./Popular/Popular";
import Reservation from "./Reservation/Reservation";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Popular />
      <Delivery />
      <Team />
      <Reservation />
      <Offers />
    </div>
  );
};

export default Home;
