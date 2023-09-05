// BASE URL
export const BASE_URL = "http://localhost:9000";

// date formater function
export const formatDate = (date) => {
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
};

export const flagemojiToPNG = (flag) => {
  let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");

  // return (
  //   <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  // );

  return countryCode;
};
