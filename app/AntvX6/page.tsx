'use client'
import React from 'react'
import { useEffect, useRef } from 'react'
import { Graph} from '@antv/x6'
import data from './generated.json'

function AntvX6HomePage() {
    const canvas = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        let time1 = +new Date()
        const graph = new Graph({
            container: document.getElementById('canvas'),
            width: 1000,
            height: 1000,
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
        graph.fromJSON(data)
        let time2 = +new Date()
        console.log('exe time = ', time2 - time1)
    }, [])

    return (
        <div ref={canvas} id='canvas'></div>
    )
}

export default AntvX6HomePage
