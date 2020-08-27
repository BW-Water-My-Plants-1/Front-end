import React from 'react'
import { Route } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import PlantCard from './PlantCard'
import AddPlant from './AddPlant'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


function PlantList({ plantList }) {
    const classes = useStyles();
 
    console.log(plantList)
    return (
        <Card className={classes.root}>
           {plantList.map(plant => (
            <PlantCard key={plant.plantid}
                plant={plant}
            />
           ))} 
        </Card>
    )
}


export default PlantList
