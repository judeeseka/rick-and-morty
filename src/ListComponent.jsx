import React from 'react'
const getStatusColor = (status) => {
  switch (status) {
    case 'Alive':
      return 'status-alive';
    case 'Dead':
      return 'status-dead';
    default:
      return 'status-unknown';
  }
};

const ListComponent = ({characters}) => {
  return (
    <>
        {characters.map((character) => (
        <li key={character.id} className="character-card">
          <div className="character-image-container">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <div className="status-indicator-container">
              <div
                className={`status-indicator ${getStatusColor(character.status)}`}
              ></div>
            </div>
          </div>

          <div className="character-info">
            <h3 className="character-name">{character.name}</h3>

            <div className="character-details">
              <div className="status-species">
                <span className="status-badge">{character.status}</span>
                <span className="species-text">{character.species}</span>
              </div>

              <div className="character-meta">
                <p className="meta-item">
                  <span className="meta-label">Origin:</span> {character.origin.name}
                </p>
                <p className="meta-item">
                  <span className="meta-label">Location:</span> {character.location.name}
                </p>
                <p className="meta-item">
                  <span className="meta-label">Episodes:</span> {character.episode.length}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  )
}

export default ListComponent