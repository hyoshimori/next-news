import fs from 'fs';
import anime from './db/anime.json';
import coding from './db/coding.json';
import game from './db/game.json';
import japan from './db/japan.json';
import nintendo from './db/nintendo.json';
import tech from './db/tech.json';

const mergedData = {
  anime,
  coding,
  game,
  japan,
  nintendo,
  tech
};

fs.writeFileSync('db.json', JSON.stringify(mergedData, null, 2));
