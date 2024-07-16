import React from "react";
const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

let persons = people.map((person, index) => (  // changes == impurity
  <div key={index}>
    <h1>{person}</h1>
  </div>
));
const ArrayMapping = () => {  // pure
  return <div>{persons}</div>;
};

export default ArrayMapping;
