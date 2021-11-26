import { Component } from "react";
import "./HobbyList.css";

class HobbyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hobbies: [],
      selectedHobby: null,
    };
  }

  //the 3 main lifecycle methods in class components (<--)

  componentWillUnmount() { //<--
    console.log("Unmounted");
  }

  componentDidUpdate() { //<--
    console.log("Updated");
  }

  componentDidMount() { //<--
    //equivalent to useEffect in functional components
    fetch("http://localhost:3030/jsonstore/hobbies")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ hobbies: Object.values(res) });
      });
  }

  onHobbyClick(e) {
    console.log(e.target.textContent);

    this.setState({ selectedHobby: e.target.textContent });
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.hobbies.map((hobby) => (
            <li
              className={
                hobby.name == this.state.selectedHobby ? "selected-hobby" : ""
              }
              onClick={this.onHobbyClick.bind(this)}
              key={hobby._id}
            >
              {hobby.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HobbyList;
