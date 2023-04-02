import React from 'react'
import cars from '../cars.json'
// Import {useParams} from "react-router-dom" here //
import { useParams } from 'react-router-dom';
// import MUI components here //
// Container, Paper, Chip //
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const Car = (props) => {

    const { carId } = useParams();

   const specificCar = cars.find(({ id }) => id === parseInt(carId))
    
    return (
    <div>
        {<React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={{ padding: '45px'}}>
            <Paper 
            key='4' 
            elevation='4'
            style={{ padding: '40px' }}>
                <h1 style={{ }}>{`${specificCar.Name}`}</h1>
                <Chip label={`id:${carId}`}/>
                <Chip label={`Name:${specificCar.Name}`} />
                <Chip label={`Miles_Per_Gallon:${specificCar.Miles_per_Gallon}`} />
                <Chip label={`Cylinders:${specificCar.Cylinders}`} />
                <Chip label={`Displacement:${specificCar.Displacement}`} />
                <Chip label={`Horsepower:${specificCar.Horsepower}`} />
                <Chip label={`Weight_in_lbs:${specificCar.Weight_in_lbs}`} />
                <Chip label={`Acceleration:${specificCar.Acceleration}`} />
                <Chip label={`Year:${specificCar.Year}`} />
                <Chip label={`Origin:${specificCar.Origin}`} />
            </Paper>
        </Container>
        </React.Fragment>}
    </div>
    )}

export default Car