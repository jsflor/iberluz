$(document).ready(function(){
    'use strict';
    //LeaftLet Map
    var map = L.map('map').setView([40.636655, -4.008497], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.636655, -4.008497]).addTo(map)
        .bindPopup('Oficina más cercana')
        .openPopup();
    
    
    // //BUTTON GROUP HOME AND COMPANY SHOW HIDE
    
    const homeCompany = function(){
            $('#company').click(function(){
            $('#hero').hide();
            $('#hogar').hide();
            $('#empresa').show();
            $('#home').text('Empresa');
            $(this).text('Hogar');
            $(this).click(function(){
                $('#hero').show();
                $('#hogar').show();
                $('#empresa').hide();
                $('#home').text('Hogar');
                $(this).text('Empresa');
                $(this).click(homeCompany());
            });
        });
    }
    homeCompany();

    //HELP

    $('#help').click(function(){
        $('#btnG').hide();
        $('#hero').hide();
        $('#main').hide();
    });

    //CUSTOMER ZONE

    const customer = function(){
        $('#btnClientes').click(function(){
            $('#btnG').hide();
            $('#hero').hide();
            $('#main').hide();
            $('#map').hide();
            $('#contacto').hide();
            $('#login').show();
            $(this).text('Volver');
            $(this).click(function(){
                $('#btnG').show();
                $('#hero').show();
                $('#main').show();
                $('#map').show();
                $('#contacto').show();
                $('#login').hide();
                $(this).text('Acceso Clientes');
                $(this).click(customer());
            });
        });
    }
    customer();

    //LOG IN SIGN UP

    $('#btnRegistro').click(function(){
        $('#inicio').hide();
        $('#registro').show();
    });

    $('#btnInicio').click(function(){
        $('#inicio').show();
        $('#registro').hide();
    });

});