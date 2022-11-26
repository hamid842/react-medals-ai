import * as countryFlagIcons from "country-flag-icons";

const CountryCodeMenuItem = ({ country, countryAbbv, countryCode }) => {
  let icon = countryAbbv;
  if (countryFlagIcons.hasFlag(countryAbbv)) {
    icon = (
      <img
        style={{ width: "24px" }}
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryAbbv}.svg`}
        alt={`${country} flag`}
      />
    );
  }

  return (
    <>
      <div
        style={{ display: "inline-block" }}
        data-country-code={`+${countryCode}`}
        className={"flag"}
      >
        {icon}
        <div style={{ display: "inline-block", padding: "0px 5px" }}></div>
      </div>
      {/*       <div style={{ display: "inline-block", marginLeft: "10px" }}>
        +{countryCode}
      </div> */}
    </>
  );
};

export default CountryCodeMenuItem;
