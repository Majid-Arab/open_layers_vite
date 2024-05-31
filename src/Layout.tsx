import { AppShell, NavLink } from "@mantine/core";
import { Outlet } from "react-router-dom";

function Layout() {
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
      </AppShell.Navbar>
      <AppShell.Main p={0}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
