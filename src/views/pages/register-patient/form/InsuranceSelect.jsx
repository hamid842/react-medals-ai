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
    {label: "Kaiser Permanente", id: 1},
    {label: "Elevance Health (Anthem)", id: 2},
    {label: "HCSC (including BCBS plans)", id: 3},
    {label: "UnitedHealth Group", id: 4},
    {label: "Centene Corp.", id: 5},
    {label: " CVS Health Corp. (Aetna)", id: 6},
    {label: "GuideWell (Florida Blue)", id: 7},
    {label: "Blue Cross Blue Shield of Michigan", id: 8},
    {label: "Highmark", id: 9},
    {label: "Blue Cross of North Carolina", id: 10},
    {label: "Humana", id: 11},
    {label: "Blue Cross and Blue Shield of Alabama", id: 12},
    {label: "Blue Cross Blue Shield of Massachusetts", id: 13},
    {label: "Molina Healthcare", id: 14},
    {label: "Independence Health Group", id: 15},
    {label: "CareFirst", id: 16},
    {label: "Tufts Health", id: 17},
    {label: "Horizon Blue Cross Blue Shield of New Jersey", id: 18},
    {label: "Bright Health", id: 19},
    {label: "Blue Shield of California", id: 20},
    {label: "Oscar Insurance", id: 21},
    {label: "Regence", id: 22},
    {label: "Blue Cross Blue Shield of South Carolina", id: 23},
    {label: "Intermountain Healthcare", id: 24},
    {label: "Medica", id: 25},
    {label: "Priority Health", id: 26},
    {label: "Cigna Corp.", id: 27},
    {label: "Excellus Health", id: 28},
    {label: "Wellmark", id: 29},
    {label: "EmblemHealth", id: 30},
    {label: "Blue Cross & Blue Shield of Louisiana", id: 31},
    {label: "Premera Blue Cross", id: 32},
    {label: "BlueCross BlueShield of Tennessee", id: 33},
    {label: "UPMC Health Plan", id: 34},
    {label: "HealthPartners", id: 35},
    {label: "Hawaii Medical Service Assn.", id: 36},
    {label: "Arkansas BlueCross BlueShield", id: 37},
    {label: "Blue Cross & Blue Shield of Kansas City", id: 38},
    {label: "Medical Mutual of Ohio", id: 39},
    {label: "University Health Care", id: 40},
    {label: "First Medical Health Plan", id: 41},
    {label: "Blue Cross Blue Shield of Arizona", id: 42},
    {label: "Blue Cross and Blue Shield of Minnesota", id: 43},
    {label: "CareSource", id: 44},
    {label: "Blue Cross & Blue Shield of Mississippi", id: 45},
    {label: "MVP Health Care", id: 46},
    {label: "Capital Blue Cross", id: 47},
    {label: "Blue Cross of Idaho", id:48},
    {label: "PacificSource", id:49},
    {label: "Providence St. Joseph Health", id:50}

];
