import { useContext, useEffect, useRef } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Nav from "../components/UI/nav/nav.js";
import ClockContext from "../engine/clockProvider.js";
import NationsContext from "../engine/nationsProvider.js";
import { City } from '../engine/objects.js'
import { FormControl, TextField } from "@mui/material";
import {draw} from '../engine/canvas.js';
import Canvas from "../components/Canvas/canvas.js";
import { drawOn } from "../engine/drawOn.js";
import CanvasContext from '../context/canvas.js';
import { drawLine } from "../engine/canvas.js";
// What needs to be done: 
// Finish the random path in canvas context for the march
// Create a state for checking if a city is currently engaded in marching
// Create another tab for checking the logs of actions being takes by the AI
// Create alert for each city in battle (or a marching tab with the alert as well)
// Fix the small offset happening when the march line is drawn
// Add the marching banner along the march line
// Marching banner will follow the clock time, just like most of the process in the simulator
// Need to add drawOn after changing tab, for now it will center the cities along the canvas grid

// const Canvas = styled(Box)(
//     ({ theme }) => ({
//     backgroundColor:'#fff',
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center'
// }));

const Home = (props) => {
    const ctxClock = useContext(ClockContext);
    const ctxNations = useContext(NationsContext);
    const ctxCanvas = useContext(CanvasContext);

    const cityRef = useRef();
    const canvasRef = useRef();
    ctxCanvas.canvasProvider = canvasRef;
    
    // get the data from input of city
    function submitCity(event) {
        event.preventDefault();
        //for (const x of [...Array(100).keys()]) {
            const city = new City(cityRef.current.value);
            city.createArmy();
            ctxNations.nationsCurrentHandler([...ctxNations.nationsProvider,city]); // push the new city
            cityRef.current.value = '';
            drawOn(ctxNations.canvasNodes, canvasRef, city);
        //}
    }
    
    // used for the canvas draw and for each time the page goes to another one
    // Careful here, the marches are also drawn.
    useEffect( () => {
        const identifier = setTimeout( () => {
            // Its probably not a good idea to perform such a memory heavy operation here inside this use effect to get the nodes
            ctxNations.canvasNodesCurrentHandler(draw(canvasRef,ctxNations.canvasNodes))
            drawLine(canvasRef,ctxCanvas.currentAtMarch);
            //drawLine(ctxCanvas.canvasProvider);
            // draw canvas and create the nodes
        return () => {
            clearTimeout(identifier);
        };
      })
    },[])
   
    // used for keeping track of the movements, based on the clock
    useEffect( () => {
        const identifier = setTimeout( () => {
            drawLine(canvasRef,ctxCanvas.currentAtMarch);
        return () => {
            clearTimeout(identifier);
        };
      })
    },[ctxClock.clockProvider])

    const componenteDados = () => { 
        // In case its still empty
        if (!ctxClock.clockProvider) {
            return ( 
                <Box>
                    <Typography>Month: </Typography> 
                    <Typography>Day: </Typography> 
                    <Typography>Year: </Typography> 
                </Box>
            )
        }
        return ( 
            <Box>
                <Typography>{`Month: ${ctxClock.clockProvider.monthName}`}</Typography> 
                <Typography>{`Day: ${ctxClock.clockProvider.day}`}</Typography> 
                <Typography>{`Year: ${ctxClock.clockProvider.year}`}</Typography> 
            </Box>
        )
    }
    //mt2
    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid container direction="row" sx={{backgroundColor:"#222", borderRadius:{xs:0, lg:3}, pb:3 }}>
                    <Grid container direction="column" item xs={10} pt={2}>
                        <Grid item>
                            <Typography variant="span">Overview</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={2} pt={2}>
                        <Grid item>
                            <Typography variant="span">Actions</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={10} sx={{p: {xs:"1rem 0 1rem 1rem", lg:2, overflow:"scroll"}}}>
                        <Grid item>
                            <Box>
                                <Canvas height={1000} width={1000} ref={canvasRef}></Canvas>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={2} justifyContent="space-around" sx={{p: {xs:2, lg:2}}}>
                        <Grid item>
                            <Typography variant="span">Dates</Typography>
                            <Typography variant="span">{componenteDados()}</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='column'> 
                            <Typography variant="span">Nations Control</Typography>
                            <FormControl sx={{pt:5}} component="form" onSubmit={submitCity}>
                                <TextField
                                    id="inpuy-field-city"
                                    inputRef={cityRef}
                                    label="Add City"
                                    defaultValue="Rome"
                                    InputLabelProps={{
                                        sx: { color: '#fff'}
                                    }}
                                    sx={{
                                        '& fieldset': {
                                            borderColor: 'white'
                                        }
                                    }}
                                />
                                <Button sx={{mt:2}} type="submit">Add</Button>
                            </FormControl>
                        </Grid>
                        <Grid item display='flex' flexDirection='column'>
                            <Typography variant="span">Vai ter algo aqui ainda</Typography>
                            <Button>Remove</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;