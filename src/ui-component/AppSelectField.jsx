// material-ui
import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ==============================|| App Field ||============================== //

const AppField = ({
  id,
  value,
  name,
  shrink,
  error,
  errors,
  label,
  onBlur,
  onChange,
  children,
}) => {
  const theme = useTheme();
  return (
    <FormControl
      fullWidth
      error={error}
      sx={{ ...theme.typography.customInput }}
    >
      <InputLabel id={"demo-simple-select"} shrink={shrink}>
        {label}
      </InputLabel>
      <Select
        sx={{ height: 60, marginTop: 1 }}
        labelId={"demo-simple-select"}
        id={id}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        autoWidth
        label={label}
        error={error}
        onBlur={onBlur}
      >
        {children}
      </Select>
      {error && <FormHelperText error>{errors.userName}</FormHelperText>}
    </FormControl>
  );
};
export default AppField;
