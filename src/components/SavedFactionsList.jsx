import { useState, useEffect } from "react";

function SavedFactionsList({ onEdit }) {
  const [factions, setFactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFactions() {
      try {
        const response = await fetch("http://localhost:5211/api/factions");
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        const data = await response.json();
        setFactions(data);
      } catch (err) {
        console.error(err);
        setError("Could not load factions. Is the API running?");
      } finally {
        setLoading(false);
      }
    }
    loadFactions();
  }, []);

  if (loading) return <p>Loading factions...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="load">
      {factions.length === 0 ? (
        <p>No saved factions yet.</p>
      ) : (
        <ul>
          {factions.map((faction) => (
            <li key={faction.id}>
              <span><b>{faction.name}</b> - <i>"{faction.motto}"</i></span>
              <button onClick={() => onEdit(faction)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedFactionsList;