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

export {
  login,
  getAllUsers,
  createUser,
  deleteUser,
  addMeasurement,
  getAllFabrics,
  getAllOrders,
  addFabric
};
