(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        //LeaftLet Map
        var map = L.map('map').setView([40.636655, -4.008497], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([40.636655, -4.008497]).addTo(map)
            .bindPopup('Oficina más cercana')
            .openPopup();
        
        
        //Group Home Company Show Hide
        const hero = document.getElementById('hero');
        const btnHogar = document.getElementById('home');
        const btnEmpresa = document.getElementById('company');
        const hogar = document.getElementById('hogar');
        const empresa = document.getElementById('empresa');
        
        btnEmpresa.addEventListener('click', function(){
            if(empresa.style.display === 'none'){
                hero.style.display = 'none';
                hogar.style.display = 'none';
                empresa.style.display = 'block';
                btnHogar.textContent = 'Empresa';
            } else {
                hero.style.display = 'flex';
                hogar.style.display = 'block';
                empresa.style.display = 'none';
            }
        });

        btnHogar.addEventListener('click', function(){
            hero.style.display = 'flex';
            hogar.style.display = 'block';
            empresa.style.display = 'none';
            this.textContent = 'Hogar';
        });

        //Help
        const help = document.getElementById('help');
        help.addEventListener('click', function(){
            btnGroup.style.display = 'none';
            hero.style.display = 'none';
            main.style.display = 'none';
        });

        //Customer Zone
        const btnAccesso = document.getElementById('btnClientes');
        const btnGroup = document.getElementById('btnG');
        const main = document.getElementById('main');
        const mapa = document.getElementById('map');
        const contacto = document.getElementById('contacto');
        const login = document.getElementById('login');

        btnAccesso.addEventListener('click', function(){
            if(login.style.display === 'none'){
                btnGroup.style.display = 'none';
                hero.style.display = 'none';
                main.style.display = 'none';
                mapa.style.display = 'none';
                contacto.style.display = 'none';
                login.style.display = 'block';
                this.textContent = 'Volver';
            } else {
                login.style.display = 'none';
                this.textContent = 'Acceso Clientes';
                btnGroup.style.display = 'inline-flex';
                hero.style.display = 'flex';
                main.style.display = 'block';
                mapa.style.display = 'block';
                contacto.style.display = 'block';
            }
        });

        //Log In Sign Up Show Hide
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