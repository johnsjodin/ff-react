import { useState } from "react";

function FactionSheet() {
  const [name, setName] = useState('');
  const [motto, setMotto] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [status, setStatus] = useState(null);
  const typeOptions = ['Nation', 'Outlaws', 'Guild / Order', 'Company', 'Cult', 'Other'];
  const organisationOptions = {
    Nation: ['Democracy', 'Monarchy', 'Dictatorship', 'Theocracy', 'Republic', 'Anarchy', 'Technocracy', 'Corporate State'],
    Outlaws: ['Raiders', 'Smugglers', "Thieves' Guild", 'Assassins', 'Rogue Mercenaries', 'Hackers'],
    'Guild / Order': ['Trade Guild', 'Knightly Order', 'Religious Order', 'Academic Order', 'Secret Society'],
    Company: ['Trading Company', 'Banking House', 'Industrial Conglomerate', 'Mercenary Contractor', 'Cartel', 'Megacorporation'],
    Cult: ['Doomsday Cult', 'Fringe Sect', 'Death Cult', "Prophet's Following", 'Techno-Cult'],
    Other: ['Tribe / Clan', 'Collective', 'Loose Network', 'Solitary Leader']
  };

  // Ser till att organisationen återställs när typen ändras.
  function handleTypeChange(e) {
    setType(e.target.value);
    setOrganisation('');
  }

  // Save-funktion med errorhantering
  async function handleSave() {
  const faction = { name, motto, description, type, organisation };

  try {
    const response = await fetch("http://localhost:5211/api/factions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(faction),
    });
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const saved = await response.json();
    setStatus(`Saved "${saved.name}" with id ${saved.id}!`);
  } catch (err) {
    console.error(err);
    setStatus("Could not save faction. Please try again.");
  }
}

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
            <select value={type} onChange={handleTypeChange}>
              <option value="" disabled>Select faction type</option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </label>

        <label>
          Organisation
            <select value={organisation} onChange={(e) => setOrganisation(e.target.value)}>
              <option value="" disabled>Select organisation type</option>
              {type && organisationOptions[type].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
        </label>

        <button onClick={handleSave}>Save Faction</button>
          {status && <p>{status}</p>}
    </div>
  );
}

export default FactionSheet;