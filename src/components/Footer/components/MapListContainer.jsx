import { useEffect, useState } from "react";
import MapListMenu from "@components/Footer/components/MapListMenu";
import MapListAcordeon from "@components/Footer/components/MapListAcordeon";

function MapListContainer() {
  const footerNavs = [
    {
      id: 1,
      label: "Home",
      items: [
        {
          id: 1,
          href: "/",
          name: "home",
        },
      ],
    },
    {
      id: 2,
      label: "Products",
      items: [
        {
          id: 1,
          href: "/shop/technology",
          name: "Technology",
        },
        {
          id: 2,
          href: "/shop/women's clothing",
          name: "Women's clothing",
        },
        {
          id: 3,
          href: "/shop/men's clothing",
          name: "Men's clothing",
        },
        {
          id: 4,
          href: "/shop/footwear",
          name: "Footwear",
        },
      ],
    },
    {
      id: 3,
      label: "About us",
      items: [
        {
          id: 1,
          href: "#",
          name: "about us",
        },
      ],
    },
    {
      id:4,
      label: "Help",
      items:[
        {
          id: 1,
          href:"#",
          name: "help"
        }
      ]
    }
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
