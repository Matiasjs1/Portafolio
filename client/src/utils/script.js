const currentUrl = window.location.href;

window.onload = function() {
    let href1, href2, href3, href4;
    const url = window.location.href;
    if (url.includes("home")) {
        href1 = "home";
        href2 = "about";
        href3 = "projects";
        href4 = "contact";
    } else if (url.includes("about")) {
        href1 = "about";
        href2 = "home";
        href3 = "projects";
        href4 = "contact";
    } else if (url.includes("projects")) {
        href1 = "projects";
        href2 = "home";
        href3 = "about";
        href4 = "contact";
    } else if (url.includes("contact")) {
        href1 = "contact";
        href2 = "home";
        href3 = "about";
        href4 = "projects";
    }else {
        href1 = 'home';
        href2 = 'about';
        href3 = 'projects';
        href4 = 'contact';
    }
    navbar(href1,href2,href3,href4);
};

function navbar(section1,section2,section3,section4){
    
    document.getElementById(section1).classList.add("flex");
    document.getElementById(section1).classList.remove("hidden");
    
    document.getElementById(section2).classList.remove("flex");
    document.getElementById(section2).classList.add("hidden");

    document.getElementById(section3).classList.remove("flex");
    document.getElementById(section3).classList.add("hidden"); 

    document.getElementById(section4).classList.remove("flex");
    document.getElementById(section4).classList.add("hidden");

    if(section1 == 'home'){
        document.getElementById('logo').classList.remove("flex");
        document.getElementById('logo').classList.add("hidden");
        
    }
    else{
        document.getElementById('logo').classList.add("flex");
        document.getElementById('logo').classList.remove("hidden");
    }
    window.location.hash = section1;
}
//con chat
function downloadCV(){
    console.log("a");
    // Crear un enlace temporal para descargar el archivo local
    const link = document.createElement('a');
    link.href = './pdf/CV.pdf'; // Ruta relativa al archivo PDF
    link.download = 'CV.pdf'; // Nombre del archivo al descargar
    link.click(); // Simula el clic en el enlace
}