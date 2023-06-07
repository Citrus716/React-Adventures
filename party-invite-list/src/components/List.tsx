import { useState } from "react";
import { IState as IProps } from "../App";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  people: IProps["people"];
  onClick: (person: IProps["people"][0]) => void;
}

const List = ({ people, onClick }: Props) => {
  const renderList = (): JSX.Element[] => {
    const [color, setColor] = useState("primary");
    const onMouseEnter = () => {
      setColor("danger");
    };
    const onMouseLeave = () => {
      setColor("primary");
    };
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
          <button
            type="button"
            className={"btn btn-" + color}
            onClick={() => onClick(person)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Remove
          </button>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
