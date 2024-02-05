import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

function Sidepage() {
  const columns = [
    {
      key: "a",
      title: "area",
      dataIndex: "area",
    },
    {
      key: "b",
      title: "area",
      dataIndex: "area",
    },
    {
      key: "c",
      title: "area",
      dataIndex: "area",
    },
  ];
  const [state, setstate] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setstate(location.state);
  }, []);
  console.log(state);

  return (
    <div id="table">
      <tr>
        <td>{state?.object?.area}</td>
        <td>{state?.object?.population}</td>
        <td>{state?.object?.capital}</td>
        <td>{state?.object?.region}</td>
        <td>
          <img src={state?.object?.flags?.png} alt="" />
        </td>
      </tr>
      <tr>
        <td>{state?.object?.continents}</td>
        <td>{state?.object?.subregions}</td>
        <td>{state?.object?.timezones}</td>
        <td>{state?.object?.postalCode?.format}</td>
      </tr>
    </div>
  );
}

export default Sidepage;
