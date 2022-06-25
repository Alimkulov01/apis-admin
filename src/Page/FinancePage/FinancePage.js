import { CopyIcon, DeleteIcon, EditIcon, MessageIcon, ShareIcon } from '../../assets/icons'
import {Graph} from '../../container/Graph/index.js';
import { DatePicker, Table } from "antd";
import moment from "moment";
import './finance.scss'

const FinancePage =()=>{
	const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const columns = [
    {
      title: "№",
      dataIndex: "key",
    },
    {
      title: "F.I.O",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Yaratilgan",
      dataIndex: "created_date",
    },
    {
      title: "To`lov turi",
      dataIndex: "payment",
    },
    {
      title: "Summa",
      dataIndex: "total",
    },
    {
      title: "action",
      dataIndex: "action",
	 render: (text) => <a>{text}</a>,

    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      created_date: 32,
      payment: "Naqd pul",
      total: "300 000 UZS",
      action: "action",
    },
    {
      key: "2",
      name: "Jim Green",
      created_date: 42,
      payment: "Naqd pul",
      total: "300 000 UZS",
      action: "action",
    },
    {
      key: "3",
      name: "Joe Black",
      created_date: 32,
      payment: "Naqd pul",
      total: "300 000 UZS",
      action: "action",
    },
    {
      key: "4",
      name: "Disabled User",
      created_date: 99,
      payment: "Naqd pul",
      total: "300 000 UZS",
      action: "action",
    },
  ]; 
	return (
    <div className="finance">
      <div className="subHeader">
        <div className="dFlex">
          <button className="tabber active">Daromad</button>
          <button className="tabber">Xarajatlar</button>
          <button className="tabber">To`lovlar</button>
        </div>
        <div className="dFlex">
          <button className="button secondary">
            <CopyIcon />
          </button>
          <button className="button secondary">
            <MessageIcon />
          </button>
          <button className="button secondary">
            <ShareIcon />
          </button>
          <button className="button secondary">
            <EditIcon />
          </button>
          <button className="button secondary">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="chart">
          <Graph />
        </div>
        <div className="date">
          <div>
            <span className="date-title mb">
              Davr uchun tushimlar. 2021 dec
            </span>
            <div className="date-picker">
              <div>
                <p className="heading">Date from</p>

                <DatePicker
                  defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
                  format={["DD/MM/YYYY", "DD/MM/YY"]}
                />
              </div>
              <div>
                <p className="heading">Date to</p>
                <DatePicker
                  defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
                  format={["DD/MM/YYYY", "DD/MM/YY"]}
                />
              </div>
              <button className="save">Save</button>
            </div>
          </div>
          <div>
            <span className="date-title">
              Davir uchun tushimlar: 154 654 340 UZS
            </span>
            <span className="date-title">
              O’quvchilar hisobi bo’yicha jami: 123 450 420 UZS
            </span>
          </div>
        </div>
      </div>
      <div className="table">
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
	
}

export default FinancePage