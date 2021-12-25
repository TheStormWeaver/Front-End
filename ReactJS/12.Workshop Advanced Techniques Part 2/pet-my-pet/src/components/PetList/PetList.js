import PetCard from "./PetCard/PetCard";

const PetList = ({ pets }) => {
  return (
    <>
      {pets.length > 0 ? (
        <ul className="other-pets-list">
          {pets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </ul>
      ) : (
        <p className="no-pets">No pets in database!</p>
      )}
    </>
  );
};

export default PetList;
