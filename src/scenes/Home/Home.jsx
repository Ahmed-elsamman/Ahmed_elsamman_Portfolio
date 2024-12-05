import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import ContactSection from './ContactSection/ContactSection';
const Home = () => {
  return (
    <HomeLayout>
      <MainSection />
      <IntroSection />
      <ContactSection />
    </HomeLayout>
  );
};

export default Home;
