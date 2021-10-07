import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import ImgButton from './ImgButton';

const items = [
    {
        src: 'https://www.brickfanatics.com/wp-content/uploads/Avengers-infinity-Saga-featured.jpg',
        altText: '',
        caption: 'Phase 4 and Beyond',
        text: 'Where does the MCU go next?'
    },
    {
        src: 'https://www.brickfanatics.com/wp-content/uploads/Avengers-infinity-Saga-featured.jpg',
        altText: '',
        caption: 'Phase 4 and Beyond',
        text: 'Where does the MCU go next?'
    },
    {
        src: 'https://www.brickfanatics.com/wp-content/uploads/Avengers-infinity-Saga-featured.jpg',
        altText: 'Marvel and the Disney Parks',
        caption: 'Marvel in the Disney Parks',
        text: 'Learn all about the real Marvel experiences Disney has made'
    }
];

const Carousel1 = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className="carousel-text text-center" captionText={item.text} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carousel1;