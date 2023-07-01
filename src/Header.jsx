import { useContext } from "react";
import {Box, Typography } from "@mui/material";
import AppContext from "./context";

const Header = () => {
    const { user } = useContext(AppContext)

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 100,
                width: 'auto',
                backgroundColor: 'primary.main',
            }}>
            <Typography p={2} variant='h4'>
                Robo Report
            </Typography>
            <Box
                p={2}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <Typography variant='h5'>
                    {`Welcome ${user === undefined ? "User" : user.username}`}
                </Typography>

            </Box>
        </Box>
    )
}

export default Header