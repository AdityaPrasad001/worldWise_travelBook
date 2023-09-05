import { flagemojiToPNG } from "../../helper/helper";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagcdn.com/24x18/${flagemojiToPNG(country.emoji)}.png`}
        alt="flag"
      />
      {/* <span>{flagemojiToPNG(country.emoji)}</span> */}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
