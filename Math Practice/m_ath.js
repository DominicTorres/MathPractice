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

function duplicate(){
    var n1 = doc1.value(0);
    var n2 = doc1.value(1);
    var n3 = doc1.value(2);
    var n4 = doc1.value(3);
    var n5 = doc1.value(4);
    var n6 = doc1.value(5);
    output.innerHTML = "";

    
}

function order(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;
    
o1 = math.min(first, second, third, fourth, fifth, sixth);
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o2 === second){
        first = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;

    }else if(o3 === third){
        first = first;
        second = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        sixth = fifth;
    }else if(o6 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }
}

o2 = math.min(first, second, third, fourth, fifth){
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o2 === second){
        first = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;

    }else if(o3 === third){
        first = first;
        second = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        sixth = fifth;
    }else if(o6 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }
}

o3 = math.min(first, second, third, fourth, fifth){
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o2 === second){
        first = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;

    }else if(o3 === third){
        first = first;
        second = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        sixth = fifth;
    }else if(o6 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }
}

o4 = math.min(first, second, third, fourth, fifth){
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o2 === second){
        first = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;

    }else if(o3 === third){
        first = first;
        second = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        sixth = fifth;
    }else if(o6 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }
}

o5 = math.min(first, second, third, fourth, fifth){
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o2 === second){
        first = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;

    }else if(o3 === third){
        first = first;
        second = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        sixth = fifth;
    }else if(o6 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }
}

o6 = math.min(first, second, third, fourth, fifth){
    if(o1 === first){
        second = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o2 === second){
        first = first;
        third = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;

    }else if(o3 === third){
        first = first;
        second = second;
        fourth = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o4 === fourth){
        first = first;
        second = second;
        third = third;
        fifth = fourth;
        sixth = fifth;
    }else if(o5 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        sixth = fifth;
    }else if(o6 === sixth){
        first = first;
        second = second;
        third = third;
        fourth = fourth;
        fifth = fifth;
    }
}