// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import {TextField} from "@mui/material";

// ==============================|| PHARMACY AUTOCOMPLETE ||============================== //

const PharmacySelect = ({error, value, errors, onBlur, onChange}) => {
    return (
        <Autocomplete
            id="pharmacy"
            options={pharmacies}
            sx={{marginTop: '10px'}}
            renderInput={(params) => <TextField
                {...params}
                label="Pharmacies"
                error={error}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />}
        />
    );
}

export default PharmacySelect;
const pharmacies = [
    {label: 'Amadeus', year: 1984},
    {label: 'To Kill a Mockingbird', year: 1962},
    {label: 'Toy Story 3', year: 2010},
    {label: 'Logan', year: 2017},
    {label: 'Full Metal Jacket', year: 1987},
    {label: 'Dangal', year: 2016},
    {label: 'The Sting', year: 1973},
    {label: '2001: A Space Odyssey', year: 1968},
    {label: "Singin' in the Rain", year: 1952},
    {label: 'Toy Story', year: 1995},
];
