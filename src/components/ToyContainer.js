import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data)
      })

  }, [])

  function handleDelete(deletedToy) {
    console.log(deletedToy)
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  const toyCardComponent = toys.map((toy) => <ToyCard key={toy.id} toys={toys} toy={toy} setToys={setToys} onHandleDelete={handleDelete} />)

  return (
    <div id="toy-collection">{toyCardComponent}</div>
  );
}

export default ToyContainer;
