import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "app/common/TextField";
import { searchQuery } from "utils/helper";
import { withRouter, useLocation } from "react-router-dom";

const validationSchema = yup.object().shape({
  search: yup.string(),
});

const Search = (props: any) => {
  let params = useLocation().search.split("&");
  let query = searchQuery(params, "search");

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema,
    onSubmit(values) {
      let q = query + "&search=" + values.search;
      props.history.push(q);
    },
  });

  return (
    <Container<React.ElementType> fluid align="center" className="pb-5">
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <TextField
          type="text"
          name="search"
          placeholder="Search text, leave empty to serach all"
          value={values.search}
          onChange={handleChange}
          error={errors.search}
        />
        <Button variant="primary" type="submit">
          Search Jobs
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Search);
