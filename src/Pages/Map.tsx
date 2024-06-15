import { useRef, useEffect, useState } from "react";
import Map1 from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import "ol/ol.css";
import "./Map.css";
import { useMapStore } from "../store/map";
import { vectorLayer } from "../layers/randomShops";
import { fromLonLat } from "ol/proj";
import { Select } from "ol/interaction";
import { click } from "ol/events/condition";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type ShopInfo = {
  id: number;
  name: string;
};

const Map = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { setMap } = useMapStore((state) => state);
  const [shopInfo, setShopInfo] = useState<ShopInfo>();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map1({
        view: new View({
          center: fromLonLat([66.990501, 24.860966]),
          zoom: 11,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        target: mapRef.current,
      });

      const select = new Select({
        condition: click,
      });

      map.addInteraction(select);

      select.on("select", (e) => {
        if (e.selected.length > 0) {
          const feature = e.selected[0];
          const { name, id } = feature.getProperties();
          setShopInfo({ name, id });
        }
        open();
      });

      map.on("click", (evt) => {
        const feature = map.getFeaturesAtPixel(evt.pixel)[0];
        if (!feature) return;
        const properties = feature.getProperties();
        console.log(properties.id);
      });
      setMap(map);
    }
    return () => {
      mapRef.current = null;
    };
  });

  return (
    <div id="map" ref={mapRef}>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="bottom"
        title="Authentication"
      >
        {shopInfo && JSON.stringify(shopInfo, null, 2)}
      </Drawer>
    </div>
  );
};

export default Map;
