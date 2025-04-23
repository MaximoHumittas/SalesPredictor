import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;  // Ahora login acepta email y password
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Aquí iría la lógica de autenticación, por ejemplo:
    // Verificar email y password, y si es correcto, autenticar al usuario.
    // En este caso solo estamos simulando el login:
    if (email === 'juanito@mock.com' && password === '123456') {
      setUser({ name: 'Juanito', email });
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
};
