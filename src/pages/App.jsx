import React from 'react';
import { observer } from "mobx-react";

import Menu from '../components/menu/Menu'

import './App.css';

export default observer(
  class App extends React.Component {
    async componentDidMount() {
        await this.props.model.loadMenuItems();
    }

    render() {
      const menuItems = this.props.model.getMenuItems();
      
      return (
        <div className="app">
          <Menu menuItems={menuItems} />
          <div className="app-content">
            Test
          </div>
        </div>
      );  
    }
  }
);