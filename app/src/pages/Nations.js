import {Box} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";
const Nations = (props) => {
    
    return(
        <Box sx={{width:"100vw", height:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <h3>List of nations down here:</h3>
         
        </Box>
    )
}

export default Nations;