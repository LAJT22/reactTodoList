import { useState } from "react";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { RiCheckLine, RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";

const priorityIcon = [
  <FcHighPriority key={0} />,
  <FcMediumPriority key={1} />,
  <FcLowPriority key={2} />,
];

export function TodoItem({
  onDeleteButtonClick,
  taskName,
  priority,
  done,
  onDoneButtonClick,
  onEditButtonClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(taskName);
  const [inputError, setInputError] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Dodaj walidację dla pustego pola tekstowego
    if (!editedText.trim()) {
      setInputError(true);
    } else {
      setInputError(false);
      onEditButtonClick(editedText);
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <div>
          <input
            className={` m-1 rounded-md border-2   p-4  text-black focus:border-violet-400 focus:outline-none ${
              inputError ? "bg-red-300 border-red-400" : ""
            }`}
            type="text"
            value={editedText}
            onChange={(e) => {
              setEditedText(e.target.value);
              setInputError(false); // Usuń komunikat błędu przy zmianie wartości
            }}
          />
          {inputError ? (
            <p className="m-1 text-red-500">Task name can&apos;t be empty.</p>
          ) : (
            <button
              className="ml-5 h-5 w-5 text-green-700"
              onClick={handleSaveClick}
            >
              <RiCheckLine />
            </button>
          )}
        </div>
      ) : (
        <li className="flex items-center gap-4 border-t-2 p-4 ">
          <input
            type="radio"
            id={Math.random()}
            onChange={onDoneButtonClick}
            checked={done}
          />
          <span className={`${done ? "line-through" : ""} w-full`}>
            {taskName}
          </span>
          {priorityIcon[priority]}
          <button onClick={handleEditClick}>
            <RiEditBoxLine />
          </button>
          <button onClick={onDeleteButtonClick}>
            <RiDeleteBinLine />
          </button>
        </li>
      )}
    </>
  );
}
