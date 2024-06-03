import React, { createContext, useContext, useState, ReactNode } from "react";

type LayerVisibilityContextType = {
  layerVisible: boolean;
  toggleLayerVisibility: () => void;
};

const LayerVisibilityContext = createContext<
  LayerVisibilityContextType | undefined
>(undefined);

export const LayerVisibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [layerVisible, setLayerVisible] = useState(true);

  const toggleLayerVisibility = () => {
    setLayerVisible((prev) => !prev);
  };

  return (
    <LayerVisibilityContext.Provider
      value={{ layerVisible, toggleLayerVisibility }}
    >
      {children}
    </LayerVisibilityContext.Provider>
  );
};

export const useLayerVisibility = () => {
  const context = useContext(LayerVisibilityContext);
  if (!context) {
    throw new Error(
      "useLayerVisibility must be used within a LayerVisibilityProvider"
    );
  }
  return context;
};
