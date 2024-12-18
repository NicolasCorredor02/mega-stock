import MapMenu from "@components/Footer/components/MapMenu";

function MapListMenu({ footerNavs }) {
  return (
    <>
      {footerNavs.map((footerNavs) => (
        <ul key={footerNavs.id} className="space-y-4 text-primary">
          <h4 className="text-secondary font-bold sm:pb-2">
            {footerNavs.label}
          </h4>
          <MapMenu items={footerNavs.items}></MapMenu>
        </ul>
      ))}
    </>
  );
}

export default MapListMenu;
