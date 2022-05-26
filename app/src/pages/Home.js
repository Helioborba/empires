import { useContext, useEffect, useRef } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import { styled,alpha } from '@mui/material/styles';
import Nav from "../components/UI/nav/nav.js";
import ClockContext from "../engine/clockProvider.js";
import NationsContext from "../engine/nationsProvider.js";
import { City } from '../engine/objects.js'
import { FormControl, TextField } from "@mui/material";
import {draw} from '../engine/canvas.js';

const Canvas = styled(Box)(
    ({ theme }) => ({
    backgroundColor:'#fff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}));

const Home = (props) => {
    const ctxClock = useContext(ClockContext);
    const ctxNations = useContext(NationsContext);

    const cityRef = useRef();
    const canvasRef = useRef();

    function submitCity(event) {
        event.preventDefault();
        const city = new City(cityRef.current.value);
        city.createArmy();
        ctxNations.nationsCurrentHandler([...ctxNations.nationsProvider,city]); // push the new city
        cityRef.current.value = '';
    }
    
    useEffect( () => {
        const identifier = setTimeout( () => {
            draw(canvasRef);
        return () => {
          clearTimeout(identifier);
        };
      })
    },[])
   
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

    return(
        <Box sx={{width:"100vw", minHeight:"100vh", backgroundColor:"#555"}}>
            <Nav></Nav>
            <Box sx={{p:{xs:"5rem 0 5rem 0", lg:5}, display:'flex', justifyContent:'center',alignItems:'center'}}>
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
                    <Grid container direction="column" item xs={10} sx={{p:{xs:"1rem 0 1rem 1rem", lg:2, overflow:"scroll"}}}>
                        <Grid item>
                            <Canvas component="canvas" mt={2} ref={canvasRef}></Canvas>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={2} justifyContent="space-around" sx={{p:{xs:2, lg:2}}}>
                        <Grid item>
                            <Typography variant="span">Dates</Typography>
                            <Typography variant="span">{componenteDados()}</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='column'> 
                            <Typography variant="span">Nations Control</Typography>
                        {/* <Form component="form" onSubmit={submitCity}> */}
                            <FormControl sx={{pt:5}} component="form" onSubmit={submitCity}>
                                {/* <MyFormHelperText /> */}
                                <TextField
                                    id="inpuy-field-city"
                                    inputRef={cityRef}
                                    label="Add City"
                                    defaultValue="Rome"
                                    InputLabelProps={{
                                        sx: { color: '#fff'}
                                    }}
                                />
                                <Button sx={{mt:2}} type="submit">Add</Button>
                            </FormControl>
                        {/* </Form> */}
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