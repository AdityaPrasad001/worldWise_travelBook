import { useCities } from "../../contexts/CitiesContext";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import CityItem from "./CityItem";
import styles from "./Citylist.module.css";

function Citylist() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first city by selecting city from map."} />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
  <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default Citylist;
