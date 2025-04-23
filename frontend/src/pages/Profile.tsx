import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card/Card'; // Ajusta la ruta si es diferente
import '../styles/profile.css';


interface User {
  name: string;
  email: string;
  company: string;
  phone: string;
  photoUrl: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulando datos del usuario
    const fetchedUser = {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      company: 'Ventas S.A.',
      phone: '+56 9 1234 5678',
      photoUrl: 'https://i.pravatar.cc/150?img=3' // Foto de perfil simulada
    };
    setUser(fetchedUser);
  }, []);

  const handleEditProfile = () => {
    alert('Editando perfil...');
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">Mi Perfil</h1>
      {user ? (
        <Card className="profile-card">
          <div className="profile-info">
            <img src={user.photoUrl} alt="Foto de perfil" className="profile-photo" />
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Correo:</strong> {user.email}</p>
            <p><strong>Empresa:</strong> {user.company}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <button className="edit-button" onClick={handleEditProfile}>
              Editar Perfil
            </button>
          </div>
        </Card>
      ) : (
        <p className="loading-text">Cargando perfil...</p>
      )}
    </div>
  );
};

export default Profile;
