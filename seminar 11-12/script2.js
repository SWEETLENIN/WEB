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


console.log(city1.getName())


city2.getName = function (){
    return this.name
}


console.log(city2.getName())


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


console.log(city1.exportStr());
console.log(city2.exportStr());


//задание 5
function GetObj(){
    return this;
}

city1.getCity = GetObj;
city2.getCity = GetObj;


console.log(city1.getCity().getName())
console.log(city2.getCity().population)


//задание 6
let obj = new Object()
obj.Method1= function (){return this}
obj.Method2= function (){return this}
obj.Method3= function (){console.log("Строка 3")}

obj.Method1().Method2().Method3()


//Задание 7
let d1 = ['45', '78', '10', '3']

d1[7] = '100';
console.log(d1)

//Задание 8
var d2 = [45, 78, 10, 3];
sum2 = 0;
for (let i = 0; i < d2.length; i++){
    sum2 += d2[i]
}

console.log(sum2)

//Задание 9
var d3 = [45, 78, 10, 3];
d3[4] = 100;
sum3 = 0;
for(let i = 0; i <d3.length; i++){
    sum3 += d3[i]
}
console.log(sum3)

//Задание 10
var d4 = [45, 78, 10, 3];
function my(a,b){
    return a - b;
}
d4.sort(my);
console.log(d4);

//Задание 11
function array_to_crt(num) {
    let d5 = [];
    for(i=0; i<3; i++) {
        d5[i] = [];
        for(j=0; j<4; j++) {
            d5[i][j] = num;
        }
    }
}
array_to_crt(5)


//Задание 12
class Vector {
    constructor(x, y) {
      this.x = x
      this.y = y
    }

    plus(point) {
      return new Vector(this.x + point.x, this.y + point.y)
    }

    minus(point) {
      return new Vector(this.x - point.x, this.y - point.y)
    }

    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

//Задание 13
function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}
/*вывод таблицы*/
function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function UnderlinedCell(inner) {
    this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};

function RTextCell(text) {
    TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            var value = row[name];
            // This was changed:
            if (typeof value == "number")
                return new RTextCell(String(value));
            else
                return new TextCell(String(value));
        });
    });
    return [headers].concat(body);
}
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log('Задание 13')
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

//Задание 14
function ArraySeq(data) {
    this.position = -1;
    this.data = data;
}

function logFive(seq) {
    for (var i = 0; i < 5; i++) {
      if (!seq.next()) {
        break;
      }
      console.log(seq.curr()); 
    }
}

ArraySeq.prototype.next = function () {
    if (this.position >= this.data.length - 1) {
      return false;
    }
    this.position++;
    return true;
}

ArraySeq.prototype.curr = function () {
    return this.data[this.position];
} 

function RangeSeq(from, to) {
    this.position = from - 1;
    this.to = to;
}

RangeSeq.prototype.next = function () {
    if (this.position >= this.to) {
      return false;
    }
    this.position++;
    return true;
}

RangeSeq.prototype.curr = function () {
    return this.position;
} 
console.log('Задание 14')
logFive(new ArraySeq([1, 2])); 
logFive(new RangeSeq(100, 1000)); 



//задание 15
var Card = {
    from:"Moscow",
    to:"SPb",
    get Show() {
        return "from:"+this.from + " " + "to:" + this.to;
    },

    set Show(value) {
        var split = value.split(' ');
        this.from = split[0];
        this.to = split[1];
    }
}


let c1="Екатеринбург Москва"
Card.Show=c1
console.log(Card.Show)


//задание 16
class Human {
    #name;
    #age;
    #height;

    constructor(name, age, height) {
        this.#name = name;
        this.#age = age;
        this.#height = height;
    }
    getInfo() {
        return `${this.#name}, ${this.#age}, ${this.#height}`;
    }
    get firstname() {
        return this.#name;
    }
}

let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];


for (let human of humans)
    console.log(human.getInfo());


//Задание 17
var a = [
    {FirsName:"Ellie", LastName:"Williams"},
    {FirstName:"Lara", LastName : "Croft"}
];
function SortArray(x, y){
    if (x.LastName < y.LastName) {return -1;}
    if (x.LastName > y.LastName) {return 1;}
    return 0;
}
var s = a.sort(SortArray);
// console.log(s);

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return a - b;
});


console.log(numbers);


//Задание 18
var date = new Date(2045, 0, 1, 0, 0, 0, 0)
dt1 = date


console.log(dt1);


//задание 19
let now=new Date()
let dt2= now.getTime()


console.log(dt2)


//Задание 20
function getDays (month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(getDays(2, 2002));
console.log(getDays(2, 2020));


//Задание 22
let extNum ={
    __proto__:Number,
    isOdd(val){
        if (val % 2 != 0) {
            return true
        }
        else{
            return false
        }
    }
}


console.log(extNum.isOdd(3))
