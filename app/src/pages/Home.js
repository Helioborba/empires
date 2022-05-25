import { useContext } from "react";
import {Box, Typography, Grid, Button} from "@mui/material";
import { styled,alpha } from '@mui/material/styles';
import Nav from "../components/UI/nav/nav.js";
import ClockContext from "../engine/clockProvider.js";


const Canvas = styled(Box)(
    ({ theme }) => ({
    backgroundColor:'#fff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'1000px',
    width:'100%'
}));


const Home = (props) => {
    const ctxClock = useContext(ClockContext);
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
    };
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
                    <Grid container direction="column" item xs={10} sx={{p:{xs:"1rem 0 1rem 1rem", lg:2}}}>
                        <Grid item>
                            <Canvas variant="canvas" mt={2}></Canvas>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={2} justifyContent="space-around" sx={{p:{xs:2, lg:2}}}>
                        <Grid item>
                            <Typography variant="span">Dates</Typography>
                            <Typography variant="span">{componenteDados()}</Typography>
                        </Grid>
                        <Grid item display='flex' flexDirection='column'> 
                            <Typography variant="span">Vai ter algo aqui ainda</Typography>
                            <Button>Add</Button>
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