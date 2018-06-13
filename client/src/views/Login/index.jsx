import React from 'react';
import {Row, Col, Grid} from 'react-flexbox-grid';
import gitlabLogo from './logo-extra-whitespace.svg';
import request from 'superagent';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: undefined,
      provider: undefined
    }
  }

  componentDidMount() {
    request
      .get('/api/v1/auth/provider')
      .end((err, res) => {
        if(err) {
          this.setState({error: err, provider: undefined});
        }
        this.setState({provider: res.body.provider});
    });
  }

  render() {
    if(this.state.error) {
      return (
        <Grid>
          <Row center="xs">
            <Col>
              <h2>Error: {this.state.error}</h2>
            </Col>
          </Row>
        </Grid>
      )
    }

    if(!this.state.provider) {
      return (
        <Grid>
          <Row center="xs">
            <Col>
              <h2>{'OOPS..!, This feature is disabled or not supported, try later'}</h2>
            </Col>
          </Row>
        </Grid>
      )
    }

    return (
      <Grid>
      <Row center="xs">
          <Col>
            <h2>Welcome to Hobbes</h2>
          </Col>
        </Row>
        <Row center="xs">
          <Col>
            Login to Continue
          </Col>
        </Row>
        <Row center="xs">
          <Col>
            <a href={"/api/v1/auth/cadet/" + this.state.provider}>
              <img src={gitlabLogo} alt="Gitlab Logo" width="100" height="100" />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}
