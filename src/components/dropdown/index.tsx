import { AuthContext } from '@/context'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Box, Divider, ListItemIcon, MenuItem } from '@mui/material'
import React from 'react'
import styles from './dropdown.module.css'

interface IProps {
    children: JSX.Element
}
export const DropDown: React.FC<IProps> = ({ children }): JSX.Element => {
    const { setOpenModal } = React.useContext(AuthContext)

    const handleOpen = () => {
        setOpenModal(true)
    }
    return (
        <>
            <div className={styles.dropdown}>
                {children}
                <Box className={styles.dropdowncontent}>
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
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        }}
                    ></Box>
                    <Box
                        sx={{
                            display: 'flex',
                            fontWeight: '500',
                            justifyContent: 'space-between',
                            padding: '20px',
                            textAlign: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                fontWeight: 500,
                                fontSize: '14px',
                                cursor: 'pointer',
                            }}
                        >
                            New Customer?
                        </Box>
                        <Box
                            sx={{
                                color: '#2874f0',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                                cursor: 'pointer',
                                fontWeight: 500,
                                fontSize: '14px',
                            }}
                            onClick={handleOpen}
                        >
                            Sign Up
                        </Box>
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
            </div>
        </>
    )
}
