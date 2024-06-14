import { AppShell, Checkbox, NavLink } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useMapStore } from "./store/map";
import { usaLayer } from "./layers/usa";
import { vectorLayer } from "./layers/randomShops";
import { useState } from "react";

function Layout() {
  const { map } = useMapStore((state) => state);
  const [usaCheck, setUsaCheck] = useState(false);
  const [shopsCheck, setShopsCheck] = useState(false);

  function handleUSACheck(check: boolean) {
    setUsaCheck(check);
    if (check) {
      map?.addLayer(usaLayer);
    } else {
      map?.removeLayer(usaLayer);
    }
  }
  function handleShopCheck(check: boolean) {
    setShopsCheck(check);
    if (check) {
      map?.addLayer(vectorLayer);
    } else {
      map?.removeLayer(vectorLayer);
    }
  }
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>
        <NavLink href="/" label="Home" />
        <NavLink href="/map" label="Map" />
        <Checkbox
          checked={usaCheck}
          onChange={(e) => handleUSACheck(e.target.checked)}
          label="Open Layer"
        />
        <Checkbox
          checked={shopsCheck}
          onChange={(e) => handleShopCheck(e.target.checked)}
          label="Show Shops"
        />
      </AppShell.Navbar>
      <AppShell.Main p={0}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
