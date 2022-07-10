import React, { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
  //  const contacts = [
  //    {
  //     name: "Jenny Han",
  //     avatarUrl: "https://via.placeholder.com/150",
  //     email: "jeny.han@unknow.com",
  //     age: 32,
  //   },
  //   {
  //     name: "Paco Almeida",
  //     avatarUrl: "https://via.placeholder.com/150",
  //    email: "pacoalm@unknow.com",
  //    age: 55,
  //  },
  // {
  //   name: "Evelyn Arellano",
  //   avatarUrl: "https://via.placeholder.com/150",
  //   email: "Evelyna@unknow.com",
  //   age: 47,
  // },
  //];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, []);

  return (
    <>
      {results.map((results, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={results.picture.large}
            name={results.name.first}
            email={results.email}
            age={results.dob.age}
          />
        );
      })}
    </>
  );
};
export default App;
