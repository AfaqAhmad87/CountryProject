import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data1, setdata] = useState([]);
  let id = 1;
  const navigate = useNavigate();
  function nav(dataIndex) {
    navigate(`/home/${dataIndex?.population}`, {
      state: { object: dataIndex },
    });
  }

  const columns = [
    {
      key: "capital",
      title: "area",
      dataIndex: "area",
    },
    {
      key: "2",
      title: "capital",
      dataIndex: "capital",
      render: (item, record) => {
        return <span>{record?.capital}</span>;
      },
    },
    {
      key: "3",
      title: "flags",
      dataIndex: "flags",
      render: (item, record) => {
        return (
          <span>
            <img src={record?.flags?.png} alt="" />
          </span>
        );
      },
    },
    {
      key: "4",
      title: "continents",
      dataIndex: "continents",
      render: (item, record) => {
        return <span>{item}</span>;
      },
    },
    {
      // key: "5",
      // title: "AUD",
      // dataIndex: "currencies",
      // render: (item, record) => {
      //   return <span>{record?.currencies?.AUD?.name}</span>;
      // },
    },
    {
      key: "6",
      title: "Population",
      dataIndex: "population",
    },
    {
      key: "7",
      title: "Actions",
      dataIndex: "population",
      render: (items, record) => (
        <Button onClick={() => nav(record)}>Details</Button>
      ),
    },
  ];

  const func = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setdata(res?.data);
      console.log(res);
    });
  };
  useEffect(() => {
    func();
  }, []);
  console.log(data1);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Here is A Table</h1>
      <Table dataSource={data1} columns={columns} />
    </div>
  );
}
