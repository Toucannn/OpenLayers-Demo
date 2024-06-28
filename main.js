import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MVT from 'ol/format/MVT'
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';

const rules = {
    'fill-color': 'rgba(255, 255, 0, 0.6)',
    'stroke-color': 'black',
    'stroke-width': 1,
  }

const vTile = new VectorTileLayer({
  source: new VectorTileSource({
    attributions: 'Landscape Geoinformatics Lab',
    format: new MVT(),
    maxZoom: 16,
    url: 'https://hytruck.landscape-geoinformatics.eu/tiles/AHP/AHP/{z}/{x}/{y}',
  }),
  style: rules,
})

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vTile,
  ],
  view: new View({
    center: [2800000, 8100000],
    zoom: 8,
    projection: 'EPSG:3857',
  })
});

map.on('click', function(e) {
  console.log(e)
})

let test = map.getLayers()
console.log(test)
console.log(vTile)
// renderer_.layer_.values_.source.tileCache.entries_["7/70/37"].value_.sourceTiles[0].features_