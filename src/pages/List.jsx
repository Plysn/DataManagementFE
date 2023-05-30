import useListStore from "../zustand/store";
import { Table } from "antd";
import { Button, Modal } from "antd";
import { useState } from "react";

function List() {
  const { fetchListPhone, phones, setListPhone } = useListStore();
  const [open, setOpen] = useState(false);

  const columns = [
    { key: "name", title: "Name", dataIndex: "product_name" },
    {
      key: "detail",
      title: "Detail",
      render: (record) => {
        return <button className="button">Detail</button>;
      },
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add New Product
      </Button>
      <Modal
        title="Add New Product"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <form></form>
      </Modal>
      <Table columns={columns} dataSource={phones}></Table>
    </>
  );
}

export default List;
