import { footerimages } from '@/assests/images/home/Footer'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps {}

export const Footer: React.FC<IProps> = (): JSX.Element => {
    return (
        <>
            <Box sx={{ backgroundColor: '#142436', color: '#fff' }}>
                <Box
                    sx={{
                        borderTop: ' 1px solid #454d5e',
                        padding: ' 25px 0',
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginLeft: '65px',
                        width: '90%!important',
                        paddingTop: '40px',
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                color: '#878787',
                                fontSize: '12px',
                                fontWeight: '400',
                                marginBottom: '9px',
                            }}
                        >
                            ABOUT
                        </Box>
                        <List
                            sx={{
                                lineHeight: '2',
                                color: '#fff',
                                display: 'block',
                                fontWeight: '400',
                                fontSize: '12px',
                            }}
                        >
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Contact Us
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                About Us
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Careers
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                FlipKart Stories
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Press
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                FlipKart WholeSale
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Corporate
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                color: '#878787',
                                fontSize: '12px',
                                fontWeight: '400',
                                marginBottom: '9px',
                            }}
                        >
                            HELP
                        </Box>
                        <List
                            sx={{
                                lineHeight: '2',
                                color: '#fff',
                                display: 'block',
                                fontWeight: '400',
                                fontSize: '12px',
                            }}
                        >
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Payments
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Shipping
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                cancellation & returns
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                FAQ
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Report Infringement
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                color: '#878787',
                                fontSize: '12px',
                                fontWeight: '400',
                                marginBottom: '9px',
                            }}
                        >
                            POLICY
                        </Box>
                        <List
                            sx={{
                                lineHeight: '2',
                                color: '#fff',
                                display: 'block',
                                fontWeight: '400',
                                fontSize: '12px',
                            }}
                        >
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Return Policy
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Terms Of Use
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Security
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Privacy
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Sitemap
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                ERP Compliance
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                color: '#878787',
                                fontSize: '12px',
                                fontWeight: '400',
                                marginBottom: '9px',
                            }}
                        >
                            SOCIAL
                        </Box>
                        <List
                            sx={{
                                lineHeight: '2',
                                color: '#fff',
                                display: 'block',
                                fontWeight: '400',
                                fontSize: '12px',
                            }}
                        >
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                FaceBook
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Twitter
                            </ListItem>
                            <ListItem
                                sx={{
                                    padding: '0px',
                                    margin: '0px',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Youtube
                            </ListItem>
                        </List>
                    </Box>
                    <Box
                        sx={{
                            borderLeft: '1px solid #454d5e',
                            padding: ' 0 25px',
                        }}
                    >
                        <Box
                            sx={{
                                color: '#878787',
                                fontSize: '12px',
                                fontWeight: '400',
                                marginBottom: '9px',
                            }}
                        >
                            Mail Us:
                        </Box>
                        <Typography sx={{ fontSize: '12px' }}>
                            Flipkart Internet Private Limited,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Buildings Alyssa, Begonia &{' '}
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Clove Embassy Tech Village,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Outer Ring Road, Devarabeesanahalli Village,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            {' '}
                            Bengaluru, 560103,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Karnataka, India
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                color: '#878787',
                                fontSize: '12px',
                                fontWeight: '400',
                                marginBottom: '9px',
                            }}
                        >
                            Registered Office Address:
                        </Box>
                        <Typography sx={{ fontSize: '12px' }}>
                            Flipkart Internet Private Limited,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Buildings Alyssa, Begonia &
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Clove Embassy Tech Village,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Outer Ring Road, Devarabeesanahalli Village,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            {' '}
                            Bengaluru, 560103,
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Karnataka, India
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            CIN : U51109KA2012PTC066107
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            Telephone: 044-45614700
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        borderTop: ' 1px solid #454d5e',
                        padding: ' 25px 0',
                        marginTop: '40px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ color: '#fff', marginLeft: '8px' }}>
                        <Image
                            src={footerimages.becomeaseller}
                            alt="Become A seller"
                        />
                        Become A seller
                    </Box>
                    <Box>
                        {' '}
                        <Image src={footerimages.advertise} alt="advertise" />
                        Advertise
                    </Box>
                    <Box>
                        <Image
                            src={footerimages.giftcardfooter}
                            alt="Gift Cards"
                        />
                        Gift Cards
                    </Box>
                    <Box>
                        <Image
                            src={footerimages.helpcenterimg}
                            alt="Help Center"
                        />
                        Help Center
                    </Box>
                    <Box>@ 2007-2023 Filpkart.com</Box>
                    <Box>
                        <Image
                            src={footerimages.paymentacceptimg}
                            alt="paymentacceptimg"
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
