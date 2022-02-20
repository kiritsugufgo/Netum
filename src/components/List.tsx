import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const List: React.FC<IProps> = ({ people, setPeople }) => {
    const deleteName = (e: any): void => {
        const name = e.getAttribute(e.firstName)
        setPeople(people.filter(item => item.firstName !== e.firstName));

        // const index: number = people.indexOf(e.firstName);
        // setpeople.splice(index,1);
        // console.log(index);
    }



  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <h2>
              {person.firstName} {person.lastName}
            </h2>
          </div>

          <p>{person.age} years old</p>

          <p className="List-note">{person.note}</p>
          {<button className="delete-btn" onClick={deleteName} name="delete-btn">
            Delete
          </button>}
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
