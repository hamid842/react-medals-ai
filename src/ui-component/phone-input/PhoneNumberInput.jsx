import { useCallback, useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import {
  AsYouType,
  getCountryCallingCode,
  parseIncompletePhoneNumber,
} from "libphonenumber-js";

import CountryCodeMenuItem from "./CountryCodeMenuItems";
import getPhoneData from "./phone-data";

const useAdornmentStyles = makeStyles({
  root: {
    marginTop: 23,
  },
});
const useSelectStyles = makeStyles({
  select: {
    marginTop: 10,
  },
});

const useMenuItemStyles = makeStyles({
  menuItem: {
    "& .flag::after": {
      content: "attr(data-country-code)",
    },
  },
  selected: {
    "& .flag::after": {
      content: "''",
    },
  },
});

const asYouType = new AsYouType("US");

const PhoneNumberInput = ({
  id,
  name,
  value,
  label,
  error,
  errors,
  selectedCountryOverride = "US", // init selectedCountry state
  onChange,
  onBlur,
}) => {
  const theme = useTheme();
  const [selectedCountry, setSelectedCountry] = useState(
    selectedCountryOverride
  );
  const [cursor, setCursor] = useState(null);
  const phoneRef = useRef();
  const adornmentClasses = useAdornmentStyles();
  const selectClasses = useSelectStyles();
  const menuItemClasses = useMenuItemStyles();

  const inputPhone = useCallback((phoneNumber) => {
    asYouType.reset();
    return asYouType.input(phoneNumber);
  }, []);

  if (asYouType?.getNumber()?.countryCallingCode === "1") {
    val = inputPhone(asYouType.getNationalNumber());
  }

  const selectionStart = phoneRef?.current?.selectionStart;
  const selectionEnd = phoneRef?.current?.selectionStart;

  useEffect(() => {
    //reset the cursor position for input
    if (
      (selectionStart && selectionEnd) ||
      (selectionStart === 0 && selectionEnd === 0)
    ) {
      phoneRef.current.selectionStart = cursor;
      phoneRef.current.selectionEnd = cursor;
    }
  }, [cursor, selectionStart, selectionEnd]);

  const getParsedPhoneNumber = useCallback(() => {
    let parsed;

    if (asYouType && asYouType.getNumber) {
      parsed = asYouType.getNumber();
    }
    return parsed;
  }, []);
  let val = new AsYouType(selectedCountry).input(
    parseIncompletePhoneNumber(value)
  );
  const getNewPhone = useCallback(
    (phone, newCountryCode) => {
      let newPhone = phone;
      const parsedPhone = getParsedPhoneNumber(value);

      if ((!parsedPhone || newPhone.trim() === "") && newCountryCode !== "1") {
        return `+${newCountryCode}`;
      } else if (!parsedPhone) {
        return newPhone;
      }

      newPhone =
        newCountryCode === "1"
          ? parsedPhone.nationalNumber
          : `+${newCountryCode}${parsedPhone.nationalNumber}`;

      return newPhone;
    },
    [getParsedPhoneNumber, value]
  );

  const countryCodeChanged = useCallback(
    (ev) => {
      const newCountry = ev.target.value;
      const code = getCountryCallingCode(newCountry);
      const newPhone = getNewPhone(value, code);

      if (newPhone !== value) {
        onChange(newPhone);
      }
      setSelectedCountry(newCountry);
    },
    [value, onChange]
  );

  const phoneNumberChanged = useCallback(
    (ev) => {
      setCursor(ev.target.selectionStart);
      const newPhone = parseIncompletePhoneNumber(ev.target.value);
      inputPhone(newPhone);
      const parsedPhone = getParsedPhoneNumber(value);

      onChange(parseIncompletePhoneNumber(ev.target.value));

      if (parsedPhone) {
        let newCountryCode = parsedPhone.country;
        if (parsedPhone.countryCallingCode === "44") {
          newCountryCode = "GB";
        } else if (parsedPhone.countryCallingCode === "1") {
          newCountryCode = "US";
        }
        setSelectedCountry(newCountryCode);
      }
    },
    [onChange, inputPhone, getParsedPhoneNumber, value]
  );

  const countryOptions = getPhoneData();

  const menuItems = Object.keys(countryOptions)?.map((k) => {
    const countryData = {
      ...countryOptions[k],
      countryAbbv: k,
    };

    return (
      <MenuItem value={k} key={k} className={menuItemClasses.menuItem}>
        <CountryCodeMenuItem {...countryData} />
      </MenuItem>
    );
  });

  return (
    <FormControl
      fullWidth
      error={error}
      sx={{ ...theme.typography.customInput }}
    >
      <InputLabel htmlFor={id} shrink>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={"tel"}
        size={"small"}
        value={val}
        name={name}
        onBlur={onBlur}
        onChange={phoneNumberChanged}
        startAdornment={
          <InputAdornment position="start" classes={adornmentClasses}>
            <Select
              fullWidth
              size="small"
              variant="standard"
              disableUnderline
              classes={selectClasses}
              value={selectedCountry}
              onChange={countryCodeChanged}
            >
              {menuItems}
            </Select>
          </InputAdornment>
        }
        inputProps={{
          ref: phoneRef,
        }}
      />
      {error && <FormHelperText error>{errors.userName}</FormHelperText>}
    </FormControl>
  );
};

export default PhoneNumberInput;
