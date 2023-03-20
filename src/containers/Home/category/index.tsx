import { category } from '@/assests/images/home'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Categories = () => {
    return (
        <>
            <Box
                sx={{
                    background: ' #fff',
                    minHeight: '112px',
                    boxShadow: ' 0 1px 1px 0 rgb(0 0 0 / 16%)',
                    paddingX: '100px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        position: 'sticky',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        color: '#212121',
                    }}
                >
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.topoffers}
                                alt="topoffers"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Top Offers
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.mobiletablet}
                                alt="Mobiles & Tablets"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Mobiles & Tablets
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.electronic}
                                alt="Electronics"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Electronics
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.tvapplication}
                                alt="TVs&Appliances"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            TVs & Appliances
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.faishion}
                                alt="Fashion"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Fashion
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.beauty}
                                alt="Beauty"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Beauty
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.furniture}
                                alt="Home & Furniture"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Home & Furniture
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.flights}
                                alt="Flights"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Flights
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: ' 12px 8px',
                            paddingLeft: '22px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <Box>
                            <Image
                                src={category.grocerys}
                                alt="Grocery"
                                width={64}
                                height={64}
                            />
                        </Box>
                        <Box
                            sx={{
                                fontWeight: '600',
                                fontSize: '14px',
                                '&:hover': {
                                    color: '#2874f0',
                                },
                            }}
                        >
                            Grocery
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
