'use strict'

/**********************
 * Registrar Contacto *
 *********************/

 function registrarContacto(pnombre, ptelefono, pcorreo, pservicioCotizar, pmensaje, phoraMensaje, pfechaMensaje) {
     let respuesta = '';
     let peticion = $.ajax({
         url: 'https://servicios-lk.herokuapp.com/api/contacts',
         type: 'post',
         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
         dataType: 'json',
         async: false,
         data: {
 
            nombre: pnombre,
            telefono: ptelefono,
            email: pcorreo,
            servicio: pservicioCotizar,
            mensaje: pmensaje,
            hora: phoraMensaje,
            fecha: pfechaMensaje,
         },
         
     });
     
 
     peticion.done(function (response) {
         respuesta = response;
     });
 
     peticion.fail(function (response) {
         respuesta = response;
     });
 
     return respuesta;
 };