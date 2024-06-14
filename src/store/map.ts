import { Map } from "ol";
import { Layer } from "ol/layer";
import { create } from "zustand";

type MapStore = {
  map: Map | null;
  setMap: (map: Map) => void;
  vectorLayer: Layer | null;
  setVectorLayer: (layer: Layer) => void;
};

export const useMapStore = create<MapStore>((set) => ({
  map: null,
  setMap: (map) => set({ map }),
  vectorLayer: null,
  setVectorLayer: (layer) => set({ vectorLayer: layer }),
}));
