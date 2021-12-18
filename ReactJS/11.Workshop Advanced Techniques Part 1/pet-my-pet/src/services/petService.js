import { request } from "./requester";

const baseUrl = "http://softuni-rest-api-server.herokuapp.com/jsonstore";

export const getAll = () => {
  return request(`${baseUrl}/pets`);
};

export const getOne = (petId) => {
  return fetch(`${baseUrl}/pets/${petId}`).then((res) => res.json());
};

export const create = async (petData, token) => {
  let response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...petData, likes: [] }),
  });

  let result = await response.json();

  return result;
};

export const update = async (petId, petData, token) => {
  let response = await fetch(`${baseUrl}/pets/${petId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(petData),
  });

  let result = await response.json();

  return result;
};

export const destroy = (petId, token) => {
  return fetch(`${baseUrl}/pets/${petId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};

export const like = (petId, pet, token) => {
  return fetch(`${baseUrl}/pets/${petId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(pet),
  }).then((res) => res.json());
};
