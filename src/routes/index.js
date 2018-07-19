import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TabBar } from "antd-mobile";
import HomeTabBar from '../screens/home'
import SecondTab from '../screens/SecondTab'
import ThirdTab from '../screens/ThirdTab'
import FourthTab from '../screens/FourthTab'
  
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default class BottomTab extends Component {
  renderContent = pageText => {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center"
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a
          style={{ display: "block", marginBottom: 600, color: "#108ee9" }}
          onClick={e => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }
  render() {
    const { history } = this.props;
    return (
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr /> */}
          
          <div
            style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}
          >
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              tabBarPosition="bottom"
            >
              <TabBar.Item
                title="Life"
                key="Life"
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                // selected={this.state.selectedTab === "blueTab"}
                badge={1}
                onPress={() => {
                  history.push('/')
                }}
                data-seed="logId"
              >
                {this.renderContent("Life")}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                title="Koubei"
                key="Koubei"
                badge={"new"}
                // selected={this.state.selectedTab === "redTab"}
                onPress={() => {
                  history.push('/secondTab')
                }}
                data-seed="logId1"
              >
                {this.renderContent("Koubei")}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                title="Friend"
                key="Friend"
                dot
                // selected={this.state.selectedTab === "greenTab"}
                onPress={() => {
                  history.push('/thirdTab')
                }}
              >
                {this.renderContent("Friend")}
              </TabBar.Item>
              <TabBar.Item
                icon={{
                  uri:
                    "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
                }}
                selectedIcon={{
                  uri:
                    "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
                }}
                title="My"
                key="my"
                // selected={this.state.selectedTab === "yellowTab"}
                onPress={() => {
                  history.push('/fourthTab')
                }}
              >
                {this.renderContent("My")}
              </TabBar.Item>
            </TabBar>
          </div>
          <Route exact path="/" component={HomeTabBar} />
          <Route path="/secondTab" component={SecondTab} />
          <Route path="/thirdTab" component={ThirdTab} />
          <Route path="/fourthTab" component={FourthTab} />
        </div>
      </Router>
    )
  }
}
