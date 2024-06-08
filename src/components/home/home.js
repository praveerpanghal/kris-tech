import About from '../about/about';
import Header from '../header/header';
import Slider from '../slider/slider';
import Feature from '../feature/feature';
import Service from '../service/service';
import Action from '../action/action';
// import Testimonial from '../testimonial/testimonial';
import Footer from '../footer/footer';
import ScrollToTop from '../scrollToTop/scrollToTop';
const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <About />
            <Feature/>
            <Service/>
            <Action/>
            {/* <Testimonial/> */}
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}
export default Home;