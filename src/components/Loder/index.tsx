import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

interface IProps {
    open?: boolean
}

export const Loader: React.FC<IProps> = ({ open = true }) => {
    return (
        <>
            {open && (
                <Backdrop
                    sx={{
                        color: '#FF0000',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
        </>
    )
}
