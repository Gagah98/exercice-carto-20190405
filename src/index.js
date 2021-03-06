import {
  select,
  geoMercator,
  geoPath,
} from 'd3'
import {
  WIDTH,
  HEIGHT,
} from './config'
import drawRoads from './drawRoads'
import drawAtm from './drawAtm'
import drawNightClub from './drawNightClub'
import drawBuildings from './drawBuildings'

const body = select(document.body)
const svg = body.append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const projection = geoMercator()
  .fitExtent ( //projetction qui rentre dans ce cadre
    [[0, 0], [WIDTH, HEIGHT]],
    { type: 'Feature', properties: {}, 
    geometry: { type: 'LineString', coordinates: [[6.64398, 46.77937], [6.64948, 46.78314]] } } //logitude/latitude du quartier d'Yverdon

  )
const pathCreator = geoPath().projection(projection)

drawRoads(svg, pathCreator)
drawAtm(svg, projection)
drawNightClub(svg, projection)
drawBuildings(svg, pathCreator)