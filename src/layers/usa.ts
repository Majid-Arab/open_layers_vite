import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";

export const usaLayer = new TileLayer({
  source: new TileWMS({
    url: "https://ahocevar.com/geoserver/wms",
    params: { LAYERS: "topp:states", TILED: true },
    serverType: "geoserver",
  }),
});
