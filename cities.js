const northwestTerritoriesCities = [
  "Aklavik", "Edzo", "Enterprise", "Fort Good Hope", "Fort Liard",
  "Fort McPherson", "Fort Providence", "Fort Simpson", "Fort Smith", "Hay River",
  "Inuvik", "Jean Marie River", "Kakisa", "Kugluktuk", "Nahanni Butte",
  "Norman Wells", "Rae", "Rae Lakes", "Trout Lake", "Tsiigehtchic",
  "Tuktoyaktuk", "Wrigley", "Yellowknife",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < northwestTerritoriesCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(northwestTerritoriesCities[i]);
}

module.exports = { batches };
