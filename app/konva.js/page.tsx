'use client'
import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";

function ColoredRect() {
    const [color, setColor] = React.useState("green");

    const handleClick = () => {
        setColor(Konva.Util.getRandomColor());
    }

    return (
        <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill={color}
            shadowBlur={5}
            onClick={handleClick}
        />
    );
}

function KonvaPage() {
    return (
        <div>
            <h1>Konva Home</h1>
            <div id="container"></div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text text="Try click on rect" />
                    <ColoredRect />
                </Layer>
            </Stage>
        </div>
    )
}

export default KonvaPage;
