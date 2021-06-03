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
    await this.menuItems.push(ModelMenu.createMenuItem("a", "Menu Item A"));
}

export default ModelApp;