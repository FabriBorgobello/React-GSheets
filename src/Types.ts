export interface Header {
  Header: string;
  columns: void;
}
export interface Column {
  Header: string;
  accessor: string;
}
export interface Row {
  firstName: string;
  lastName: string;
  age: number;
}
