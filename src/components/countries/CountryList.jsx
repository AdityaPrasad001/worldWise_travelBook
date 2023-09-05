import { useCities } from "../../contexts/CitiesContext";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

function CountryList() {
  const { cities, isLoading } = useCities();

  // const countries = cities.filter((city) => );
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first city by selecting city from map."} />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
