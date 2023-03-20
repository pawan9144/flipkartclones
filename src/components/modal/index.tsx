import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { AuthContext } from '@/context'
import { BackgroundImage } from '../backgroungImage'
import { LoginImage } from '@/assests/images/home/login'
import { Style } from '@mui/icons-material'
import styles from './modal.module.css'
import { TextField } from '@mui/material'
import Link from 'next/link'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
}
export interface DialogTitleProps {
    id: string
    children?: React.ReactNode
    onClose: () => void
}

export function CustomizedDialogs() {
    const { openModal, setOpenModal } = React.useContext(AuthContext)

    const handleClose = () => {
        setOpenModal(false)
    }
    return (
        <div>
            <Modal open={openModal} onClose={handleClose}>
                <Box sx={style} className=">>>>>>">
                    <button
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            padding: 0,
                            background: 'transparent',
                            cursor: 'pointer',
                            color: '#fff',
                            fontSize: '32px',
                            lineHeight: '1',
                            verticalAlign: 'top',
                            border: 'none',
                            fontWeight: '900',
                        }}
                        onClick={handleClose}
                    >
                        x
                    </button>
                    <Box
                        sx={{
                            background: '#fff',
                            margin: ' 0 auto',
                            overflow: 'auto',
                            display: 'flex',
                            maxWidth: '90%',
                            minWidth: '400px',
                            minHeight: '200px',
                            width: 750,
                            height: 528,
                        }}
                    >
                        <Box sx={{ width: '40%' }}>
                            <BackgroundImage
                                className={styles.loginbackimage}
                                src={LoginImage.loginBackgroungImage.src}
                                alt="loginBackgroungImage"
                            >
                                <Box>
                                    <Box
                                        component="span"
                                        sx={{
                                            fontSize: '28px',
                                            fontWeight: '500',
                                            color: '#fff',
                                        }}
                                    >
                                        Looks like you're new here!
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: '18px',
                                            marginTop: '16px',
                                            lineHeight: '150%',
                                            color: '#dbdbdb',
                                        }}
                                    >
                                        <Box component="span">
                                            Sign up with your mobile number to
                                            get started
                                        </Box>
                                    </Typography>
                                </Box>
                            </BackgroundImage>
                        </Box>
                        <Box
                            sx={{
                                padding: ' 56px 35px 16px',
                                position: 'relative',
                                backgroundColor: '#fff',
                                width: '60%',
                            }}
                        >
                            <form>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        marginBottom: '34px',
                                        fontSize: '16px',
                                    }}
                                >
                                    <TextField
                                        sx={{
                                            width: '100%',
                                            color: '#878787',
                                            fontSize: '16px',
                                            fontWeight: '400',
                                        }}
                                        id="standard-basic"
                                        label="Enter Mobile Number"
                                        variant="standard"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        color: '#878787',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                    }}
                                >
                                    By continuing, you agree to Flipkart's{' '}
                                    <Link
                                        style={{
                                            color: '#2874f0',
                                            border: 'none',
                                            outline: 'none',
                                        }}
                                        href="/pages/terms"
                                    >
                                        Terms of Use
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        style={{
                                            color: '#2874f0',
                                            border: 'none',
                                            outline: 'none',
                                        }}
                                        href="/pages/privacypolicy"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </Box>
                                <Box sx={{ marginTop: '10px' }}>
                                    <button
                                        className={styles.continuebtn}
                                        type="submit"
                                    >
                                        <span>CONTINUE</span>
                                    </button>
                                    <Box className={styles.existingbtn}>
                                        <span>Existing User? Log in</span>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
