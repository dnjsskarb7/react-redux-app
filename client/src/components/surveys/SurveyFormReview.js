import React from "react";
import { connect } from "react-redux";
import fieldsData from "./fieldsData";
import _ from "lodash";
import { submitSurveys } from "../../actions/index";
import { withRouter } from "react-router-dom";
const SurveyFormReview = ({ onGoBack, formValues, submitSurveys, history }) => {
  const renderFields = () => {
    return _.map(fieldsData, ({ name, label }) => {
      return (
        <div key={name}>
          <label className="ui header">{label}</label>
          <div className="sub header">{formValues[name]}</div>
        </div>
      );
    });
  };
  return (
    <div className="ui center aligned">
      <h5> Please confirm your entries</h5>
      {renderFields()}
      <button className="ui button left floated" onClick={onGoBack}>
        Back
      </button>
      <button
        onClick={() => submitSurveys(formValues, history)}
        className="ui primary button right floated"
      >
        Send
        <i className="right paper plane outline icon"></i>
      </button>
    </div>
  );
};

const mapStateToProps = ({
  form: {
    surveyForm: { values },
  },
}) => {
  return {
    formValues: values,
  };
};

export default connect(mapStateToProps, { submitSurveys })(
  withRouter(SurveyFormReview)
);
