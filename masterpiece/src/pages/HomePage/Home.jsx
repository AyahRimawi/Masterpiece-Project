import FooterBar from "../../components/Footer/FooterBar";
import SearchBar from "../../components/Navbar/SearchBar";
import SectionBar from "../../components/Navbar/SectionBar";
import TrackOrder from "../../components/Navbar/TrackOrder";

export function Home() {
    return (
      <>
        <TrackOrder />
        <SearchBar />
        <SectionBar/>
        <br></br>
        <FooterBar />
      </>
    );

}