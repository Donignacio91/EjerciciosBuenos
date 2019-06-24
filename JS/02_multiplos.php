<?php
    $limite = 10
    $acumulador = 0 
    $maximo = 100
    $contador = 0
    for ($i = 0; $i < $limite; $i++) {
        $contador = i
        echo(i)
        if ($acumulador + ( $i*$i) > $maximo){
            break
        }
        $acumulador += $acumulador + ($i*$i) // mas igual es lo mismo que poner igual a ti mismo mas algo (X = X+2) = (X += 2)
    }
    echo($acumulador. ',' $contador)