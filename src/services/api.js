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
  //Get all products or Get products by category
  getAll: async (category = null) => {
    let response;
    if (category) {
      response = await fetch(`${API_URL}/products/${category}`);
    } else {
      response = await fetch(`${API_URL}/products`);
    }

    return handleResponse(response);
  },

  // Get product by id
  getById: async (id) => {
    const response = await fetch(`${API_URL}/products/product/${id}`);
    return handleResponse(response);
  },

  // Get limited products
  getLimitedProducts: async (limit, category = "") => {
    const response = await fetch(
      `${API_URL}/products/${category}/limited/${limit}`
    );
    return handleResponse(response);
  },

  // Get all categories
  getCategories: async () => {
    const response = await fetch(`${API_URL}/products/categories`);
    return handleResponse(response);
  },

  getSearchProducts: async (category, term) => {
    let response;

    if (category !== "all") {
      response = await fetch(`${API_URL}/products/search/${category}/${term}`);
    } else {
      response = await fetch(`${API_URL}/products/search/${term}`)
    }
    return handleResponse(response);
  },
};
