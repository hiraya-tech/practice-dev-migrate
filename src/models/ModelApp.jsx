import { observable } from 'mobx';
import ModelMenu from './ModelMenu';

const ModelApp = observable({
    token: "",
    menuItems: [],
});

ModelApp.getToken = function() {
    return this.token;
}

ModelApp.getMenuItems = function() {
    return this.menuItems;
}

ModelApp.setToken = function(value) {
    this.token = value;
}

ModelApp.loadMenuItems = async function() {
    await this.menuItems.push(createMenuItem("m1", "Menu Item 1"));
    await this.menuItems.push(createMenuItem("m2", "Menu Item 2"));
    await this.menuItems.push(createMenuItem("m3", "Menu Item 3"));
    await this.menuItems.push(createMenuItem("m4", "Menu Item 4"));
}

function createMenuItem(code, desc) {
    const m = Object.assign({}, ModelMenu)
    m.setCode(code);
    m.setDesc(desc);
    return m;
}

export default ModelApp;