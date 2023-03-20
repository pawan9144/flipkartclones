import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useState } from 'react'
import Slider from 'react-slick'
import { ELECTRONICS_CATEGORY_CONSTANTS } from '@/constants'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import styles from './slider.module.css'
import { BsImages } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { BackgroundImage } from '../backgroungImage'
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

export const CarouselForProduct = () => {
    const [showPrevButton, setShowPrevButton] = useState<number>(0)
    const [shortlist, setShortlist] = useState<number>(0)

    const handleshortlisted = (id: number) => {
        setShortlist(id)
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        beforeChange: (current: any, next: any) => {
            // console.log(current, next, '>>>step')
            setShowPrevButton(next)
        },
        prevArrow:
            showPrevButton === 0 ? (
                <div style={{ display: 'none' }}></div>
            ) : (
                <SamplePrevArrow />
            ),
        nextArrow:
            showPrevButton > 0 ? (
                <div style={{ display: 'none' }}></div>
            ) : (
                <SampleNextArrow />
            ),
    }
    return (
        <>
            <Slider {...settings}>
                {' '}
                {ELECTRONICS_CATEGORY_CONSTANTS.row.map(
                    (item: any, index: number) => {
                        return (
                            <div className={styles.responsive} key={index}>
                                <div className={styles.gallery}>
                                    <BackgroundImage
                                        src={item.bgSrc}
                                        alt="Cinque Terre"
                                        className={
                                            styles.sliderbackgroundimages
                                        }
                                    >
                                        <span className={styles.listofimages}>
                                            <BsImages /> 24
                                        </span>
                                    </BackgroundImage>
                                    <div className={styles.propertycontent}>
                                        <div className={styles.propertytype}>
                                            {item.type}
                                        </div>
                                        <div className={styles.propertyprice}>
                                            <span className="rupees">₹</span>
                                            {item.price}
                                            <span
                                                className={styles.propertysize}
                                            >
                                                {item.area}
                                            </span>
                                        </div>
                                        <div className={styles.propertyaddress}>
                                            {item.address}
                                        </div>

                                        <div
                                            className={
                                                styles.propertydetailsbtn
                                            }
                                        >
                                            <div
                                                onClick={() =>
                                                    handleshortlisted(item.id)
                                                }
                                                className={`${
                                                    item.id === shortlist
                                                        ? `${styles.shortlistbtnfalse}`
                                                        : `${styles.shortlistbtn}`
                                                }`}
                                            >
                                                <AiOutlineHeart
                                                    style={{
                                                        position: 'relative',
                                                        top: '3px',
                                                    }}
                                                />{' '}
                                                ShortList
                                            </div>
                                            <div className={styles.viewdetails}>
                                                View Details
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </Slider>
            {/* <style>
                {showPrevButton
                    ? '.slick-prev { display: block !important; background:red !important}'
                    : '.slick-prev { display: none !important; background:red !important}'}
                {`
                    .slick-next {right: 0 !important; background-color: red !important}
                    `}
            </style> */}
        </>
    )
}
