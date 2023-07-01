import {Box, Grid} from "@mui/material";
import Dashboard from "./Dashboard";
import {useContext, useEffect} from "react";
import AppContext from "./context";

const ViewStudents = () => {
    const { user, students, apiCalls } = useContext(AppContext)

    useEffect(() => {
        if (user && user._id) {
            apiCalls.getStudents(user._id);
        }
    }, [user]);

    return (
        <Box
            sx={{
                display: 'flex',
                height: 500,
                width: '100%',
                backgroundColor: 'grey'
            }}>
            <Dashboard/>
            <Grid container>
                {students && students.map((student, i) => (
                    <Grid item>

                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ViewStudents