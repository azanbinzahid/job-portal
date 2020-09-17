import React, { FC } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "app/common/TextField";
import { searchQuery } from "utils/helper";
import { withRouter, useLocation, RouteComponentProps } from "react-router-dom";

const validationSchema = yup.object().shape({
  search: yup.string().min(3),
});

const Search: FC<RouteComponentProps<any>> = (props) => {
  let params = useLocation().search.split("&");
  let qSearch = "";
  if (params) {
    for (let index = 0; index < params.length; index++) {
      const element = params[index];
      if (element.includes("search=")) {
        qSearch = element.slice(7);
        break;
      }
    }
  }
  let query = searchQuery(params, "search");

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      search: qSearch,
    },
    validationSchema,
    onSubmit(values) {
      let q = query + "&search=" + values.search;
      props.history.push(q);
    },
  });

  return (
    <Container<React.ElementType> className="pt-2 pb-2" align="center">
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Form.Row style={{ justifyContent: "space-between" }}>
          <Col xs={6} sm={7} lg={9}>
            <TextField
              type="text"
              name="search"
              placeholder="Search job title or keywords.."
              value={values.search}
              onChange={handleChange}
              error={errors.search}
            />
          </Col>
          <Col xs="auto">
            <Button variant="primary" type="submit" className="mr-1">
              Serach
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setFieldValue("search", "");
                props.history.push(query);
              }}
            >
              Clear
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default withRouter(Search);
