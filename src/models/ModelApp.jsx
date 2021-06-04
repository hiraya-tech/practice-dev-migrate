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
    let m1 = Object.assign(ModelMenu)
    m1.setCode("m1");
    m1.setDesc("Menu Item 1");
    await this.menuItems.push(m1);
}

export default ModelApp;