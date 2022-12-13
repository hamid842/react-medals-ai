import {Stack, Typography} from "@mui/material";
import {FileUploader} from "react-drag-drop-files";

const ActivityRecords = () => {
    return (
        <Stack direction={'column'} alignItems={"center"} justifyContent={"center"}
               sx={{border: "1px solid gray", borderRadius: 5, p: 2, m: 2}}>
            <Typography sx={{pb: 2}}>You can upload your medical documents here. Please click the button below or drag
                and drop
                file/s here </Typography>
            <FileUploader/>
        </Stack>
    )
}
export default ActivityRecords;