import HeroCarousel from "./HeroCarousel"
import Header from "./Header"
import FeaturedArt from "./FeaturedArt"
import CuratedPicks from "./CuratedPicks"
import TrendingArtists from "./TrendingArtists"
import Gallery from "./Gallery"
import Footer from "./Footer"
const Home = () => {
  return (
    <>
    <Header/>
    <HeroCarousel/>
    <FeaturedArt/>
    <CuratedPicks/>
    <Gallery/>
    <TrendingArtists/>
    <Footer/>
    </>
  )
}

export default Home