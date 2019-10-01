$(document).ready(onReady);

function onReady() {

    // $('#equalBtn').on('click', generate);
 }


//Call Server 
function callGetTotal(){
    $.ajax({
        type: 'Get',
        url: '/total'
    }).then(function (response) {
        console.log('Complete', response);

    });
}

//Send Server user inputs for both numerical inputs and symbol
function callPost(){
    let objectToSend = {
        // input1: $('#numInput1').val(),
        // input2: $('#numInput2').val()
    };
    $.ajax({
        type: 'Post',
        url: '/total',
        data: objectToSend
    }).then(function (response) {
        if (response != 'Created') {
            alert(response);
        }
    });
}

//Call for POST Calculation
// Call GET Calculation
//CALL GET Calculation History
 function generate(){
     callPost();
     callGetTotal();


    }
