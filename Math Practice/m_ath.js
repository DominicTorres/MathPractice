//Global Variables
var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var largestTotal = Math.max(first, second, third, fourth, fifth, sixth);
var smallestTotal = Math.min(first, second, third, fourth, fifth, sixth);
var output = document.getElementById("output");
//This function finds the repeative number
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var meanTotal = (first + second + third + fourth + fifth + sixth) / 6;
    output.innerHTML = " The mean of these numbers is " + meanTotal;
}
//This function finds the largest number out of all inputs
function largestNumber(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var largestTotal = Math.max(first, second, third, fourth, fifth, sixth);
    output.innerHTML = " The largest number is " + largestTotal;
}
//This function finds the smallest number out of all inputs
function smallestNumber(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var smallestTotal = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = " The smallest number is " + smallestTotal;
}
//This function finds the difference between the lowest and highest values
function range(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var rangeTotal = (Math.max(first, second, third, fourth, fifth, sixth) - Math.min(first, second, third, fourth, fifth, sixth));
    output.innerHTML = " The range is " + rangeTotal;
}
//This function finds the order of the inputs from least to greatest
function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 1;
    var o2 = 1;
    var o3 = 1;
    var o4 = 1;
    var o5 = 1;
    var o6 = 1;

    o1 = Math.min(first, second, third, fourth, fifth, sixth);
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === fifth){
        fifth = sixth;
    }
    o2 = Math.min(first, second, third, fourth, fifth);
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
    }else if(o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
    }else if(o2 === third){
        third = fourth;
        fourth = fifth;
    }else if(o2 === fourth){
        fourth = fifth;
    }
    o3 = Math.min(first, second, third, fourth);
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
    }else if(o3 === second){
        second = third;
        third = fourth;
    }else if(o3 === third){
        third = fourth;
    }
    o4 = Math.min(first, second, third);
    if(o4 === first){
        first = second;
        second = third;
    }else if(o4 === second){
        second = third;
    }
    o5 = Math.min(first, second);
    if(o5 === first){
        first = second;
    }
    o6 = first

    output.innerHTML = "order is this: " + o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
}
//This function finds the input that appears most often
function mode(){
    var one = parseFloat(doc1.value); 
    var two = parseFloat(doc2.value); 
    var three = parseFloat(doc3.value); 
    var four = parseFloat(doc4.value); 
    var five = parseFloat(doc5.value); 
    var six = parseFloat(doc6.value);

    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if (one === two){
        n1 ++;
    }
    if (one === three){
        n1 ++;
    }
    if (one === four){
        n1 ++;
    }
    if (one === five){
        n1 ++;
    }
    if (one === six){
        n1 ++;
    }
    if (two === three){
        n2 ++;
    }
    if (two === four){
        n2 ++;
    }
    if (two === five){
        n2 ++;
    }
    if (two === six){
        n2 ++;
    }
    if (three === four){
        n3 ++;
    }
    if (three === five){
        n3 ++;
    }
    if (three === six){
        n3 ++;
    }
    if (four === five){
        n4 ++;
    }
    if (four === six){
        n4 ++;
    }
    if (five === six){
        n5 ++;
    }
    var max = Math.max(n1, n2, n3, n4, n5, n6);
    if(max === n1){
        output.innerHTML = "mode is " + one + " and it appeared " + max + " number of times"; 
    }
    else if(max === n2){
        output.innerHTML = "mode is " + two + " and it appeared " + max + " number of times"; 
    }
    else if(max === n3){
        output.innerHTML = "mode is " + three + " and it appeared " + max + " number of times"; 
    }
    else if(max === n4){
        output.innerHTML = "mode is " + four + " and it appeared " + max + " number of times"; 
    }
    else if(max === n5){
        output.innerHTML = "mode is " + five + " and it appeared " + max + " number of times"; 
    }
    else if(max === n6){
        output.innerHTML = "mode is " + six + " and it appeared " + max + " number of times"; 
    }
}
//This function finds mode and median from the inputs
function middle(){
    var first = parseFloat(doc1.value); 
    var second = parseFloat(doc2.value); 
    var third = parseFloat(doc3.value); 
    var fourth = parseFloat(doc4.value); 
    var fifth = parseFloat(doc5.value); 
    var sixth = parseFloat(doc6.value);

    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;

    one = Math.min(first, second, third, fourth, fifth, sixth);
    if(one === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(one === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(one === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }
    else if(one = fourth){
        fourth = fifth;
        fifth = sixth;
    }
    else if(one = fifth){
        fifth = sixth;
    }
    two = Math.min(first, second, third, fourth, fifth);
    if(two === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
    }
    else if(two === second){
        second = third;
        third = fourth;
        fourth = fifth;
    }
    else if(two === third){
        third = fourth;
        fourth = fifth;
    }
    else if(two = fourth){
        fourth = fifth;
    }
    three = Math.min(first, second, third, fourth);
    if(three === first){
        first = second;
        second = third;
        third = fourth;
    }
    else if(three === second){
        second = third;
        third = fourth;
    }
    else if(three === third){
        third = fourth;
    }
    four = Math.min(first, second, third);
    if(four === first){
        first = second;
        second = third;
    }
    else if(four === second){
        second = third;
    }
    five = Math.min(first, second);
    if(five === first){
        first = second;
    }
    six = first;

    var middle = (three + four) / 2;

    output.innerHTML = "The two middle terms are " + three + " and " + four + ", so the median is " + middle;
    if(output.innerHTML === "The two middle terms are NaN and NaN, so the median is NaN"){
        output.innerHTML = "I think you forgot to type in the numbers -_-"
    }
}

function duplicate(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    
}

