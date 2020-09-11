import React, { useState, useEffect, FC } from "react";
import Select from "react-select";
import { searchQuery } from "utils/helper";
import { withRouter, useLocation, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<any> {
  filterName: String;
  options: { value: String; label: String }[];
}

const Filter: FC<Props> = (props) => {
  const { filterName, options } = props;
  const [selectedOption, setSelectedOption] = useState([]);
  let params = useLocation().search.split("&");
  let query = searchQuery(params, filterName);

  useEffect(() => {
    let q = query;
    if (selectedOption) {
      selectedOption.forEach((element: { value: String; label: String }) => {
        q = q + `&${filterName}=${element.value}`;
      });
    }
    props.history.push(q);
  }, [selectedOption]);

  return (
    <div className="pb-5">
      <Select<any>
        isMulti
        label={filterName}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default withRouter(Filter);
