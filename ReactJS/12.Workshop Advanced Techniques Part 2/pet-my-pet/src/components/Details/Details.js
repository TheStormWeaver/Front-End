import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import * as petService from "../../services/petService";
import * as likeService from "../../services/likeService";

import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import { useAuthContext } from "../../contexts/AuthContext";

import ConfirmDialogue from "../Common/ConfirmDialogue/ConfirmDialogue";
import usePetState from "../../hooks/usePetState";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const { petId } = useParams();
  const [pet, setPet] = usePetState(petId);
  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

  useEffect(() => {
    likeService.getPetLikes(petId).then((likes) => {
      setPet((state) => ({ ...state, likes }));
    });
  }, []);

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

  const likeButtonClick = () => {
    if (user._id === pet._ownerId) {
      return;
    }

    if (pet.likes.includes(user._id)) {
      addNotification("You cannot like again");
      return;
    }

    likeService.like(user._id, petId).then(() => {
      setPet((state) => ({ ...state, likes: [...state.likes, user._id] }));

      addNotification("Successfuly liked a cat :)", types.success);
    });
  };

  const ownerButtons = (
    <>
      <Link className="button" to={`/edit/${pet._id}`}>
        Edit
      </Link>
      <a className="button" href="#" onClick={deleteClickHandler}>
        Delete
      </a>
    </>
  );

  const userButtons = (
    <Button onClick={likeButtonClick} disabled={pet.likes?.includes(user._id)}>
      Like
    </Button>
  );

  return (
    <>
      <ConfirmDialogue
        show={showDeleteDialogue}
        onClose={() => setShowDeleteDialogue(false)}
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
              <span id="total-likes">Likes: {pet.likes?.length || 0}</span>
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
