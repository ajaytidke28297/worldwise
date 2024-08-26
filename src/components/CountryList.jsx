import React from "react";

import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first Countries by clicking on a Countries on the map" />
    );

  const countries = cities.reduce(
    (arr, city) =>
      !arr.map((el) => el.country).includes(city.country)
        ? [...arr, { country: city.country, emoji: city.emoji }]
        : arr,
    []
  );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
