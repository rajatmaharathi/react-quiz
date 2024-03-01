import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  dispatch,
  initialState,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
