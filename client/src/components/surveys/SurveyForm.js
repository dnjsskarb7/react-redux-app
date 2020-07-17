// SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import validateEmails from "../surveysEmail/validateEmail";
import fieldsData from "./fieldsData";

class SurveyForm extends Component {
  renderFields() {
    return _.map(fieldsData, ({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          label={label}
          name={name}
          component={SurveyField}
        />
      );
    });
  }
  render() {
    // console.log("zzzzzzzzzzzzzzzzzz", this.props);
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="ui red button left floated">
            Cancel
          </Link>
          <button className="ui primary button right floated" type="submit">
            Next
            <i className="right chevron icon"></i>
          </button>
        </form>
      </div>
    );
  }
}
const validate = (values) => {
  const error = {};
  error.emails = validateEmails(values.emails || "");

  _.each(fieldsData, ({ name }) => {
    if (!values[name]) {
      error[name] = `You must provide a ${name}😒`;
    }
  });
  return error;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
