import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import './IntroSlider.css'
import Logo from '../Logo/logo-main'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className='Carousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="imageCarousel"
            src= "https://res.cloudinary.com/flexout/image/upload/v1633609394/1_b7nmar.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="d-grid gap-2">
            <Button variant="dark" size="lg" href='/Login'> LOG IN </Button>
            <Button variant="dark" size="lg" href='/Signup'> SING UP</Button>
        </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageCarousel"
            src= "https://res.cloudinary.com/flexout/image/upload/v1633609394/3_ydajty.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <div className="d-grid gap-2">
            <Button variant="dark" size="lg" href='/Login'> LOG IN </Button>
            <Button variant="dark" size="lg" href='/Signup'> SING UP</Button>
        </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imageCarousel"
            src= "https://res.cloudinary.com/flexout/image/upload/v1633609394/2_w7yunp.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          
            <div className="d-grid gap-2">
            <Button variant="dark" size="lg" href='/Login'> LOG IN </Button>
            <Button variant="dark" size="lg" href='/Signup'> SING UP</Button>
        </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
