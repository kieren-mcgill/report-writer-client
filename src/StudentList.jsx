import {Box, Button, Grid, Typography} from "@mui/material";
import Dashboard from "./Dashboard";
import {useContext, useEffect} from "react";
import AppContext from "./context";
import StudentListItem from "./StudentListItem";
import {useNavigate} from "react-router-dom";

const StudentList = () => {
    const {user, students, apiCalls} = useContext(AppContext)
    const navigate = useNavigate()

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexGrow: 1
                }}>
                <Typography variant='h6'>
                    My students
                </Typography>
                <Grid container alignItems='center'>
                    {students && students.map((student, i) => (
                        <StudentListItem key={i}/>
                    ))}
                    <Button onClick={() => {navigate(`/single-student/:studentId`)}}>
                        ADD STUDENT
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default StudentList