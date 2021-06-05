import { observable } from 'mobx';

const ModelMenu = observable({
  code: "",
  desc: ""
});

ModelMenu.getCode = function() {
  return this.code;
}

ModelMenu.setCode = function(code) {
  this.code = code;
}

ModelMenu.getDesc = function() {
  return this.desc;
}

ModelMenu.setDesc = function(desc) {
  this.desc = desc;
}

ModelMenu.createMenuItem = function(code, desc) {
  const item = new ModelMenu();
  item.setCode(code);
  item.setDesc(desc);
  return item;
}

export default ModelMenu;