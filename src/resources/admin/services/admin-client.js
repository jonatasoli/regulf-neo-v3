import axios from "axios";

const adminClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const load_users = async () => {
  // const response = await adminClient.get("/admin/users")
  // console.log(response)
  return await new Promise((resolve) => {
    setTimeout(() => {
    resolve([
    {
    id: 1,
    name: "Joao das Neves",
    email: "email@email.com",
    subscribe: "free",
    plan: "10 searchs by week",
    expire: "21-12-2021",
    },
    {
    id: 2,
    name: "Maria Mercedes",
    email: "new@email.com",
    subscribe: "paid",
    plan: "unlimited",
    expire: "21-12-2021",
    },
    ])
    }, 100);
    })
};
const get_user = async (id) => {
  const response = await adminClient.get(`/admin/user/${id}`);
  return response.data;
};
const save_user = async (user) => {
  const response = await adminClient.post("/admin/user", user);
  // return response.data;
  console.log(response)
  return true
};
const delete_user = async (email) => {
  const response = await adminClient.delete(`/admin/user/${email}`);
  console.log(response)
  return true;
};

const load_subscribes = async () => {
  // const response = await adminClient.get("/admin/subscribes")
  // console.log(response)
  return await new Promise((resolve) => {
    setTimeout(() => {
    resolve([
    {
      id: 1,
      name: "free",
      limit: "10 searchs by week",
      quantity: 10,
    },
    {
      id: 2,
      name: "paid",
      limit: "unlimited",
      quantity: 0,
    },
    ])
    }, 100);
    })
};

const save_subscribe = async (subscribe) => {
  const response = await adminClient.post("/admin/subscribe", subscribe);
  console.log(response)
  return true
  // return response.data;
};

const save_paywall_message = async (paywall_message) => {
  const response = await adminClient.post(
    "/admin/payawall-message",
    paywall_message
  );
  // return response.data;
  console.log(response)
  return true
};

const load_paywall_message = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("<p>Mensagem Salva <a href='https://uol.com.br>link</a></p>'");
    }, 100);
  });
};

export default {
  load_users,
  get_user,
  save_user,
  delete_user,
  load_subscribes,
  save_subscribe,
  load_paywall_message,
  save_paywall_message,
};
