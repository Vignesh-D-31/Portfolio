
//linked this js to 1.html (at last)

//const objName = {key : value};

const obj = {
    name : ["DV","Sid","Maha"],
    BFF : true,
    degree :{
        PGd:"MSC",
        PGs:"MCA",
        UGm:"BCA"
    },
    YOF:4,
    action:function(){
        return `This is ${this.name[0]}`
    },
};

console.log(obj.degree.PGs)
console.log(obj.action())
console.log(obj["YOF"])
console.log(obj.BFF)

//inherting 'obj' object to new object 'obj1'

const obj1=Object.create(obj)
obj1.college="VIT"      // adding new property to obj1

obj1.action=function(){ return `This is ${this.name[1]}` }         // modifying properties of obj 
console.log(obj1.college)
console.log(obj1.action())

//inherting 'obj1' object to new object 'obj2'

const obj2=Object.create(obj1)
console.log(obj2.degree)     //can access obj which is inherited by obj1 
obj1.action=function(){ return `This is ${this.name[2]}` }        //modifying
console.log(obj1.action())


console.log(Object.keys(obj))  //printing only keys of object 'obj'

console.log(Object.values(obj))  //printing only values of object 'obj'

//iterating properties
const names={
    actor: "VJ",
    movie: "Nanban",
    dir: "Shankar",
    MDir: "ARR"
}
//for in loop
for ( let i in names){
    console.log(`${i} - ${names[i]}`)
}

delete names.MDir     //deleting property
console.log(names)

console.log(names.hasOwnProperty("MDir"))   //checking whether the property is there or not



//de-structuring objects

const {actor: favActor}=names     //creating a variable 'favAvtor' and storing value of 'actor' to it

const {dir: favDir, movie:favMovie}=names 
console.log(favActor,favDir,favMovie)

const {actor, dir, movie}=names       //making keys as a variable
console.log(movie)

function singer({actor}){       //calling key as a paramter 
    return `Singer : ${actor}`
}          
console.log(singer(names))     //takes only the paramter (key) from the whole object