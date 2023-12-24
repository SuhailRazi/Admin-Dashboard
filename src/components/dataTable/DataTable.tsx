import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import "./dataTable.scss";

const DataTable = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 150,
      renderCell: (params) => {
        return <img src={params.row.img || "./noavatar.png"} alt="" />; //Render function to return any html element
      },
    },
    {
      field: "status",
      headerName: "Status", // boolean value to show checkbox for true and false
      width: 150,
      type: "boolean",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <div className="view">View</div>
            <div className="delete">Delete</div>
          </div>
        );
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14, status: true },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 31,
      status: false,
    },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31, status: true },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11, status: false },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      status: true,
    },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150, status: true },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      status: false,
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      status: false,
    },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, status: true },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
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
