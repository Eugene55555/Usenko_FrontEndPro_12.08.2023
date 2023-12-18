import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
  };

  const fetchAlbums = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    const albums = await response.json();
    setAlbums(albums);
  };

  const handleAlbumsClick = (userId) => {
    setSelectedUserId(userId);
    fetchAlbums(userId);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumsClick(user.id)}>Albums</button>
          </li>
        ))}
      </ul>

      {selectedUserId && (
        <div>
          <h2>Albums</h2>
          <ul>
            {albums.map(album => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;