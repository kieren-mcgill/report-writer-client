import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import LandingPage from "./LandingPage";
import ViewStudents from "./ViewStudents";
import SingleStudent from "./SingleStudent";

const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={(<LandingPage/>)}/>
                <Route path='/view-students' element={(<ViewStudents/>)}/>
                <Route path='/single-student' element={(<SingleStudent/>)}/>
            </Routes>
    )
}

export default AppRouter