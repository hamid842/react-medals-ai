import MaterialTable from "material-table";

// ============================< APP TABLE >============================ //

const AppTable = ({xs, columns, data = []}) => {
    return (
        <MaterialTable
            columns={columns}
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
                toolbar:false,
                search: false,
                paging:false,
                sorting: true,
                detailPanelColumnAlignment: xs ? "right" : "left",
            }}
            data={data}
        />
    );
};

export default AppTable;
