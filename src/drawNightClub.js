import { path } from 'ramda'
import nightclub from '../data/nightclub.json'

export default (svg, projection) => {
  const getTransform = feature => {
    const point = projection(path(['geometry', 'coordinates'], feature))
    return `translate(${point[0]},${point[1]})`
  }
  svg.selectAll('circle.nightclub')
    .data(nightclub.features)
    .enter()
    .append('circle')
    .attr('r', 20)
    .attr('class', 'nightclub')
    .attr('transform', getTransform)
    .attr('fill', 'yellow')
    .text('citron Masqué')
}