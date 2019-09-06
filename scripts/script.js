const btnMostrar = document.getElementById('btnMostrar');

btnMostrar.addEventListener('click', () => {
    let nombre = document.getElementById('txtNombre');
    let apellidos = document.getElementById('txtApellidos');
    let correo = document.getElementById('txtEmail');
    let fecha = document.getElementById('inpFecha');
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    if(nombre.value && apellidos.value && correo.value && fecha.value){


        alert(`DATOS:
        Nombre: ${nombre.value}
        Apellidos: ${apellidos.value}
        Correo electrónico: ${correo.value}
        Fecha de nacimiento: ${fecha.value.split('-')[2]} de ${meses[Number(fecha.value.split('-')[1]) - 1]} de ${fecha.value.split('-')[0]}`);

        nombre.value = "";
        apellidos.value = "";
        correo.value = "";
        fecha.value = "";
    }else{
        alert('Favor de llenar todos los campos');
    }
});