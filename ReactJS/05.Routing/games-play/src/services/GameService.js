const baseUrl = "http://localhost:3030/data";

export function GetAll() {
  return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`).then((res) =>
    res.json()
  );
}

export const GetOne = (id) =>
  fetch(`${baseUrl}/games/${id}`).then((res) => res.json());

export const GetLatest = () => {
  return fetch(
    `${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`
  ).then((res) => res.json());
};
