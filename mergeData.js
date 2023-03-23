const fs = require('fs');
const us = require('./db/us.json');
const anime = require('./db/anime.json');
const coding = require('./db/coding.json');
const game = require('./db/game.json');
const japan = require('./db/japan.json');
const nintendo = require('./db/nintendo.json');
const tech = require('./db/tech.json');
const world = require('./db/world.json');
const other = require('./db/other.json');

const mergedData = {
  us,
  anime,
  coding,
  game,
  japan,
  nintendo,
  tech,
  world,
  other
};

fs.writeFileSync('db.json', JSON.stringify(mergedData, null, 2));
