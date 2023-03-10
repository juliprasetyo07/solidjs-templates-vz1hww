import Header from './component/Header';
import TopBar from './component/TopBar';
import NavbarBotom from './component/NavbarBotom';
import FirstContent from './component/FirstContent';
import Superiority from './component/Superiority';
import Hobby from './component/Hobby';
import BlackFridaySale from './component/BlackFridaySale';
import SelectedProducs from './component/SelectedProducs';
import ThreeAdvertisements from './component/ThreeAdvertisements';
import Electronic from './component/Electronic';
import CategoriesNavbar from './component/CategoriesAndNavbar';
import WatchAndSpeaker from './component/WatchAndSpeaker';
import MensFasions from './component/MensFasions';
import Gift from './component/Gift';
import WomanFasions from './component/WomanFasions';
import FeaturedBrands from './component/FeaturedBrands';
import SelectionButton from './component/SelectionButton';
import SelectedProductBottom from './component/SelectedProductBottom';

function App() {
  return (
    <>
   
      <div class="bg-dark ">
        <div class="max-w-6xl mx-2 sm:mx-auto">
          <TopBar />
        </div>
      </div>
      <div class=" bg-white mx-2 sm:mx-auto max-w-6xl">
        <Header />
        <CategoriesNavbar />
      </div>
      <div class="bg-gray">
        <div class="max-w-6xl mx-auto font-body">
          <FirstContent />
          <Superiority />
          <Hobby />
          <BlackFridaySale />
          <SelectedProducs />
          <ThreeAdvertisements />
          <Electronic />
          <WatchAndSpeaker />
          <MensFasions />
          <Gift />
          <WomanFasions />
          <FeaturedBrands />
          <SelectionButton />
          <SelectedProductBottom />
        </div>
      </div>
      <NavbarBotom />
    </>
  );
}

export default App;
