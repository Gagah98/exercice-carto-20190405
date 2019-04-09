const R = require('ramda')
const points = require('./points.json')
const removeOSM = require('./removeOSM')
const write = require('./writeCollection')

const features = R.prop('features', points)

write(
  'nightclub',
  features
    .map(removeOSM) //permet d'enlever les propriétés inutiles
    .filter(R.pathEq(['properties', 'amenity'], 'nightclub'))
  )
  .catch(console.log)