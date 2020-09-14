import React, { useState, useEffect, FC } from "react";
import Select from "react-select";
import { searchQuery, capitalize } from "utils/helper";
import { withRouter, useLocation, RouteComponentProps } from "react-router-dom";
interface Props extends RouteComponentProps<any> {
  filterName: String;
  options: { value: String; label: String }[];
  isMulti: boolean;
}

const Filter: FC<Props> = (props) => {
  const { filterName, options, isMulti, history } = props;
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptionSingle, setSelectedOptionSingle] = useState({
    value: "",
    label: "",
  });
  let params = useLocation().search.split("&");
  let query = searchQuery(params, filterName);

  useEffect(() => {
    let q = query;

    if (selectedOption && isMulti) {
      selectedOption.forEach((element: { value: String; label: String }) => {
        q = q + `&${filterName}=${element.value}`;
        history.push(q);
      });
    } else if (selectedOptionSingle && selectedOptionSingle.value !== "") {
      q = q + `&${filterName}=${selectedOptionSingle.value}`;
      history.push(q);
    }
  }, [selectedOption, selectedOptionSingle]);

  return isMulti ? (
    <div className="pb-5">
      <Select<any>
        isMulti
        label={filterName}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  ) : (
    <>
      <div className="pb-5">
        {capitalize(filterName)}
        <Select<any>
          isClearable
          label={filterName}
          defaultValue={selectedOptionSingle}
          value={selectedOptionSingle}
          onChange={setSelectedOptionSingle}
          options={options}
        />
      </div>
    </>
  );
};

export default withRouter(Filter);
