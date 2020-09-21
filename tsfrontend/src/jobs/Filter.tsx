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
  let params = useLocation().search.split("&");
  let query = searchQuery(params, filterName);

  let qFilter = { value: "", label: "" };
  if (params) {
    for (let index = 0; index < params.length; index++) {
      const element = params[index];
      if (element.includes(filterName + "=")) {
        qFilter.value = unescape(element.slice(filterName.length + 1));
        qFilter.label = unescape(element.slice(filterName.length + 1));
        break;
      }
    }
  }

  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptionSingle, setSelectedOptionSingle] = useState(qFilter);

  useEffect(() => {
    let q = query;

    if (selectedOption && isMulti) {
      selectedOption.forEach((element: { value: String; label: String }) => {
        q = q + `&${filterName}=${element.value}`;
      });
    } else if (selectedOptionSingle && selectedOptionSingle.value !== "") {
      q = q + `&${filterName}=${selectedOptionSingle.value}`;
    }
    history.push(q);
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
