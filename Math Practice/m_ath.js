var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var largestTotal = Math.max(first, second, third, fourth, fifth, sixth);
var smallestTotal = Math.min(first, second, third, fourth, fifth, sixth);
var output = document.getElementById("output");

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



