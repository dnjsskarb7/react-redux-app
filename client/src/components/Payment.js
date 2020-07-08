import React, { Component } from "react";
import PaymentStripe from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";
class Payment extends Component {
  render() {
    return (
      <PaymentStripe
        name="EMAILY"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default connect(null, { handleToken })(Payment);
