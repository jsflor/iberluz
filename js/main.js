(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        const hero = document.getElementById('hero');
        const btnHogar = document.getElementById('home');
        const btnEmpresa = document.getElementById('company');
        const hogar = document.getElementById('hogar');
        const empresa = document.getElementById('empresa');
        
        btnEmpresa.addEventListener('click', function(){
            hero.style.display = 'none';
            hogar.style.display = 'none';
            empresa.style.display = 'block';
        });

        btnHogar.addEventListener('click', function(){
            hero.style.display = 'flex';
            hogar.style.display = 'block';
            empresa.style.display = 'none';
        });
    });
})();