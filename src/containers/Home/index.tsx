import { Carousel } from '@/components/carousel'
import { CustomizedDialogs } from '@/components/modal'
import { Box } from '@mui/material'
import React from 'react'
import { Categories } from './category'
import { ProductCategories } from './ProductCategory'

const Home: React.FC = (): JSX.Element => {
    return (
        <div style={{ backgroundColor: '#f1f3f6' }}>
            <Categories />
            <Box sx={{ padding: '8px' }}>
                <Carousel />
                <ProductCategories />
            </Box>
            <CustomizedDialogs />
        </div>
    )
}

export default Home
