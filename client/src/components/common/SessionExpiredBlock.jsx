import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Link} from 'react-router';

export default class SessionExpiredBlock extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      errorMsgPlaceHolder : {
        fontSize: "20px",
        margin: "10px auto auto 5px",
        padding: "50px",
        height: "100%",
        background: "#f7f7f7",
        color: "#ff0000",
        borderRadius: "3px"
      }
    };
  }

  render() {
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12}>
            <div style={this.styles.errorMsgPlaceHolder}>
              Session expired or you are not authenticated, please <Link to={"/logout/"}>login</Link> to continue.
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
