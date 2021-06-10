import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft'

export class App extends Component {
  render() {
    return (
      <div>
        <Row className="container">
          <Col span="4" className="nav-left">
            <NavLeft />
          </Col>
          <Col span="20" className="main">
            <Row className="content">
              {this.props.children}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App

