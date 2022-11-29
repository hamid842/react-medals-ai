import {useState} from "react";
// material-ui
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {getTimeTables} from "@/api/get-time-tables-of-prescription";
// project imports
import TimeTable from "./TimeTable";
import Loading from "@/ui-component/Loading";

// ============================|| PRESCRIPTION ITEM ||============================ //

const PrescriptionItem = ({prescription}) => {
    const [expanded, setExpanded] = useState(false);
    const [timetables, setTimetables] = useState([]);
    const prescriptionTimeTables$ = getTimeTables(prescription?.id);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        prescriptionTimeTables$.subscribe({
            next: (data) => setTimetables(data),
            error: (err) => console.log(err),
            complete: () => console.log("time tables fetched  "),
        });
    };

    return (
        <div>
            <Accordion
                expanded={expanded === prescription?.id}
                onChange={handleChange(prescription?.id)}
                sx={{margin: 1}}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography sx={{width: "33%", flexShrink: 0}} variant={'subtitle1'}>
                        {prescription?.medicine?.brandName}
                    </Typography>
                    <Typography sx={{color: "text.secondary"}}>
                        {prescription?.usageDescription}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {timetables.length ? (
                        <TimeTable data={timetables}/>
                    ) : (
                        <Loading visible={timetables.length === 0}/>
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default PrescriptionItem;
