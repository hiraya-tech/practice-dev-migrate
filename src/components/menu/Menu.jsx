import React from 'react';
import { observer } from "mobx-react";

import "./Menu.css";

export default observer(
    class Menu extends React.Component {
        render() {
            return (
                <div className="menu">
                    {
                        this.props.menuItems.map((item, index) => {
                            return <div key={index}>{item.getCode()} - {item.getDesc()}</div>
                        })
                    }
                </div>
            )
        }
    }
);