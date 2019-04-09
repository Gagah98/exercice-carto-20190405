const R = require('ramda')
const write = require('./writeCollection')
const removeOSM = require('./removeOSM')
const polygons = require('./polygons.json')

const polygonsFeatures = R.prop('features', polygons)
  .map(removeOSM)
const buildings = polygonsFeatures
  .filter(R.hasPath(['properties', 'building']))

const buildingTypes = R.uniq(buildings.map(R.path(['properties', 'building'])))
console.log(buildingTypes)


write('buildings', buildings)
  .catch(console.log)
