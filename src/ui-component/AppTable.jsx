import { forwardRef } from "react";
// third party
import MaterialTable, { MTableEditRow } from "material-table";
// material-ui
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

const theme = createTheme();
const useStyles = makeStyles({
  [theme.breakpoints.down("sm")]: {
    "@global tbody tr:nth-child(odd)": {
      background: "lightgray",
    },
    "@global tbody tr:nth-child(even)": {
      background: "white",
    },
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

// ============================< APP TABLE >============================ //

const AppTable = (props) => {
  const classes = useStyles();
  const tableIcons = {
    Add: forwardRef((props, ref) => (
      <AddBoxIcon
        {...props}
        ref={ref}
        color="primary"
        style={{ width: 35, height: 35 }}
      />
    )),
    Edit: forwardRef((props, ref) => (
      <EditIcon {...props} ref={ref} color="primary" />
    )),
    Delete: forwardRef((props, ref) => (
      <DeleteOutlineIcon {...props} ref={ref} color="error" />
    )),
    Check: forwardRef((props, ref) => (
      <DoneIcon {...props} ref={ref} style={{ color: "green" }} />
    )),
    Clear: forwardRef((props, ref) => (
      <CloseIcon {...props} ref={ref} color="secondary" />
    )),
  };
  const {
    xs,
    title,
    columns,
    tableRef,
    localization,
    actions,
    data = [],
    editable,
    actionsColumnIndex = -1,
    toolbar,
    paging,
    showEmptyDataSourceMessage,
    detailPanel,
    style,
    onRowClick,
  } = props;

  return (
    <MaterialTable
      title={title}
      style={style}
      columns={columns}
      tableRef={tableRef}
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
        toolbar,
        actionsColumnIndex,
        search: false,
        paging,
        sorting: true,
        showEmptyDataSourceMessage,
        detailPanelColumnAlignment: xs ? "right" : "left",
      }}
      localization={localization}
      actions={actions}
      editable={editable}
      icons={tableIcons}
      data={data}
      detailPanel={detailPanel}
      components={{
        EditRow: (props) => {
          return (
            <MTableEditRow {...props} className={xs ? classes.tableCell : ""} />
          );
        },
      }}
      onRowClick={onRowClick}
    />
  );
};

export default AppTable;
