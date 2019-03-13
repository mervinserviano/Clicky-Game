import React, { Component } from "react";
import Nav from "./components/Nav";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Friends from "./friends.json";

class App extends Component {
// Setting state: Friends, highScore, score, cardClick, navMessage
  state = {
    Friends,
    highScore: 0,
    score: 0,
    cardClicked: [],
    navMessage: "Click a photo to begin! Clicking the same image twice restarts the game."
  };

// Function to shuffle the photos
  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleClick = (id) => {
    // handleClick push id to newArr, setState highScore cardClicked.
    let newArr = this.state.cardClicked;
    newArr.push(id);
    this.setState({ cardClicked: newArr });
    // console.log("cardClicked: " + newArr);
    // console.log("newArr Length: " + newArr.length);

    if (new Set(newArr).size !== newArr.length) {
      this.setState({
        highScore: this.state.highScore,
        cardClicked: [],
        score: 0,
        navMessage: "INCORRECT! New round. Click a photo to begin!"
      })
    } 
    else {
      if (this.state.score >= this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1,
        });
      }
      this.setState.Friends = this.shuffleArray(this.state.Friends);
      this.setState({
        score: this.state.score + 1,
        navMessage: "CORRECT!"
      });
    }
  }

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
          navMessage={this.state.navMessage}
        />
        <Wrapper>
          {this.state.Friends.map(friend => (
            <FriendCard
              image={friend.image}
              handleClick={this.handleClick}
              id={friend.id}
            />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;

// Basis of clicky game: click on randomize pictures, try to get the highest score, clicking on the same picture twice restarts the round.

//START 
// Shuffle pictures, setState array: [], setState score: 0, message: Click an image to begin, don't click an image twice or the game

// When a picture is clicked take that id push it into an array.
// If id === to id of array return message of "Incorrect"
// Else add one point with setState: this.state.score.
// If score > highScore setState highScore === score
// 