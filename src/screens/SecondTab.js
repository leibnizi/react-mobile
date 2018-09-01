import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

export default class SecondTab extends Component {
  tabs = [{ title: 'First Tab' }, { title: 'Second Tab' }, { title: 'Third Tab' }];
  renderTabBar = props => {
    return (
      <Sticky>
        {({ style }) => (
          <div style={{ ...style, zIndex: 1 }}>
            <Tabs.DefaultTabBar {...props} />
          </div>
        )}
      </Sticky>
    );
  };
  ScrollTab = () => (
    <div>
      <StickyContainer>
        <Tabs tabs={this.tabs} initalPage={'t2'} renderTabBar={this.renderTabBar}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff',
            }}
          >
            Content of first tab
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff',
            }}
          >
            Content of second tab
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              backgroundColor: '#fff',
            }}
          >
            Content of third tab
          </div>
        </Tabs>
      </StickyContainer>
    </div>
  );
  render() {
    return <div>{this.ScrollTab()}</div>;
  }
}
