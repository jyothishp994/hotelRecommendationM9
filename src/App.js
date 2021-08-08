import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const hotels = {
    Resort: [
      { name: "The Greenvilla", rating: "4/5" },
      { name: "The Paradise Resort", rating: "3.5/5" }
    ],
    HillStation: [
      {
        name: "Ooty HillStation Hotel",
        rating: "4/5"
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        rating: "4.5/5"
      }
    ],
    City: [
      {
        name: "Marriot Hotel",
        rating: "3.5/5"
      },
      {
        name: "Taj Hotel",
        rating: "5/5"
      }
    ],
    Beachside: [
      {
        name: "Mumbai Beach Resort",
        rating: "4/5"
      },
      {
        name: "Goa Beach Resort",
        rating: "3/5"
      },
      {
        name: "Kochi Resorts",
        rating: "3/5"
      }
    ]
  };
  const [selectedGenre, setGenre] = useState("City");
  var hotelTypes = Object.keys(hotels);
  function genreClickHandler(item) {
    console.log(item);
    setGenre(item);
  }
  return (
    <div className="App">
      <h1>🏩 Hotel Recommendations</h1>
      <h2>
        {hotelTypes.map((item) => {
          return (
            <div
              key={item}
              onClick={() => genreClickHandler(item)}
              style={{
                cursor: "pointer",
                background: "black",
                color: "white",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                margin: "1rem 0.6rem",
                display: "inline"
              }}
            >
              {item}
            </div>
          );
        })}
      </h2>
      -------------------------------------------------------------------------------------------------------
      <ul
        style={{
          listStyle: "none"
        }}
      >
        <li>
          {hotels[selectedGenre].map((hotel) => (
            <div
              style={{
                padding: "1rem",
                width: "55%",
                margin: "1rem",
                borderRadius: "0.5rem",
                fontWeight: "bolder",
                background: "white"
              }}
              key={hotel.name}
            >
              {hotel.name}
              <div style={{ fontSize: "smaller", textAlign: "right" }}>
                {hotel.rating}
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
