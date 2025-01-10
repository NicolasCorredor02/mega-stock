import { useEffect, useState } from "react";
import MapListMenu from "@components/Footer/components/MapListMenu";
import MapListAcordeon from "@components/Footer/components/MapListAcordeon";

function MapListContainer() {
  const footerNavs = [
    {
      id: 1,
      label: "Contact",
      items: [
        {
          id: 1,
          href: "#",
          name: "contact",
        },
      ],
    },
    {
      id: 2,
      label: "Legal",
      items: [
        {
          id: 1,
          href: "#",
          name: "legal",
        },
      ],
    },
    {
      id: 3,
      label: "Menú",
      items: [
        {
          id: 1,
          href: "#",
          name: "menú",
        },
      ],
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar event listener para el redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Renderizar contenido basado en el ancho de la ventana
  const renderContent = () => {
    if (windowWidth < 992) {
      return (
        <>
          <MapListAcordeon footerNavs={footerNavs}></MapListAcordeon>
        </>
      );
    } else {
      return (
        <>
          <MapListMenu footerNavs={footerNavs}></MapListMenu>
        </>
      );
    }
  };

  return <>{renderContent()}</>;
}

export default MapListContainer;
