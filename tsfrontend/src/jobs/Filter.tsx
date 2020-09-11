import React, { useState, useEffect } from "react";
import Select from "react-select";
import { searchQuery } from "utils/helper";
import { withRouter, useLocation } from "react-router-dom";

const options = [
  { value: "Lahore", label: "Lahore" },
  { value: "Berlin", label: "Berlin" },
  { value: "Karachi", label: "Karachi" },
];

const filterName = "location";

const Filter = (props: any) => {
  const [selectedOption, setSelectedOption] = useState([]);
  let params = useLocation().search.split("&");
  let query = searchQuery(params, filterName);

  useEffect(() => {
    let q = query;
    if (selectedOption) {
      selectedOption.forEach((element: any) => {
        q = q + `&${filterName}=${element.value}`;
      });
    }
    props.history.push(q);
  }, [selectedOption]);

  return (
    <div className="pb-5">
      <Select<any>
        isMulti
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default withRouter(Filter);
