import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";

type Props = {
  columns: GridColDef[];
  rows: object[];
};

const DataTable = (props: Props) => {
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }} //Folter options abouve data
        slotProps={{
          toolbar: {
            showQuickFilter: true, //For search bar
            quickFilterProps: { debounceMs: 500 }, //delay for searching
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
