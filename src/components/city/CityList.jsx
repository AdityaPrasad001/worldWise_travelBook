import React from "react";
import styles from "./CityList.module.css";
import { useCities } from "../../context/CitiesContext";
import CitiesItem from "./CityItem";
const CitiesList = () => {
  const { cities } = useCities();

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CitiesItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CitiesList;
