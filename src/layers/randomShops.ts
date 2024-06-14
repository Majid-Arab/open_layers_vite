import { Vector as VectorSource } from "ol/source";
import { Vector } from "ol/layer";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Circle, Fill, Stroke, Style } from "ol/style";
export function getRandomCoordinates() {
  const minLat = 24.8;
  const maxLat = 25.1;
  const minLon = 66.9;
  const maxLon = 67.3;
  const lat = Math.random() * (maxLat - minLat) + minLat;
  const lon = Math.random() * (maxLon - minLon) + minLon;
  return [lon, lat];
}

export function generateShop(numShops: number) {
  const shops = [];
  for (let i = 0; i < numShops; i++) {
    shops.push({
      id: i + 1,
      name: `Shop ${i + 1}`,
      coordinates: getRandomCoordinates(),
    });
  }
  return shops;
}
const shopData = generateShop(100);

const shopFeatures = shopData.map((shop) => {
  return new Feature({
    geometry: new Point(fromLonLat(shop.coordinates)),
    name: shop.name,
    id: shop.id,
  });
});

const vectorSource = new VectorSource({
  features: shopFeatures,
});

export const vectorLayer = new Vector({
  source: vectorSource,
  style: new Style({
    image: new Circle({
      radius: 5,
      fill: new Fill({
        color: "red",
      }),
      stroke: new Stroke({
        color: "#000",
        width: 1,
      }),
    }),
  }),
});
