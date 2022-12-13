// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

// ==============================|| PHARMACY AUTOCOMPLETE ||============================== //

const PharmacySelect = ({error, value, errors, onBlur, onChange}) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        axios(import.meta.env.VITE_GET_ALL_PHARMACIES_API).then(res => {
            setOptions(res.data)
        }).catch(err => console.log(err))
    }, [])
    return (
        <Autocomplete
            id="pharmacy"
            autoHighlight
            filterOptions={(options) => options}
            noOptionsText={"Not found!"}
            options={options}
            sx={{marginTop: '10px'}}
            getOptionLabel={(option) => option.name || option}
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
