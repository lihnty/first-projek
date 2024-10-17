import { Carousel, } from 'react-bootstrap';
import hero1 from './../assets/4.jpg'
import hero2 from './../assets/2.jpg'
import hero3 from './../assets/3.jpg'
import hero4 from './../assets/1.jpg'
const Hero = () => {
    return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={hero1}
                alt="first slidee"
                />
                <Carousel.Caption>
                <h3>Pondok informatika</h3>
                <p>Halaqah subuh</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={hero2}
                alt="first slidee"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={hero3}
                alt="first slidee"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={hero4}
                alt="first slidee"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}
export default Hero;