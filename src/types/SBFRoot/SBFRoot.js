const {insertSorted} = require('../../utils/array');
const {comparatorString, comparatorNum} = require('../../utils/comparators')


/**
 * SBFRoot
 *
 */
class SBFRoot {
  #tree;

  constructor(props) {
    if (!props.tree) {
      throw new Error(`SBFRoot is initialized without any tree referenced`);
    }
    this.#tree = props.tree;
    this.keys = (props.keys) ? props.keys : [];
    this.childrens = (props.childrens) ? props.childrens : [];
  }

  getTree() {
    return (this.#tree);
  }
};
SBFRoot.prototype.attachLeaf = require('./methods/attachLeaf')
SBFRoot.prototype.find = require('./methods/find')
SBFRoot.prototype.get = require('./methods/get')
SBFRoot.prototype.getAdapter = require('./methods/getAdapter')
SBFRoot.prototype.getTreeOptions = require('./methods/getTreeOptions')
SBFRoot.prototype.insert = require('./methods/insert')
SBFRoot.prototype.insertReferenceKey = require('./methods/insertReferenceKey')
SBFRoot.prototype.isFull = require('./methods/isFull')
SBFRoot.prototype.split = require('./methods/split')
module.exports = SBFRoot;