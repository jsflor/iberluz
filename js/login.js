(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        const btnInicio = document.getElementById('btnInicio');
        const btnRegistro = document.getElementById('btnRegistro');
        const inicio = document.getElementById('inicio');
        const registro = document.getElementById('registro');

        btnRegistro.addEventListener('click', function(){
            inicio.style.display = 'none';
            registro.style.display = 'block';
        });

        btnInicio.addEventListener('click', function(){
            inicio.style.display = 'block';
            registro.style.display = 'none';
        });
    });
})();