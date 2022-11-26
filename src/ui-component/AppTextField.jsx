// material-ui
import {FormControl, FormHelperText, InputLabel, OutlinedInput,} from "@mui/material";
import {useTheme} from "@mui/material/styles";

// ==============================|| App Field ||============================== //

const AppField = ({
                      id,
                      value,
                      name,
                      shrink,
                      type = "text",
                      error,
                      errors,
                      label,
                      onBlur,
                      onChange,
                      startAdornment,
                      color,
                      endAdornment
                  }) => {
    const theme = useTheme();
    return (
        <FormControl
            fullWidth
            error={error}
            sx={{...theme.typography.customInput}}
                color={color}
        >
            <InputLabel htmlFor={id} shrink={shrink}>
                {label}
            </InputLabel>
            <OutlinedInput
                id={id}
                type={type}
                size={"small"}
                value={value}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
            />
            {error && <FormHelperText error>{errors.userName}</FormHelperText>}
        </FormControl>
    );
};
export default AppField;
