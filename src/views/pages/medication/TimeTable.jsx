import {useState} from "react";
// material-ui
import {Chip, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/styles";
import {IconAlertOctagon, IconChecks} from "@tabler/icons";
// third party
import dayjs from "dayjs";
// project imports
import RenderCell from "@/ui-component/RenderTableCell";
import MaterialTable from "material-table";

//=========================|| TIME TABLE ||=========================//

const TimeTable = ({data}) => {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down("sm"));

    const renderTakenEnums = (title) => {
        if (title === "NOT_TAKEN") return "NOT Taken";
        if (title === "TAKEN") return "Taken";
        if (title === "MISSED") return "Missed";
    };
    const [state] = useState({
        columns: [
            {
                title: "Start",
                field: "startDatetime",
                align: "left",
                render: (rowData) => (
                    <RenderCell cellTitle="Start:">
                        {rowData?.startDatetime ? (
                            <span>
                {dayjs(rowData?.startDatetime).format("YYYY-MM-DD HH:mm")}
              </span>
                        ) : (
                            <span/>
                        )}
                    </RenderCell>
                ),
            },
            {
                title: "End",
                field: "endDateTime",
                align: "left",
                render: (rowData) => (
                    <RenderCell cellTitle="Date:">
                        {rowData?.endDateTime ? (
                            <span>
                {dayjs(rowData?.endDateTime).format("YYYY-MM-DD HH:mm")}
              </span>
                        ) : (
                            <span/>
                        )}
                    </RenderCell>
                ),
            },
            {
                title: "Is Taken",
                field: "isTaken",
                align: "left",
                render: (rowData) => (
                    <RenderCell cellTitle="Is Taken:">
                        <Chip
                            label={renderTakenEnums(rowData?.isTaken)}
                            variant="outlined"
                            color={rowData?.isTaken === "TAKEN" ? "success" : "error"}
                            icon={
                                rowData?.isTaken === "TAKEN" ? (
                                    <IconChecks/>
                                ) : (
                                    <IconAlertOctagon/>
                                )
                            }
                        />
                    </RenderCell>
                ),
            },
        ],
    });
    return <MaterialTable
        columns={state.columns}
        options={{
            headerStyle: xs
                ? {
                    background: "#F8F9F9",
                    fontWeight: "bold",
                    display: "none",
                }
                : {},
            rowStyle: xs
                ? {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                }
                : {},
            emptyRowsWhenPaging: false,
            pageSize: 10,
            pageSizeOptions: [10, 20, 30],
            toolbar: false,
            search: false,
            paging: false,
            sorting: true,
            detailPanelColumnAlignment: xs ? "right" : "left",
        }}
        data={data}
    />;
};

export default TimeTable;
