import {Button, Grid, Typography} from "@mui/material";

const StudentListItem = () => {
    return(
        <Grid item key={key} xs={12} m={1} p={2}
              sx={{
                  display: 'flex',
                  border: '1px solid black',
                  backgroundColor: 'white',
                  width: '100%',
              }}>
            <Typography flexGrow={1}>
                {`${student.firstName} ${student.lastName}`}
            </Typography>
            <Button >
                NOTES
            </Button>
        </Grid>
    )
}

export default StudentListItem