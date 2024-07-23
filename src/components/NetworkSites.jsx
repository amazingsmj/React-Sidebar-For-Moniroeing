import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone/umd/vis-network';

const NetworkComponent = () => {
  const networkRef = useRef(null);
  const [clickedNodes, setClickedNodes] = useState(new Set());
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Create an array with nodes
    const nodes = new DataSet([
      { id: 1, label: "Router", shape: "icon", icon: { face: "FontAwesome", code: "\uf0e8", size: 30, color: "rgba(128, 128, 128, 0.5)" }, x: 0, y: 0, title: "Router: Handles network traffic" },
      { id: 2, label: "Switch", shape: "icon", icon: { face: "FontAwesome", code: "\uf1eb", size: 30, color: "rgba(128, 128, 128, 0.5)" }, x: 200, y: 0, title: "Switch: Connects network devices" },
      { id: 3, label: "Server", shape: "icon", icon: { face: "FontAwesome", code: "\uf233", size: 30, color: "rgba(128, 128, 128, 0.5)" }, x: 400, y: 0, title: "Server: Hosts applications and data" },
      { id: 4, label: "Laptop", shape: "icon", icon: { face: "FontAwesome", code: "\uf109", size: 30, color: "rgba(128, 128, 128, 0.5)" }, x: 200, y: 200, title: "Laptop: User's computer" },
      { id: 5, label: "Printer", shape: "icon", icon: { face: "FontAwesome", code: "\uf02f", size: 30, color: "rgba(128, 128, 128, 0.5)" }, x: 400, y: 200, title: "Printer: Prints documents" }
    ]);

    // Create an array with edges
    const edges = new DataSet([
      { from: 1, to: 2, color: { color: 'green' } },
      { from: 2, to: 3, color: { color: 'green' } },
      { from: 2, to: 4, color: { color: 'green' } },
      { from: 4, to: 5, color: { color: 'green' } },
      { from: 3, to: 5, color: { color: 'green' } }
    ]);

    // Create a network
    const container = networkRef.current;
    const data = { nodes, edges };
    const options = { physics: false }; // Disable physics to keep the nodes in fixed positions
    const network = new Network(container, data, options);

    // Get tooltip element
    const tooltip = tooltipRef.current;

    // Add hover event listener to the network
    network.on('hoverNode', function (params) {
      const nodeId = params.node;
      if (!clickedNodes.has(nodeId)) {
        const node = nodes.get(nodeId);
        tooltip.innerHTML = node.title;
        tooltip.style.display = 'block';
        tooltip.style.left = params.pointer.DOM.x + 'px';
        tooltip.style.top = params.pointer.DOM.y + 'px';
      }
    });

    // Add blur event listener to hide tooltip
    network.on('blurNode', function () {
      tooltip.style.display = 'none';
    });

    // Add click event listener to mark nodes as clicked
    network.on('selectNode', function (params) {
      const nodeId = params.nodes[0];
      setClickedNodes((prev) => new Set(prev).add(nodeId));
      tooltip.style.display = 'none'; // Hide tooltip
    });

    // Hide tooltip when clicking outside of the network
    const handleClickOutside = (event) => {
      if (!container.contains(event.target)) {
        tooltip.style.display = 'none';
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clickedNodes]);

  return (
    <div>
      <div id="mynetwork" ref={networkRef} style={{ width: '600px', height: '400px', border: '1px solid black' }}></div>
      <div id="tooltip" ref={tooltipRef} style={{
        position: 'absolute',
        background: '#fff',
        border: '1px solid #000',
        padding: '5px',
        display: 'none',
        zIndex: 1000,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
      }}></div>
    </div>
  );
};

export default NetworkComponent;

/*
Dépendences : 
    - npm install vis-network
    - npm install font-awesome
*/ 

