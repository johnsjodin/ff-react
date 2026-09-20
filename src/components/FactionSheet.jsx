import { useState } from "react";

function FactionSheet({ faction }) {
  const [name, setName] = useState(faction?.name ?? '');
  const [motto, setMotto] = useState(faction?.motto ?? '');
  const [description, setDescription] = useState(faction?.description ?? '');
  const [type, setType] = useState(faction?.type ?? '');
  const [organisation, setOrganisation] = useState(faction?.organisation ?? '');
  const [status, setStatus] = useState(null);
  const [emblemFile, setEmblemFile] = useState(null);

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

  // Reset-knappens funktion
  function handleReset() {
    setName(faction?.name ?? '');
    setMotto(faction?.motto ?? '');
    setDescription(faction?.description ?? '');
    setType(faction?.type ?? '');
    setOrganisation(faction?.organisation ?? '');
    setStatus(null);
  }

  // Save-funktion med errorhantering
  async function handleSave() {
    const body = { name, motto, description, type, organisation };
    const editing = faction !== null;

    const url = editing
      ? `http://localhost:5211/api/factions/${faction.id}`
      : "http://localhost:5211/api/factions";

    try {
      const response = await fetch(url, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error(`Server responded with ${response.status}`);

      let savedId;
      if (editing) {
        savedId = faction.id;
      } else {
        const saved = await response.json();
        savedId = saved.id;
      }

      if (emblemFile) {
        const formData = new FormData();
        formData.append('file', emblemFile);

        const uploadResponse = await fetch(
          `http://localhost:5211/api/factions/${savedId}/emblem`,
          {
            method: "POST",
            body: formData,
          }
        );
        if (!uploadResponse.ok) throw new Error(`Failed to upload emblem: ${uploadResponse.status}`);
      }
      setStatus(editing ? "Faction updated!" : "Faction saved!");
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

        <label>
          Emblem
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEmblemFile(e.target.files[0])}
          />
        </label>

        <div className="sheet-actions">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSave}>Save Faction</button>
        </div>

        {status && <p>{status}</p>}
    </div>
  );
}

export default FactionSheet;