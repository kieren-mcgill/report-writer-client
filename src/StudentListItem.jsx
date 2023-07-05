import {Button, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const StudentListItem = ( { itemKey, student } ) => {
    const navigate = useNavigate()
    return(
        <Grid item key={itemKey} xs={12} m={1} p={2}
              sx={{
                  display: 'flex',
                  border: '1px solid black',
                  backgroundColor: 'white',
                  width: '100%',
              }}>
            <Typography flexGrow={1}>
                {`${student.firstName} ${student.lastName}`}
            </Typography>
            <Button onClick={() => navigate(`/single-student/${student._id}`)} >
                NOTES
            </Button>
        </Grid>
    )
}

export default StudentListItem