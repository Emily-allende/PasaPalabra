var words = [
    new Word(0, "A", "Contiene la A:", " Agregar una hoja de codigo a otra", "Enlazar"),
    new Word(1, "B", "Empieza por B:", " Propiedad que se utiliza para dar color al fondo", "Backgrounds"),
    new Word(2, "C", "Empieza por C:", " Hoja para dar estilo", "Css"),
    new Word(3, "D", "Contiene la D:", " Puede añadir funciones escalares dentro de otras funciones escalares y dentro de funciones de columna", "Anidada"),
    new Word(4, "E", "Empieza por E:", " Objeto o sujeto de la base de datos que queremos almacenar informacion", "Entidad"),
    new Word(5, "F", "Empieza por F:", " Atributo que viene de otra tabla", "Foreign Key"),
    new Word(6, "G", "Empieza por G:", " Metodo de describe el acceso en una propiedad", "Get"),
    new Word(7, "H", "Empieza por H:", " Homología particular de eje impropio, con centro en el de homología", "Homotecia"),
    new Word(8, "I", "Contiene la I:", " Ciencia que estudia las propiedades de la energia", "Fisica"),
    new Word(9, "J", "Empieza por J:", " Lenguaje de programación interpretado, dialecto del estándar ECMAScript.", "JavaScript"),
    new Word(10, "L", "Contiene la L:"," Hoja donde se hace el contenido de una pagina web ", "Html"),
    new Word(11, "M", "Empieza por M:"," Etiqueta medidor o de medida", "Meter"),
    new Word(12, "N", "Empieza por N:"," Punto donde dos o más componentes tienen una conexión común", "Nodo"),
    new Word(13, "Ñ", "Contiene la Ñ:"," Materia enfocada en el desarrollo de interfaces digitales.", "Diseño web"),
    new Word(14, "O", "Contiene la O:"," Dos triángulos que tienen dos ángulos iguales, así como el lado comprendido entre ellos respectivamente igual, son:", "Concruentes"),
    new Word(15, "P", "Empieza por P:"," Es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto.", "Programación"),
    new Word(16, "Q", "Contiene la Q:"," Lugar en donde intersectan las curva de la demanda y la curva de la oferta", "Equilibrio"),
    new Word(17, "R", "Contiene la R:"," Estudio de la economía de una zona, país o grupo de países en función de las actividades individuales de un comprador, de un fabricante, de una empresa, etc", "Microeconomia"),
    new Word(18, "S", "Empieza por S:"," Disciplina lingüística que estudia el orden y la relación de las palabras o sintagmas en la oración, así como las funciones que cumplen", "Sintaxis"),
    new Word(19, "T", "Contiene la T:"," De las letras, en oposición a las ciencias, o relacionado con ellas.", "Literario"),
    new Word(20, "U", "Contiene la U:"," Cual es la avreviación de Lenguaje Unificado de Modelado","UML"),
    new Word(21, "V", "Contiene la V:"," Proyecto que tiene 5to TIC desde mitad de año", "Aviones"),
    new Word(22, "X", "Contiene la X:"," Sistema filosófico, político y económico basado en las ideas de Karl Marx (1818-1883) y de Friedrich Engels (1820-1895), que rechaza el capitalismo y defiende la construcción de una sociedad sin clases y sin estado", "Marxismo"),
    new Word(23, "Y", "Contiene la Y:"," Tipo de texto en prosa que explora, analiza, interpreta o evalúa un tema.", "Ensayo"),
    new Word(24, "Z", "Contiene la Z:"," Recurso de presentación que usa la profe de APT", "Prezi")
];

function Word(idNumber, letter, hint, definition, word, correct) {
    this.idNumber = idNumber;
    this.letter = letter;
    this.hint = hint;
    this.definition = definition;
    this.word = word;
    this.correct = null;
}

function showDefinition(pos) {
    $("#js--hint").html(words[pos].hint);
    $("#js--definition").html(words[pos].definition);
}

var remainingWords = 25;

function checkAnswer(pos) {
    var userAnswer = $("#js--user-answer").val().toLowerCase();
    if (userAnswer == words[pos].word.toLowerCase()) {
        words[pos].correct = true;
        $(".circle .item").eq(words[pos].idNumber).addClass("item--success");
 
    } else {
        words[pos].correct = false;
        $(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
    }
    remainingWords--;
    $("js--score").html(remainingWords);
    return count++;
}
 

function pasapalabra(pos) {
    var w = words.splice(pos, 1)[0];
    words.push(w);
}

function continuePlaying() {
    if (count != 25) {
        $("#js--user-answer").val("");
        showDefinition(count);
    } else {
        endGame();
    }
}

var count = 0; 
$("#js--new-game").click(function() {
    $("#js--question-controls").removeClass("hidden");
    showDefinition(count);
    countdown();
});
 

$("#js--send").click(function() {
    checkAnswer(count);
    continuePlaying();
});
 

$("#js--question-controls").keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == "13") {
        checkAnswer(count);
        continuePlaying();
    }
});
 
$("#js--pasapalabra").click(function() {
    pasapalabra(count);
    continuePlaying();
});
window.onload = function() {
    visor=document.getElementById("reloj"); 
    
    document.cron.empieza.onclick = empezar; 
    document.cron.para.onclick = parar;
    document.cron.continua.onclick = continuar;
    document.cron.reinicia.onclick = reiniciar;
    }
    
    var marcha=0; 
    var cro=0;
    
    function empezar() {
             if (marcha==0) { 
                emp=new Date()
                elcrono=setInterval(tiempo,10); 
                marcha=1 
                }
             }
    function tiempo() { 
             actual=new Date()
             cro=actual-emp 
             cr=new Date() 
             cr.setTime(cro) 
             cs=cr.getMilliseconds()
             cs=cs/10;
             cs=Math.round(cs)
             sg=cr.getSeconds();
             mn=cr.getMinutes();
            
             if (cs<10) {cs="0"+cs;}
             if (sg<10) {sg="0"+sg;} 
             if (mn<10) {mn="0"+mn;} 
             visor.innerHTML=mn+" : "+sg+" : "+cs; 
             }
    
    function parar() { 
             if (marcha==1) {
                clearInterval(elcrono); 
                marcha=0; 
                }		
             }		 
    
    function continuar() {
             if (marcha==0) {
                emp2=new Date(); 
                emp2=emp2.getTime(); 
                emp3=emp2-cro; 
                emp=new Date(); 
                emp.setTime(emp3); 
                elcrono=setInterval(tiempo,10); 
                marcha=1;
                }		
             }
    
    function reiniciar() {
             if (marcha==1) { 
                clearInterval(elcrono); 
                marcha=0;	
                }
             cro=0; 
             visor.innerHTML = "00 : 00 : 00"; 
             }