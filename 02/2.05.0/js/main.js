/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const svg = d3.select('#chart-area')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500)
            
const circle = svg.append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 50)
  .attr('fill', 'blue')

const line = svg.append('line')
  .attr('x1', 200)
  .attr('y1', 200)
  .attr('x2', 300)
  .attr('y2', 250)
  .attr('stroke', 'red')
  .attr('stroke-width', 2)

const ellipse = svg.append('ellipse')
  .attr('cx', 150)
  .attr('cy', 150)
  .attr('rx', 50)
  .attr('ry', 100)
  .attr('stroke', 'purple')
  .attr('fill', 'white')

