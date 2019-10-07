export function app(){
    console.log('app runs');
    function calcularFecha() {
        var diaPre = document.getElementById('inDia')
        var mesPre = document.getElementById('inMes')
        var añoPre = document.getElementById('inAño')
        var res = document.getElementById('outRes')
        var dia1 = parseInt(diaPre.value) 
        var mes1 = parseInt(mesPre.value)
        var año1 = parseInt(añoPre.value)
        var año2 = Math.trunc(año1 / 4);
        var año3 = Math.trunc(año1 / 100);
        var año4 = Math.trunc(año1 / 400);
        // var anne = Math.trunc(año1 / 100);
        //console.log(anne)
     

        if (mes1 === 1) {
              console.log('ESTAMOS EN 1')
            mes1 = 13;
            var mesR = (mes1 + 1) * 3;
            mesTr = Math.round(mesR / 5);
            año1 = año1 - 1;
            //console.log(mesTr)
          
            var op1 = parseInt(dia1 + (mes1 * 2) + año1 + mesTr + año4 + año2 - año3 + año4 + 2);
            //console.log(dia1 , mes1 ,'* 2' , año1 , mesTR , año4 , año2 ,'-', año3 , año4 , '+2')
            //console.log(op1, ' op1')
            var op2 = parseInt(op1 / 7)
            var result = op1 - (op2 * 7)
            //.log('Datos ','dia1 ', dia1, '+','(', 'mes1 ',  mes1, '* 2)','+','año1 ', año1, '+', 'mes1' , mesR,'+','año2 ', año2, '-','año3 ', año3, '+','año4 ', año4, '+2');
            //console.log(result, ' result')


        } else if (mes1 === 2) {
            console.log('ESTAMOS EN 2')
            var mesR = mes1
            mes1 = 14;
            año1 = año1 - 1;

            var op1 = parseInt(dia1 + (mes1 * 2) + año1 + año4 + año2 - año3 + año4 + 2);
            
            console.log(op1, ' op1')
            var op2 = parseInt(op1 / 7)
            var result = op1 - (op2 * 7)
            console.log('Datos ','dia1 ', dia1, '+','(', 'mes1 ',  mes1, '* 2)','+','año1 ', año1, /*'+', 'mes1 ', mes1,*/'+','año2 ', año2, '-','año3 ', año3, '+','año4 ', año4, '+2');

            console.log(result, ' result')

        } else if (mes1 > 2) {
            console.log('ESTAMOS EN >2')
            var mesR = mes1
            mes1 = (mes1 + 1) * 3;
            mes1 = Math.round(mes1 / 5);
            console.log(año1, año2, año3, año4);

            var op1 = parseInt(dia1 + (mesR * 2) + año1 + mes1 + año2 - año3 + año4 + 2);
            console.log(dia1, mesR, año1, mes1, año2, año3, año4, '2' )


            console.log(op1, ' <op1', mes1, ' <mes1', mesR, ' <mesR')

            //console.log('Datos ', 'dia1 ', dia1, '+', '(', 'mesR ', mesR, '* 2)', '+', 'año1 ', año1, '+', 'mes1 ', mes1, '+', 'año2 ', año2, '-', 'año3 ', año3, '+', 'año4 ', año4, '+2');
            var op2 = parseInt(op1 / 7)
            var result = op1 -(op2 * 7 )
            console.log(result, ' result')
            
        };}
} 