import { Link } from "react-router-dom";
import { flagemojiToPNG, formatDate } from "../../helper/helper";
import styles from "./CityItem.module.css";
import { useCities } from "../../contexts/CitiesContext";

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id && styles["cityItem--active"]
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <img
          src={`https://flagcdn.com/24x18/${flagemojiToPNG(emoji)}.png`}
          alt="flag"
          className={styles.emoji}
        />
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
