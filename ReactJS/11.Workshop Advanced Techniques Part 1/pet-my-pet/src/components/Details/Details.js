import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as petService from "../../services/petService";
import { useAuthContext } from "../../contexts/AuthContext";

import ConfirmDialogue from "../Common/ConfirmDialogue/ConfirmDialogue";
import { Button } from "react-bootstrap";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [pet, setPet] = useState({});
  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);
  const { petId } = useParams();

  useEffect(() => {
    petService.getOne(petId).then((petResult) => setPet(petResult));
  }, [petId]);

  const deleteHandler = (e) => {
    e.preventDefault();

    petService
      .destroy(petId, user.accessToken)
      .then(() => {
        navigate("/dashboard");
      })
      .finally(setShowDeleteDialogue(false));
  };

  const deleteClickHandler = (e) => {
    e.preventDefault();

    setShowDeleteDialogue(true);
  };

  const onClose = (e) => {
    e.preventDefault();

    setShowDeleteDialogue(false);
  };

  const likeButtonClick = () => {
    if (pet.likes.includes(user._id)) {
      //todo: add notification
      console.log("User already liked");
      return;
    }

    let likes = [...pet.likes, user._id];
    let likedPet = { ...pet, likes };

    petService.like(pet._id, likedPet, user.accessToken).then((resData) => {
      console.log(resData);
      setPet((state) => ({
        ...state,
        likes,
      }));
    });
  };

  const ownerButtons = (
    <>
      <Link className="button" to="/edit">
        Edit
      </Link>
      <a className="button" href="#" onClick={deleteClickHandler}>
        Delete
      </a>
    </>
  );

  const userButtons = (
    <Button className="button" href="#" onClick={likeButtonClick}>
      Like
    </Button>
  );

  return (
    <>
      <ConfirmDialogue
        show={showDeleteDialogue}
        onClose={onClose}
        onSave={deleteHandler}
      />
      <section id="details-page" className="details">
        <div className="pet-information">
          <h3>Name: {pet.name}</h3>
          <p className="type">Type: {pet.type}</p>
          <p className="img">
            <img src={pet.imageUrl} />
          </p>
          <div className="actions">
            {user._id &&
              (user._id === pet._ownerId ? ownerButtons : userButtons)}

            <div className="likes">
              <img className="hearts" src="/images/heart.png" />
              <span id="total-likes">Likes: {pet.likes?.length}</span>
            </div>
          </div>
        </div>
        <div className="pet-description">
          <h3>Description:</h3>
          <p>{pet.description}</p>
        </div>
      </section>
    </>
  );
};

export default Details;
