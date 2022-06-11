import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <div styled={{width:'100%', height:'20px'}}>
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img style={{width: '100%', borderRadius: '14px'}}
          src="https://i.ibb.co/VC0Xv3P/Img-6.png"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;