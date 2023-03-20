import {
    Avatar,
    Box,
    Container,
    Divider,
    ListItemIcon,
    Menu,
    MenuItem,
    MenuList,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { icons } from '@/assests'
import Image from 'next/image'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { DropDown } from '@/components/dropdown'

interface IProps {}
interface ISubList {
    url: string
    tags: string[]
    title: string
}
interface IList {
    query: string
    list: Array<ISubList>
}

export const Header: React.FC<IProps> = (): JSX.Element => {
    const posts = [
        {
            url: '',
            tags: ['react', 'blog'],
            title: 'How to create a react search bar',
        },
        {
            url: '',
            tags: ['node', 'express'],
            title: 'How to mock api data in Node',
        },
    ]
    const [dropdown, setDropdown] = React.useState<boolean>(false)
    const [state, setstate] = useState<IList>({
        query: '',
        list: [],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const results = posts.filter((post) => {
            if (e.target.value === '') return posts
            return post.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        })
        setstate({
            query: e.target.value,
            list: results,
        })
    }

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#2874f0',
                width: '100%',
                height: '56px',
                color: '#f0f0f0',
                display: 'flex',
                margin: '0 auto',
                alignItems: 'center',
            }}
        >
            <Container sx={{ padding: '0px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Image src={icons.logoIcon} alt="Logo" width={75} />
                        <Box
                            sx={{
                                display: 'flex',
                                fontSize: '11px',
                                fontStyle: 'italic',
                                marginTop: '-1px',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Explore
                            <Box
                                component="span"
                                sx={{
                                    color: '#ffe500',
                                    fontWeight: '500',
                                    marginX: '2px',
                                }}
                            >
                                Plus
                            </Box>
                            <Image
                                src={icons.flikartPlusIcon}
                                alt="Logo"
                                width={10}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            margin: '0 8px',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                width: '540px',
                            }}
                        >
                            <input
                                className={styles.searchinput}
                                type="text"
                                title="Search for products, brands and more"
                                name="query"
                                autoComplete="off"
                                placeholder="Search for products, brands and more"
                                onChange={handleChange}
                                value={state.query}
                            />
                        </Box>
                        <button className={styles.searchbutton} type="submit">
                            <SearchIcon />
                        </button>
                    </Box>

                    <DropDown>
                        <Box className={styles.loginbtn}>Login</Box>
                    </DropDown>

                    <Box className={styles.sellerbtn}>Become a Seller</Box>
                    <Box className={styles.sellerbtn}>
                        More
                        <ExpandMoreIcon />
                    </Box>
                    <Box className={styles.sellerbtn}>
                        <ShoppingCartIcon className={styles.carticon} />
                        Cart
                    </Box>
                </Box>

                {/* <Box>
                    {dropdown && (
                        <Box
                            sx={{
                                position: 'absolute',
                                boxShadow: '0 4px 16px 0 rgb(0 0 0 / 20%)',
                                transform: 'translateX(50%)',
                                background: '#fff',
                                right: '42%',
                                width: '240px',
                                color: '#212121',
                                fontSize: '14px',
                                fontWeight: '400',
                                borderColor: '#f0f0f0',
                                textAlign: 'left',
                                zIndex: '19',
                                borderRadius: '3px',
                                marginTop: '6px',
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        >
                            <Box
                                sx={{
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        left: '50%',
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform:
                                            'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    fontWeight: '500',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box>New Customer?</Box>
                                <Box sx={{ color: '#2874f0' }}>Sign Up</Box>
                            </Box>
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                My Profile
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Filpkart Plus Zone
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Orders
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Wishlist
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Rewards
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Gift Cards
                            </MenuItem>
                        </Box>
                    )}
                </Box> */}
            </Container>
        </Box>
    )
}
