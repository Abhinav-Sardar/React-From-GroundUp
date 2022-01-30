import data from "./data";
import { useState } from "react";
import "./styles.css";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
const BirthdayReminder = () => {
  const [bdays, setBdays] = useState(data);
  return (
    <>
      <div className="page">
        <div className="card">
          <h1 className="title">{bdays.length} Birthdays Today</h1>
          <div className="users_wrapper">
            {bdays.map((person) => (
              <div className="user" key={person.name}>
                <img src={person.image} alt={person.name} />
                <div className="content">
                  <h3>{person.name}</h3>
                  <h4>{person.age} years</h4>
                </div>
              </div>
            ))}
          </div>
          <button className="clear" onClick={() => setBdays([])}>
            Clear All
          </button>
          {bdays.length === 0 && (
            <button className="clear" onClick={() => setBdays(data)}>
              Restore Bdays
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BirthdayReminder;
