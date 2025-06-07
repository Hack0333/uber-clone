import { createContext, useContext, useState } from "react";

const CaptainContext = createContext(null);

export const useCaptain = () => {
  const context = useContext(CaptainContext);
  if (!context) {
    throw new Error("useCaptain must be used within a <CaptainState> provider.");
  }
  return context;
};

const CaptainState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [captainData, setCaptainData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <CaptainContext.Provider
      value={{ isLoading, setIsLoading, captainData, setCaptainData, error, setError }}
    >
      {children}
    </CaptainContext.Provider>
  );
};

export default CaptainState;
