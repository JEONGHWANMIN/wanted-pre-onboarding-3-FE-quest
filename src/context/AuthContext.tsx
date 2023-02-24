import { createContext, ReactElement, useContext, useState } from "react";

interface AuthContextValue {
  authObj: AuthConfigOption;
  authConfig: (auth: AuthConfigOption) => void;
}

interface AuthConfigOption {
  userId: number | null;
  username: string | null;
  auth: boolean;
  token: string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface Props {
  children: ReactElement;
}

export const AuthProvider = ({ children }: Props) => {
  const [authObj, setAuthObj] = useState<AuthConfigOption>({
    userId: null,
    username: null,
    auth: false,
    token: null,
  });

  const authConfig = (config: AuthConfigOption) => {
    setAuthObj(config);
  };

  return (
    <AuthContext.Provider value={{ authObj, authConfig }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a DialogProvider");
  }
  return context;
};
