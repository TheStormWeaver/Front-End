import Header from "./components/Header";
import MainServices from "./components/MainServices";
import AboutUs from "./components/AboutUs";
import DetailedServices from "./components/DetailedServices";
import Banner from "./components/Banner";
import SubscriptionPlans from "./components/SubscriptionPlans";
import BrandInfo from "./components/BrandInfo";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="root">
      <Header />

      <MainServices />

      <AboutUs />

      <DetailedServices />

      <Banner />

      <SubscriptionPlans />

      <BrandInfo />

      <News />

      <Footer />
    </div>
  );
}

export default App;
