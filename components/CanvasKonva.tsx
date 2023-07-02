'use client';
import { Stage, Layer, Circle } from 'react-konva';
import Konva from 'konva';
import { useEffect, useRef } from 'react';
import data from './konva-data.json'
import data10 from './konva-data-10.json'

function Canvas(props) {
    useEffect(() => {
        let stage = Konva.Node.create(JSON.stringify(data), 'container');
    }, [])

    return (
        <div id="container"></div>
    );
}

export default Canvas;
