import { SlideData } from 'Data/Bonus-Ui/OwlCarouselDara';
import React from 'react'
import Slider from 'react-slick';
import { ImgPath } from 'utils/Constant';

const DisableSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };

    return (
        <Slider {...settings} >
            {
                SlideData && SlideData.slice(5, 9).map((item, index) => (
                    <div className="item" key={index}>
                        <img src={`${ImgPath}${item}`} alt='img' className='img-fluid' />
                    </div>
                ))
            }
        </Slider>
    )
}

export default DisableSlider