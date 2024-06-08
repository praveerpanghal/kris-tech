import AboutHome from './aboutHome/aboutHome';
import Slider from './sliderHome/sliderHome';
import Service from './serviceHome/serviceHome';
import Action from './actionHome/actionHome';
// import Testimonial from '../testimonial/testimonial';
import Footer from '../footer/footer';
import ScrollToTop from './scrollToTop/scrollToTop';
import PortfolioMain from './portfolioHome/portfolioHome';
const Home = () => {
    return (
        <div>           
            <Slider />
            <AboutHome />
            <PortfolioMain/>
            <Service/>
            <Action/>
            {/* <Testimonial/> */}
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}
export default Home;