import { BackgroundImage } from '@/components/backgroungImage'
import { CarouselForProduct } from '@/components/Slider'
import { ELECTRONICS_CATEGORY_CONSTANTS } from '@/constants'
import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from '../home.module.css'

export const ProductCategories = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: ' #fff',
                    borderRadius: '2px',
                    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)',
                }}
            >
                <Box sx={{ width: '20%' }}>
                    <BackgroundImage
                        className={styles.electronicsbackimage}
                        src={ELECTRONICS_CATEGORY_CONSTANTS.bgImage}
                        alt="elctronics"
                    >
                        <Box
                            sx={{
                                padding: '28px 10px 124px',
                                textAlign: 'center',
                                height: '100%',
                                color: '#000',
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: '30px',
                                    lineHeight: '1.38',
                                    fontWeight: '400',
                                    marginTop: '50px',
                                }}
                            >
                                Top of Properties
                            </Typography>

                            <Box
                                sx={{
                                    marginTop: '24px',
                                    background: '#2874f0',
                                    color: ' #fff',
                                    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
                                    border: 'none',
                                    display: 'inline-block',
                                    borderRadius: '2px',
                                    padding: '10px 20px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    transition: 'box-shadow .2s ease',
                                    verticalAlign: 'super',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                            >
                                VIEW ALL
                            </Box>
                        </Box>
                    </BackgroundImage>
                </Box>
                <Box sx={{ width: '80%' }}>
                    <CarouselForProduct />
                </Box>
            </Box>
        </>
    )
}
