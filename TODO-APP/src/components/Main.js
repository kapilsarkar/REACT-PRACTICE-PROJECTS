import { useState } from "react";
const Main = () => {
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleClick() {
    console.log(searchText)
  }

  return (
    <div className="main">
      <input
        type="text"
        className="input-box"
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Main;
