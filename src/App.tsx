import React from "react";
import DataGrid, { Column } from "devextreme-react/data-grid";

const App = () => {
  const products = [
    { ID: 1, Name: "Sản phẩm A", Price: 1000 },
    { ID: 2, Name: "Sản phẩm B", Price: 2000 },
    { ID: 3, Name: "Sản phẩm C", Price: 3000 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Demo DevExtreme DataGrid</h1>
      <DataGrid dataSource={products} showBorders={true}>
        <Column dataField="ID" caption="Mã SP" width={90} />
        <Column dataField="Name" caption="Tên Sản phẩm" />
        <Column dataField="Price" caption="Giá" format="currency" />
      </DataGrid>
    </div>
  );
};

export default App;
