import About from '../about/about';
import Header from '../header/header';
import Slider from '../slider/slider';

import Service from '../service/service';
import Action from '../action/action';
// import Testimonial from '../testimonial/testimonial';
import Footer from '../footer/footer';
import ScrollToTop from '../scrollToTop/scrollToTop';
import Portfolio from '../portfolio-main/portfolio-main';
const Home = () => {
    return (
        <div>
           
            <Slider />
            <About />
            <Portfolio/>
            <Service/>
            <Action/>
            {/* <Testimonial/> */}
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}
export default Home;