import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card-custom">
        <img className="img" onClick={() => props.handleClick(props.id)} alt={props.name} src={props.image} />
    </div>
  );
}

export default FriendCard;
