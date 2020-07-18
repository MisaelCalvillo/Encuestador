import React from "react";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { colors } from '../../services';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <PuffLoader
          css={override}
          size="1rem"
          color={colors.white}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent;