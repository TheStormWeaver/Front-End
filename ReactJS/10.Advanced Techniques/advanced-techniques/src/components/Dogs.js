import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { isAuth } from "../hoc/isAuth";

const Dogs = ({ user }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((res) => {
        setDogs(res.message);
      });
  }, []);

  /*
  if(!user.email) { //basic route guard
    return <Navigate to="/login" />
  }
  */

  return (
    <>
    <h2>{user.email}</h2>
      <Carousel>
        {dogs.map((x) => (
          <Carousel.Item>
            <img className="d-block w-100" src={x} alt="dog" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
const EnchantedComponent = isAuth(Dogs); //HOC that works as a route guard

export default EnchantedComponent;
