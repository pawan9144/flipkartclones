import { SliderImage } from '@/assests'
import { ElectronicsCategory } from '@/assests/images/home/productcategorylist/Electronics'

export const HOME_META = {
    keyword: 'software development company,mobile app development company',
    website: 'https://www.thoughtwin.com/',
    twitter_site: 'Thoughtwin It Solutions',
    twitter_id: '1309409360670408706',
    twitter_creator: '@thoughtwin',
    twitter_image: 'https://thoughtwin.com/assets/img/header.png',
}

export const HOME_SLIDER_CONSTANTS = [
    {
        id: 1,
        bgSrc: SliderImage.homeslider1.src,
    },
    {
        id: 2,
        bgSrc: SliderImage.homeslider2.src,
    },
    {
        id: 3,
        bgSrc: SliderImage.homeslider3.src,
    },
    {
        id: 4,
        bgSrc: SliderImage.homeslider4.src,
    },
]

export const ELECTRONICS_CATEGORY_CONSTANTS = {
    bgImage: ElectronicsCategory.bestelectronics.src,
    row: [
        {
            id: 1,
            bgSrc: ElectronicsCategory.nikoncamera.src,
            alt: 'cameras',
            type: '1 BHK Flat',
            price: '34 Lac',
            area: '900 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 2,
            bgSrc: ElectronicsCategory.monitors.src,
            alt: 'monitors',
            type: '2 BHK Flat',
            price: '1.50',
            area: '1250 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 3,
            bgSrc: ElectronicsCategory.printers.src,
            alt: 'printers',
            type: '1 BHK Flat',
            price: '1 Cr',
            area: '1150 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 4,
            bgSrc: ElectronicsCategory.mobilecovers.src,
            alt: 'printers',
            type: '1 BHK Flat',
            price: '1.50 Cr',
            area: '1250 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 5,
            bgSrc: ElectronicsCategory.designermobilecover.src,
            alt: 'designermobilecover',
            type: '3 BHK Flat',
            price: '2.25',
            area: '2150 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 6,
            bgSrc: ElectronicsCategory.dellmonitor.src,
            alt: 'dellmonitor',
            type: '3 BHK Flat',
            price: '2.25 Cr',
            area: '1872 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 7,
            bgSrc: ElectronicsCategory.viewsonicmonitors.src,
            alt: 'viewsonicmonitor',
            type: '2 BHK Flat',
            price: '1.65 Cr',
            area: '1700 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
        {
            id: 8,
            bgSrc: ElectronicsCategory.acermonitors.src,
            alt: 'acermonitor',
            type: '3 BHK Flat',
            price: '2.25 Cr',
            area: '1850 sqft',
            address: 'Dwarka Sector 23, New Delhi',
        },
    ],
}
