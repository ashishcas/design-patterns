// useful to work on the complex objects which have tree like complex structure 
// and to have a common interface to work on the objects

// ex: consider a box having the different products inside it and need to calulate the total price of the box
// main component - children - leafs


const component = function(name){
        this.children = [];
        this.name = name;

        this.addChildren = function ( child ){
            this.children.push(child);
        }

        this.removeChildren = function ( child ){
           for(let i =0;i<this.children.length;i++){
               if(this.children[i] === child){
                   this.children.splice(i,1);
                   break;
               }
           }
        }

        this.getChildren = function(i){
            // console.log(this.children[i]);
            return this.children[i];
        }

        this.hasChildren =  function(){
            return this.children.length > 0;
        }
}


function traverse(indent,component){
    // console.log(component);
    console.log(Array(indent++).join("--") + component?.name);

    for(let i = 0;i< component?.children?.length; i++){
        traverse(indent, component.getChildren(i));
    }
}

const tree = new component('root');
const left = new component("left")
const right = new component("right");
const leftleft = new component("leftleft");
const leftright = new component("leftright");
const rightleft = new component("rightleft");
const rightright = new component("rightright");


tree.addChildren(left);
tree.addChildren(right);
tree.removeChildren(right);
tree.addChildren(right);


tree.addChildren(leftleft);
tree.addChildren(leftright);
tree.addChildren(rightleft);
tree.addChildren(rightright);

traverse(1,tree);

// console.log(tree.getChildren(2));
