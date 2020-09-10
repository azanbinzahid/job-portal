import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { withRouter } from "react-router-dom";

const validationSchema = yup.object().shape({
  location: yup.array().min(1).of(yup.string()).required(),
});

const Filter = (props: any) => {
  const { handleSubmit, values, errors, setFieldValue } = useFormik({
    initialValues: {
      location: [""],
    },
    validationSchema,
    onSubmit(values) {
      let options = values.location;
      let q = "/jobs/?";
      for (var i = 0, l = options.length; i < l; i++) {
        if (i > 0) {
          q = q + "&location=" + options[i];
        } else {
          q = q + "location=" + options[i];
        }
      }

      props.history.push(q);
    },
  });

  const handleChange = (e: any) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    values.location = value;
    setFieldValue("Location", value);
  };

  return (
    <Container<React.ElementType> fluid align="center" className="pb-5">
      <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Form.Label>Example multiple select</Form.Label>
        <Form.Control
          as="select"
          multiple={true}
          name="Location"
          value={values.location}
          onChange={(e) => handleChange(e)}
        >
          <option value="Lahore">Lahore</option>
          <option value="Berlin">Berlin</option>
        </Form.Control>
        {errors.location}
        <Button variant="primary" type="submit">
          Filter
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Filter);
