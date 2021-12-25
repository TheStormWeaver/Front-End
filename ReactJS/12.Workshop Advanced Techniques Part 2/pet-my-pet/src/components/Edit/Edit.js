import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import * as petService from "../../services/petService";
import { useAuthContext } from "../../contexts/AuthContext";

import usePetState from "../../hooks/usePetState";
import { Alert } from "react-bootstrap";

const types = [
  { value: "cats", text: "Cat" },
  { value: "dogs", text: "Dog" },
  { value: "birds", text: "Bird" },
  { value: "reptiles", text: "Reptile" },
  { value: "others", text: "Other" },
];

const Edit = () => {
  const { petId } = useParams();
  const [errors, setErrors] = useState({ name: null });
  const [pet, setPet] = usePetState(petId);
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const petEditSubmitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let name = formData.get("name");
    let description = formData.get("description");
    let imageUrl = formData.get("imageUrl");
    let type = formData.get("type");

    petService
      .update(pet._id, {
        name,
        description,
        imageUrl,
        type,
        _ownerId: pet._ownerId,
        likes: pet.likes,
        _id: pet._id,
      })
      .then(() => {
        navigate("/dashboard");
      });
  };

  const nameChangeHandler = (e) => {
    // the function should be used in a helper function, to not overflow the main component with code
    let currentName = e.target.value;
    if (currentName.length < 3) {
      setErrors((state) => ({
        ...state,
        name: "Your name should be at least 3 characters",
      }));
    } else if (currentName.length > 15) {
      setErrors((state) => ({
        ...state,
        name: "Your name should be not more than 15 characters",
      }));
    } else {
      setErrors((state) => ({ ...state, name: false })); // or we can use  name: null
    }
  };

  return (
    <section id="edit-page" className="edit">
      <form id="edit-form" method="POST" onSubmit={petEditSubmitHandler}>
        <fieldset>
          <legend>Edit my Pet</legend>
          <p className="field">
            <label htmlFor="name">Name</label>
            <span
              className="input"
              style={{ borderColor: errors.name ? "red" : "inherit" }}
            >
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={pet.name}
                onBlur={nameChangeHandler} // can be done with onChange(), with a de-bouncer function or without
              />
            </span>
            <Alert variant="danger" show={errors.name}>
              {errors.name}
            </Alert>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea
                name="description"
                id="description"
                defaultValue={pet.description}
              ></textarea>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input
                type="text"
                name="imageUrl"
                id="image"
                defaultValue={pet.imageUrl}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Type</label>
            <span className="input">
              <select
                id="type"
                name="type"
                value={pet.type}
                onChange={(e) =>
                  setPet((state) => ({ ...state, type: e.target.value }))
                }
              >
                {types.map((x) => (
                  <option key={x.value} value={x.value}>
                    {x.text}
                  </option>
                ))}
              </select>
            </span>
          </p>
          <input className="button submit" type="submit" value="Save" />
        </fieldset>
      </form>
    </section>
  );
};

export default Edit;
