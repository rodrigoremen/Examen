const tele = {
    power: true,
    volumen : 3,
    canal: 7,
    mute: false
}

function PrenderLedPower() {
    if (tele.power == false) {
        //encendido
        document.getElementById("power").classList.remove('bg-gray-100', 'text-gray-700');
        tele.power = true;
        document.getElementById("power").classList.add('bg-emerald-100', 'text-emerald-700');
        const subir_volumen = document.getElementById("NA");
        document.getElementById("NA").classList.remove('bg-gray-300')
        document.getElementById("NA").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        subir_volumen.disabled = false;
        const bajar_volumen = document.getElementById("NL");
        document.getElementById("NL").classList.remove('bg-gray-300')
        document.getElementById("NL").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        bajar_volumen.disabled = false;
        const subir_canal = document.getElementById("TL");
        document.getElementById("TL").classList.remove('bg-gray-300')
        document.getElementById("TL").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        subir_canal.disabled = false;
        const bajar_canal = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('bg-gray-300')
        document.getElementById("EJ").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        bajar_canal.disabled = false;
        const mute = document.getElementById("lv");
        document.getElementById("lv").classList.remove('bg-gray-300')
        document.getElementById("lv").classList.add('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        mute.disabled = false;
    } else {
        //apagado
        document.getElementById("power").classList.remove('bg-emerald-100', 'text-emerald-700');
        tele.power = false;
        document.getElementById("power").classList.add('bg-gray-100', 'text-gray-700');
        const subir_volumen = document.getElementById("NA");
        document.getElementById("NA").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("NA").classList.add('bg-gray-300')
        subir_volumen.disabled = true;
        const bajar_volumen = document.getElementById("NL");
        document.getElementById("NL").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("NL").classList.add('bg-gray-300')
        bajar_volumen.disabled = true;
        const subir_canal = document.getElementById("TL");
        document.getElementById("TL").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("TL").classList.add('bg-gray-300')
        subir_canal.disabled = true;
        const bajar_canal = document.getElementById("EJ");
        document.getElementById("EJ").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("EJ").classList.add('bg-gray-300')
        bajar_canal.disabled = true;
        const mute = document.getElementById("lv");
        document.getElementById("lv").classList.remove('transition', 'hover:scale-110', 'hover:shadow-xl', 'focus:outline-none', 'active:bg-red-500', 'bg-red-300', 'active:bg-red-500')
        document.getElementById("lv").classList.add('bg-gray-300')
        mute.disabled = true;
    }
    if (tele.mute == true) {
        tele.mute = false;
        document.getElementById("bl").className = "inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700";
    }
    tele.subir_volumen = 0;
    tele.bajar_volumen = 1;
    tele.subir_canal = 0
    tele.enjuague = 1;
}
function subirVolumen() {
    if (tele.volumen <= 9) {
        tele.volumen = tele.volumen + 1;
    } else {
        console.log("Volumen maximo");
    }
    console.log(tele.volumen);

}
function bajarVolumen() {
    if (tele.volumen >= 1) {
        tele.volumen = tele.volumen -1;
    } else {
        console.log("Volumen Minimo");
    }
    console.log(tele.volumen);  

}
function subirCanal() {
    if (tele.canal <= 99) {
        tele.canal = tele.canal + 1;
    } else {
        console.log("Canal maximo");
    }
    console.log(tele.canal);
    
}
function bajarCanal() {
    if (tele.canal >= 1) {
        tele.canal = tele.canal - 1;
    } else {
        console.log("Canal Minimo");
    }
    console.log(tele.canal);
    
}
function mute() {
    tele.volumen = 0;
    console.log(tele.volumen)
}