import { useState } from "react";

function FactionSheet() {
const [name, setName] = useState('');
const [motto, setMotto] = useState('');
const [description, setDescription] = useState('');
const [type, setType] = useState('');
const typeOptions = ['Nation', 'Outlaws', 'Guild / Order', 'Company', 'Cult', 'Other'];

  return (
    <div className="sheet">

        <label>
          Faction Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="The name of your faction"
          />
        </label>

        <label>
          Faction Motto
          <input
            type="text"
            value={motto}
            onChange={(e) => setMotto(e.target.value)}
            placeholder="Your faction's motto or slogan"
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your faction in your own words."
          ></textarea>
          
        </label>

        <label>
          Type
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="" disabled>Select faction type</option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          
        </label>
    </div>
  );
}

export default FactionSheet;