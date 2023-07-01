'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {type CellStyle, Graph, InternalEvent} from '@maxgraph/core';

export default function MaxGraphHome() {
  const graphContainer = useRef(null);
  const container = document.getElementById('graph-container')
  // Disables the built-in context menu
  // InternalEvent.disableContextMenu(container);

  useEffect(() => {
    const graph = new Graph(graphContainer.current);
    graph.setPanning(true); // Use mouse right button for panning
    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    const parent = graph.getDefaultParent();

    // Adds cells to the model in a single step
    graph.batchUpdate(() => {
      const vertex01 = graph.insertVertex(parent, null, 'a regular rectangle', 10, 10, 100, 100);
      const vertex02 = graph.insertVertex(parent, null, 'a regular ellipse', 350, 90, 50, 50);
      graph.insertEdge(parent, null, 'a regular edge', vertex01, vertex02);
    });
  }, [])

  return (
      <div ref={graphContainer} id='graph-container'></div>
  )
}
