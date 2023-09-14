import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const initialState = { cities };

function reducer(state, action) {
  switch (action.type) {
    case "cities/loaded":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      throw new Error("Action Unknown");
  }
}

function CitiesProvider({ children }) {
  const [{ cities }, dispatch] = useReducer({ reducer, initialState });

  useEffect(() => {
    async function getCities() {
      try {
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        // console.log(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        console.error(error.message);
      }
    }
    getCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, getCities }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === "undefined")
    throw new Error("CitiesContext is used outside CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
