async function split(){
  console.log('Leaf - split')

  const SBFLeaf = require('../SBFLeaf');

  const parent = this.getParent();
  // console.log(parent.type === 'node' && parent.getParent())
  // console.log({parent})

  const adapter = parent.getAdapter();

  const newLeaf = new SBFLeaf({parent});

  // console.log(parent)
  // console.log(parent)
  // console.log(parent)
  // console.log(parent.getParent())
  await adapter.createLeaf(newLeaf.id);
  const midKey = await adapter.splitLeaf(this, newLeaf);

  const index = await parent.insertReferenceKey(midKey);

  await parent.attachLeaf(index+1,newLeaf);

};
module.exports = split;
