const R = require('ramda')

//pick permet de choisir les attributs que l'on souhaite alors que omit les enlève

module.exports = feature => ({
  ...feature,
  properties: R.omit([
    'timestamp',
    'changeset',
    'user',
    'uid',
    'id',
    'version',
  ], R.prop('properties', feature))
})

