import React, { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  // Agrega otros campos de perfil según sea necesario
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Aquí puedes obtener los datos del usuario desde un API o contexto
    const fetchedUser = { name: 'Juan Pérez', email: 'juan@example.com' }; // Ejemplo
    setUser(fetchedUser);
  }, []);

  const handleEditProfile = () => {
    // Lógica para editar el perfil
    alert('Editando perfil');
  };

  return (
    <div className="profile-container">
      <h1>Mi Perfil</h1>
      {user ? (
        <div className="profile-details">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo:</strong> {user.email}</p>
          {/* Agrega más campos según sea necesario */}
          <button onClick={handleEditProfile}>Editar Perfil</button>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default Profile;
