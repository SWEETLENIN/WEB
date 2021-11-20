//задание 1
function Sharp(){
    let str=""
    for (let i=1;i<=7;i++){
        str+="#"
        console.log(str)
    }
}


//Sharp();




//задание 2
function FizzBuzz(){
    for (let i=1;i<=100;i++){
        if (i%3==0){
            console.log("Fizz")
        }
        else if (i%3!=0 && i%5==0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}


//FizzBuzz()


function FizzBuzzNew(){
    for (let i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        else {
            console.log(i)
        }
    }
}


//FizzBuzzNew()




//Задание 3
function ChessTable(){
    for (let i=1;i<=8;i++){
        let str=""
        if (i%2==1){
            for (let k=1;k<=8;k++){
                if (k%2==1){
                    str+="#"
                }
                else{
                    str+=" "
                }
            }
        }
        else{
            for (let k=1;k<=8;k++){
                if (k%2==1){
                    str+=" "
                }
                else{
                    str+="#"
                }
            }
        }
        console.log(str)
    }
}

//ChessTable()




//задание 4
function Min(a,b){
    if (a<b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}

//Min("abcdef","abc")




//задание 5
function countBs(str){
    let counter=0
    for (let i=0;i<=str.length;i++){
        if (str.charAt(i)=="B"){
            counter+=1
        }
    }
    console.log(counter)
}

//countBs("BAAAASFSFBBBBSFSFSBB")


function countChar(str,symb){
    let counter=0
    for (let i=0;i<=str.length;i++){
        if (str.charAt(i)==symb){
            counter+=1
        }
    }
    console.log(counter)
}

//countChar("ABVDBDJTDJV0","J")


//задание 6
function range(chislo1,chislo2, shag=1){
    let arr = []
    if (chislo1<chislo2 && shag>0){
        for (let i=chislo1;i<=chislo2;i+=shag){
            arr.push(i)
        }
    }
    else if (chislo2<chislo1 && shag<0){
        for (let i=chislo1;i>=chislo2;i+=shag){
            arr.push(i)
        }
    }
    else{
        console.log("Неверный ввод")
        return
    }
    console.log(arr)
}

//range(10,5,-1)

function sum(arr){
    let chislo=0
    for (let i=0;i<arr.length;i++){
        chislo+=arr[i]
    }
    console.log(chislo)
}

//sum([1,2,3,5,7])


//задание 7
function reverseArray(arr){
    let newarr=[]
    for (let i=arr.length-1;i>=0;i--){
        newarr.push(arr[i])
    }
    console.log(newarr)
}

//reverseArray([4,5,6,7,8])


function reverseArrayInPlace(arr){
    let seredina=0
    if (arr.length%2==1){
        seredina=(arr.length-1)/2
    }
    else{
        seredina=arr.length/2
    }
    for (let i=0;i<=seredina;i++){
        let tmp=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=tmp
    }
    console.log(arr)
}

reverseArrayInPlace([2,3,4,5,6])