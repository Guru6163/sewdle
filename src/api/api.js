import axios from "axios";

const login = async (email, password) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`,
    { email, password },
    { headers: { "Content-Type": "application/json" } }
  );
  return response;
};

const addMeasurement = async (body, id) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/measurements/${id}`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}
const addFabric = async (body) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/fabric`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}
const updateFabric = async (body, id) => {
  const response = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/fabric/${id}`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}
const deleteFabric = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/fabric/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}
const addTemplate = async (body) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/template`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}
const updateTemplate = async (body, id) => {
  const response = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/template/${id}`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}
const deleteTemplate = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/admin/template/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    }
  );
  return response;
}

const getAllUsers = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/user/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getAllFabrics = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/fabric/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getAllTemplates = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/template/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getAllOrders = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/order`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getAllProfiles = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/measurements/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getAllCategories = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/category`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getAllEmbroidaries = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/embroidery`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const getProfileMeasurements = async (id, profileName) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/measurements/${id}?name=${profileName}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const createUser = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/user/`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const createCategory = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/category/`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const createEmbroidary = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/embroidery/`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

const deleteUser = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/user/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const deleteCategory = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/category/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const deleteEmbroidary = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/embroidery/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const updateCategory = async (id, data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/category/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};
const updateMeasurement = async (id, data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/admin/measurements/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export {
  login,
  getAllUsers,
  createUser,
  deleteUser,
  addMeasurement,
  getAllFabrics,
  getAllTemplates,
  getAllOrders,
  addFabric,
  deleteFabric,
  updateFabric,
  addTemplate,
  deleteTemplate,
  updateTemplate,
  getAllProfiles,
  getProfileMeasurements,
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
  getAllEmbroidaries,
  deleteEmbroidary,
  createEmbroidary,
  updateMeasurement
};
