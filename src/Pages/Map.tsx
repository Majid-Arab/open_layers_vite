import { useRef, useEffect } from "react";
import Map1 from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";
import View from "ol/View";
import "ol/ol.css";
import "./Map.css";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      new Map1({
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source: new TileWMS({
              url: "https://ahocevar.com/geoserver/wms",
              params: { LAYERS: "topp:states", TILED: true },
              serverType: "geoserver",
            }),
          }),
        ],
        target: mapRef.current,
      });
    }
    return () => {
      mapRef.current = null;
    };
  }, []);

  return <div id="map" ref={mapRef}></div>;
};

export default Map;
