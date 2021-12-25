import * as request from "./requester";

const baseUrl = "http://softuni-rest-api-server.herokuapp.com/data";

export const getOne = (petId, signal) => {
  return fetch(`${baseUrl}/pets/${petId}`, { signal }).then((res) =>
    res.json()
  );
};

export const getAll = () => {
  return request.get(`${baseUrl}/pets`);
};

export const getMyPets = (ownerId) => {
  let query = encodeURIComponent(`_ownerId="${ownerId}"`);

  return request.get(`${baseUrl}/pets?where=${query}`);
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

export const update = async (petId, petData) => {
  return request.put(`${baseUrl}/pets/${petId}`, petData);
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
