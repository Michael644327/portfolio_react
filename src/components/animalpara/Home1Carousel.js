
import Carousel from "../carousel/Carousel";

const HomeSection1 = () => {
    const carouselImages = [
        { src: '/portfolio/img/animalpara/collage-maker-01.jpg', alt: 'slider1' },
        { src: '/portfolio/img/animalpara/collage-maker-02.jpg', alt: 'slider2' },
        { src: '/portfolio/img/animalpara/collage-maker-03.png', alt: 'slider3' },
        { src: '/portfolio/img/animalpara/collage-maker-04.jpg', alt: 'slider4' },
        { src: '/portfolio/img/animalpara/collage-maker-05.jpg', alt: 'slider5' },
    ];


    return (
        <Carousel images={carouselImages} />
    )
}

export default HomeSection1;