import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import { BackgroundImage } from '../backgroungImage'
import { HOME_SLIDER_CONSTANTS } from '@/constants'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import styles from './carousel.module.css'
function SampleNextArrow(props: any) {
    const { style, onClick } = props
    return (
        <div
            style={{
                zIndex: 99,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'absolute',
                top: ' calc(50% - 52px)',
                right: '0',
                width: '47px',
                height: '104px',
                backgroundColor: 'hsla(0,0%,100%,.98)',
                boxShadow: '0 1px 5px 0 rgb(0 0 0 / 11%)',
                transition: 'opacity .1s ease-in',
            }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </div>
    )
}

function SamplePrevArrow(props: any) {
    const { style, onClick } = props
    return (
        <div
            style={{
                zIndex: 99,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'absolute',
                top: ' calc(50% - 52px)',
                width: '47px',
                height: '104px',
                backgroundColor: 'hsla(0,0%,100%,.98)',
                boxShadow: '0 1px 5px 0 rgb(0 0 0 / 11%)',
                transition: 'opacity .1s ease-in',
            }}
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </div>
    )
}

export const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <>
            <Slider {...settings}>
                {HOME_SLIDER_CONSTANTS.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <BackgroundImage
                                src={item?.bgSrc}
                                className={styles.homeslider}
                            ></BackgroundImage>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}
