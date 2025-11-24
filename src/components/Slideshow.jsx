import { useState, useEffect } from 'react';
import './Slideshow.css';

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slideshow">
            <div className="slideshow-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image.url})` }}
                    >
                        <div className="slide-overlay">
                            <h2 className="slide-title">{image.title}</h2>
                            <p className="slide-description">{image.description}</p>
                        </div>
                    </div>
                ))}

                <button className="slide-btn prev" onClick={goToPrevious}>
                    &#10094;
                </button>
                <button className="slide-btn next" onClick={goToNext}>
                    &#10095;
                </button>
            </div>

            <div className="slide-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
