import React from "react";
import { useSelector } from "react-redux";

function DestinationFact() {
  const destinationSelected = useSelector(
    (state) => state.destinationStore.destinationSelected
  );
  console.log(destinationSelected);
  if (destinationSelected == undefined) {
    return (
      <div className="text-center pt-4 text-warning">Select a destination</div>
    );
  } else {
    return (
      <div className="text-center border m-3 p-3">
        <h4 className="text-success">{destinationSelected.name}</h4>
        <h4>{destinationSelected.days}</h4>
        <h4>{destinationSelected.fact}</h4>
      </div>
    );
  }
}

export default DestinationFact;
