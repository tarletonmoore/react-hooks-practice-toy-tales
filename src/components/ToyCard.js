import React from "react";

function ToyCard({ toy, toys, setToys, onHandleDelete }) {

  function handleDeleteToy() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then(() => onHandleDelete(toy))
  }

  function handleLikedToy() {
    // const updateLikes = {
    //   likes: toy.likes + 1
    // }

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      }),
    })
      .then((response) => response.json())
      .then((data) => setToys(data))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikedToy}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
