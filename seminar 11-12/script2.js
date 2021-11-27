//задание 1
var city1=new Object();
city1.name = "CityN";
city1.population = "10млн";


//задание 2
let city2 = {
    name:"CityM",
    population:"10млн"
}


//задание 3
city1.getName = function (){
    return this.name
}


//console.log(city1.getName())


city2.getName = function (){
    return this.name
}


//console.log(city2.getName())


//задание 4
city1.exportStr = function(){
    let name = this.name;
    let population = this.population;
    let information = "name: " + name + ", population: " + population + "\n";
    return information;
}

city2.exportStr = function(){
    let name = this.name;
    let population = this.population;
    let information = "name: " + name + ", population: " + population + "\n";
    return information;
}


//console.log(city1.exportStr());
//console.log(city2.exportStr());


//задание 5
function GetObj(){
    return this;
}

city1.getCity = GetObj;
city2.getCity = GetObj;


//console.log(city1.getCity().getName())
//console.log(city2.getCity().population)


//задание 6
let obj = new Object()
obj.Method1= function (){return this}
obj.Method2= function (){return this}
obj.Method3= function (){console.log("Строка 3")}

obj.Method1().Method2().Method3()


