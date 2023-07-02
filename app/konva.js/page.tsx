'use client'
import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text } from "react-konva";
import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@/components/CanvasKonva'), { ssr: false })

function KonvaPage() {
    return (
        <Canvas></Canvas>
    )
}

export default KonvaPage;
