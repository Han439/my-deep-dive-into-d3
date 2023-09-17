/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json('./data/buildings.json').then((data) => {
  console.log(data)

  data.forEach((d) => {
    d.height = Number(d.height)
  })

  const svg = d3.select('#chart-area')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)

  const rect = svg.selectAll('rect')
    .data(data)

  rect.enter().append('rect')
    .attr('height', (d) => d.height)
    .attr('width', 30)
    .attr('fill', 'gray')
    .attr('x', (d, i) => (i * 30) + (i * 10))
    .attr('y', 0)
}).catch(error => {
  console.log(error)
})
