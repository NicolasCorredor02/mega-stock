import { useEffect, useState } from "react";
import MapListMenu from "./MapListMenu";
import MapListAcordeon from "./MapListAcordeon";

function MapListContainer() {

  const footerNavs = [
    {
        id: 1,
        label: "Contacto",
        items: [
            {
                id: 1,
                href: '#',
                name: 'contacto'
            },
        ],
    },
    {
        id: 2,
        label: "Legales",
        items: [
            {
                id:1,
                href: '#',
                name: 'legales'
            },
        ]
    },
    {
        id: 3,
        label: "Menú",
        items: [
            {
                id:1,
                href: '#',
                name: 'menú'
            },
        ]
    }
]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar event listener para el redimensionamiento
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
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

  return (
    <>
        {renderContent()} 
    </>
  )
}

export default MapListContainer