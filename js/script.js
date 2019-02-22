
'use strict';


var output = document.getElementById('output');

var outputinfo = document.getElementById('outputinfo');

output.innerHTML = 'Wcisnij guzik jeśli chcesz zamieić stopnie' + '<br><br>'; 


var buttonC = document.getElementById('buttonC');
var buttonF = document.getElementById('buttonF');

buttonC.addEventListener('click', function() {	
    
    var degreesC = window.prompt('Prosze podać stopnie celcjusza');
    var valueC = parseFloat(degreesC);

    function convertCelsiusToFeranheit(degreesC){
        return degreesF = degreesC * 1.8 + 32;  
    }
    var degreesF = convertCelsiusToFeranheit(degreesC);

    if(!isNaN(valueC)) {
            output.innerHTML = 'Stopnie Celsjusza: ' + degreesC + '&#x2103 ' + '<br>' + 'Stopnie Fahrenheita: ' + degreesF + '&#x2109' + '<br>'; 
    } 
    else if (isNaN(valueC)) {
            output.innerHTML = 'Nie wpisałeś cyfry';
    }

    function changeStateOfWater(valueC) {
        var outputinfo = document.getElementById('outputinfo');
        if(valueC == 0) {
                outputinfo.innerHTML = 'To jest temperatura zamarzania';
        }
        else if(valueC == 100) {
                outputinfo.innerHTML = 'To jest temperatura wrzenia';
        }
        else if(valueC < 0) {
                outputinfo.innerHTML = 'Woda zmieniła się w lód';
        }
        else if(valueC > 100) {
                outputinfo.innerHTML = 'Woda zmieniła się w parę';
        }
        else if(valueC != null) {
                outputinfo.innerHTML = '';
        } 
    };
    changeStateOfWater(valueC);


    if(valueC <= 0 ) {
            outputinfo2.innerHTML = 'Należy ubrać cieplutkie ubranie';
    } 
    else if(valueC >= 20 && valueC < 40) {
            outputinfo2.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    }
    else if(valueC <= 10) {
            outputinfo2.innerHTML = 'Należy ubrać kurtkę i czapkę';
    }
    else if(valueC != null) {
            outputinfo2.innerHTML = '';
    }
});

buttonF.addEventListener('click', function() {	
    
    var degreesF = window.prompt('Prosze podać stopnie Fahrenheita');
    var valueF = parseFloat(degreesF);

    function convertFeranheitToCelsius(degreesF){
        return degreesC = (degreesF -32) / 1.8;  
    };
    var degreesC = convertFeranheitToCelsius(degreesF);
    
    if(!isNaN(valueF)) {
            output.innerHTML = 'Stopnie Fahrenheita: ' + degreesF + '&#x2109 ' + '<br>' + 'Stopnie Celsjusza: ' + degreesC + '&#x2103' + '<br>'; 
    }   
    else if (isNaN(valueF)) {
            output.innerHTML = 'Nie wpisałeś cyfry';
    }    

    var celcius = convertFeranheitToCelsius(valueC);
    changeStateOfWater(celcius);
    console.log(valueC);

    var outputinfo2 = document.getElementById('outputinfo2');
    
    if(valueF <= 32 ) {
            outputinfo2.innerHTML = 'Należy ubrać cieplutkie ubranie';
    }  
    else if(valueF >= 68 && degreesF < 104) {
            outputinfo2.innerHTML = 'Można spokojnie ubrać krótkie spodenki';
    }
    else if(valueF <= 50) {
            outputinfo2.innerHTML = 'Należy ubrać lekką kurtkę';
    }

    else if(valueF != null) {
            outputinfo2.innerHTML = '';
    }
});


