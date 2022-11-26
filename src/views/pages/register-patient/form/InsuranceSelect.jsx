// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import {TextField} from "@mui/material";

// ============================|| INSURANCE SELECT FIELD ||============================ //

const InsuranceSelect = ({error, value, errors, onBlur, onChange}) => {
    return (
        <Autocomplete
            id="insurance"
            options={top100Films}
            sx={{marginTop: '10px'}}
            renderInput={(params) => <TextField
                {...params}
                label="Insurance"
                error={error}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />}
        />
    );
}

export default InsuranceSelect;
const top100Films = [
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
    {label: 'Bicycle Thieves', year: 1948},
    {label: 'The Kid', year: 1921},
    {label: 'Inglourious Basterds', year: 2009},
    {label: 'Snatch', year: 2000},
    {label: '3 Idiots', year: 2009},
    {label: 'Monty Python and the Holy Grail', year: 1975},
];
