import * as React from "react";
import useGoogleSheets from "use-google-sheets";
import { Column } from "../../Types";
import Table from "../Table/Table";

const Sheet = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: typeof import.meta.env.VITE_GOOGLE_API_KEY === "string" ? import.meta.env.VITE_GOOGLE_API_KEY : "",
    sheetId: typeof import.meta.env.VITE_GOOGLE_SHEETS_ID === "string" ? import.meta.env.VITE_GOOGLE_SHEETS_ID : "",
    sheetsNames: ["Hoja 1"],
  });

  function getColumns(data: object[]) {
    let result: Column[] = [];
    Object.keys(data[0]).forEach((column) => {
      result.push({ Header: column, accessor: column });
    });
    return result;
  }

  if (loading) return <div>Loading...</div>;
  else if (error) return <div>Error!</div>;
  else if (data)
    return (
      <div>
        <h2>{data[0]?.id}</h2>
        <Table columns={getColumns(data[0].data)} data={data[0].data} />
      </div>
    );
  else return null;
};

export default Sheet;
