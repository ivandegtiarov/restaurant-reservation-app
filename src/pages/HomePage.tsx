import PopularMenuSection from "../components/Menu/PopularMenuSection";
import CustomersSaySection from "../components/Sections/CustomersSaySection";
import FeatureDishSection from "../components/Sections/FeatureDishSection";
import GreatestChefSection from "../components/Sections/GreatestChefSection";
import ScheduleSection from "../components/Sections/ScheduleSection";
import TableReserveSection from "../components/Sections/TableReserveSection";
import WelcomeSection from "../components/Sections/WelcomeSection";

const HomePage = () => {
  return (
    <>
      <FeatureDishSection />
      <WelcomeSection />
      <PopularMenuSection />
      <TableReserveSection />
      <GreatestChefSection />
      <CustomersSaySection />
      <ScheduleSection />
    </>
  );
};

export default HomePage;
