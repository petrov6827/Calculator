"use strict";

$( function() {
       
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({

        create: function() {
        handle.text( $( this ).slider( "value" ) );
        },

        slide: function( event, ui ) {
            handle.text( ui.value );  //ui слайдер 
                
            var a = $('#slider').slider("value"); //передача значения из слайдера
            document.getElementById('square').value = (a * a); //площадь квадрата
            document.getElementById('perimeter').value = (a * 4); //периметр квадрата
          
        }

    });

    function getSelectValue () {
        var selectedValue = document.getElementById('figure').value;
        console.log(selectedValue);
    }
    getSelectValue ();
    
});


   
//jQuery("#square").html(square)

/* 

case 'kvadrat' :
    var a = $('#slider').slider("value");
    document.getElementById('square').value = (a^2);
    document.getElementById('perimeter').value = (a * 4);
    break;

case 'krug' :
    var r = $('#slider').slider("value");
    document.getElementById('square').value = (3.14 * r * r);
    document.getElementById('perimeter').value = (2 * 3.14 * r);
    break;

case 'treugolnik' :
    var a = $('#slider').slider("value");
    document.getElementById('square').value = (b * a / 2); //a - основание, b-высота
    document.getElementById('perimeter').value = (a + 2 * Math.sqrt((a/2)^2 + b^2));
    break; 

*/
            
