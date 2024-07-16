import React, { useState } from 'react'
import {makeStyles} from "@material-ui/styles";
import { generateRandomColor } from "../utils/color.utils";
import { TPoint } from '../interfaces/point';
import Point from './Point';


const useStyles = makeStyles(()=>({
    root:{
        border:"1px solid red",
        height:"100vh",
    }
}))

const Canvas = () => {
    const [points, setPoints] = useState<(TPoint[])>([]);
    const classes = useStyles();



    const handleOnClick = (event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const {clientX, clientY} = event;
        setPoints((prev) => [
            ...prev,
            {x: clientX, y:clientY, color:generateRandomColor()},
        ]);
        console.log({points});
        console.log({clientX, clientY, color: generateRandomColor()});
    }
  return (
    <div className={classes.root} onClick={handleOnClick}>
        {points.map((point, index) =>(
            <Point x={point.x} y={point.y} color={point.color} key={index}/>
        ))}
    </div>
  )
}

export default Canvas