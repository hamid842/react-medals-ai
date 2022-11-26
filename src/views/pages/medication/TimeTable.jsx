import { useState } from "react";
// material-ui
import { useMediaQuery, Chip } from "@mui/material";
import { useTheme } from "@mui/styles";
import { IconAlertOctagon, IconChecks } from "@tabler/icons";
// third party
import dayjs from "dayjs";
// project imports
import RenderCell from "@/ui-component/RenderTableCell";
import AppTable from "@/ui-component/AppTable";

//=========================|| TIME TABLE ||=========================//

const TimeTable = ({ data }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  const renderTakenEnums = (title) => {
    if (title === "NOT_TAKEN") return "NOT Taken";
    if (title === "TAKEN") return "Taken";
  };
  const [state] = useState({
    columns: [
      {
        title: "Start",
        field: "startDatetime",
        align: "left",
        render: (rowData) => (
          <RenderCell cellTitle="Start:">
            {rowData.startDatetime ? (
              <span>
                {dayjs(rowData.startDatetime).format("YYYY-MM-DD HH:mm")}
              </span>
            ) : (
              <span />
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
            {rowData.endDateTime ? (
              <span>
                {dayjs(rowData.endDateTime).format("YYYY-MM-DD HH:mm")}
              </span>
            ) : (
              <span />
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
              label={renderTakenEnums(rowData.isTaken)}
              variant="outlined"
              color={rowData.isTaken === "TAKEN" ? "success" : "error"}
              icon={
                rowData.isTaken === "TAKEN" ? (
                  <IconChecks />
                ) : (
                  <IconAlertOctagon />
                )
              }
            />
          </RenderCell>
        ),
      },
    ],
  });
  return <AppTable data={data} xs={xs} columns={state.columns} />;
};

export default TimeTable;
