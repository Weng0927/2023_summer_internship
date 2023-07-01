'use client'
import React from 'react'
import { useEffect, useRef } from 'react'
import { Graph} from '@antv/x6'

function AntvX6HomePage() {
    const canvas = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const graph = new Graph({
            container: document.getElementById('canvas'),
            width: 500,
            height: 400,
        })

        const source = graph.addNode({
            x: 300,
            y: 40,
            width: 80,
            height: 40,
            label: 'Hello',
        })

        const target = graph.addNode({
            x: 420,
            y: 180,
            width: 80,
            height: 40,
            label: 'World',
        })

        graph.addEdge({source, target})
    }, [])

    return (
        <div ref={canvas} id='canvas'></div>
)
}

export default AntvX6HomePage
