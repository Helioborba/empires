import { useContext } from "react";
import {Box, Grid, Typography} from "@mui/material";
import Nav from "../components/UI/nav/nav.js";
import NationsContext from "../engine/nationsProvider.js";

const Nations = (props) => {
    const ctxNations = useContext(NationsContext);

    for (const node of ctxNations.canvasNodes) {
        if (node.empty !== true) {
            console.log('yes');
        }
    }
    
    function render() {
        return (ctxNations.nationsProvider.map((city,index) => {
            return (
                <Grid container item flexDirection='row' justifyContent='space-around' alignItems='center'  key={index} sx={{p:2,mt:2,borderRadius:4, backgroundColor:"#000"}}>
                    <Grid item>City: {city.name}</Grid><Grid item> Population: {city.population.total}</Grid><Grid item> Buildings: {city.buildings.total}</Grid><Grid item> Army: {city.army.report()}</Grid>
                </Grid> 
            )
        }))
    }
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:2}}>
                <Typography variant="h3" sx={{pb:2}}>
                    List of nations down here:
                </Typography>
                <Grid container sx={{p:2}} justifyContent="center" direction='column'>
                    {render()}
                </Grid>
            </Box>
        </Box>
    )
}

export default Nations;