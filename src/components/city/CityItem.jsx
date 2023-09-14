import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { flagemojiToPNG, formatDate } from "../../helper/helper";

const CitiesItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link to={`${id}`} className={styles.cityItem}>
        <img
          className={styles.emoji}
          src={`https://flagcdn.com/24x18/${flagemojiToPNG(emoji)}.png`}
          alt="flag"
        />
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times; </button>
      </Link>
    </li>
  );
};

export default CitiesItem;
