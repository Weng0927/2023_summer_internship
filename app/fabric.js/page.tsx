'use client'
import * as fabric from 'fabric';
import { NextPage } from 'next';
import {useCallback, useEffect} from 'react';
import { Canvas } from '@/components/Canvas';

function FabricPage() {
    useEffect(() => {
        const canvas = new fabric.Canvas('canvas');
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
        });
        canvas.add(rect);
        }
    , [])


    return (
        <canvas width="1000" height="1000" id='canvas'></canvas>
    )
}


export default FabricPage;
