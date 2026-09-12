import { useState } from "react";

function FactionSheet() {
const [name, setName] = useState('');
const [motto, setMotto] = useState('');
const [description, setDescription] = useState('');

  return (
    <div className="sheet">
        <label>
          Faction Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Faction Name"
          />
        </label>
        <label>
          Faction Motto
          <input
            type="text"
            value={motto}
            onChange={(e) => setMotto(e.target.value)}
            placeholder="Faction Motto"
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Faction Description"
          ></textarea>
        </label>
    </div>
  );
}

export default FactionSheet;