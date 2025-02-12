// URL API
const API_URL = import.meta.env.VITE_API_URL;

// Funcion helper para manejar los errores
const handleResponse = async (response) => {
  if (!response.ok) {
    // Toma la respuesta de error que es enviada por la API para capturar y retornar
    const error = await response.json();
    throw new Error(error.message || "Algio salio mal");
  }

  return response.json();
};

// Objeto que contiene todos los métodos para interactuar con productos
export const productServices = {
    // TODO seguir con la configuracion de los metodos 
}
