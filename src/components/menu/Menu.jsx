import React from 'react';
import { observer } from "mobx-react";

import "./Menu.css";

export default observer(
    class Menu extends React.Component {
        render() {
            console.log(this.props.menuItems);
            return (
                <div className="menu">
                    Menu
                    {
                        this.props.menuItems.map(item => {
                            <div>{item.code} - {item.code}</div>
                        })
                    }
                </div>
            )
        }
    }
);