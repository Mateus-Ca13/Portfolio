    const textElement1 = document.getElementById('typewriter-text1');
    const textElement2 = document.getElementById('typewriter-text2');
    const text1 = "Olá! Meu nome é"
    const text2 = "Mateus Cavichion.";
    let index1 = 0;
    let index2 = 0
    var removeWord = false;

    typeWriter();

    function typeWriter() {

        if(removeWord== true) {
            if(textElement2.innerHTML.length > 0) {
                textElement2.innerHTML = textElement2.innerHTML.slice(0, -1)
                setTimeout(typeWriter, 50)
            } else {           
                if(textElement1.innerHTML.length > 0) {
                    textElement1.innerHTML = textElement1.innerHTML.slice(0, -1)
                    setTimeout(typeWriter, 50)
                } else {
                    removeWord = false
                    index1 = 0;
                    index2 = 0;
                    setTimeout(typeWriter, 1000)
                } 
            }
        }
        else {
        if (index1 < text1.length) {
            textElement1.innerHTML += text1.charAt(index1);
            index1++;
            setTimeout(typeWriter, 100); 
        } else {
            if (index2 < text2.length) {
                textElement2.innerHTML += text2.charAt(index2);
                index2++;
                setTimeout(typeWriter, 100); 
            } else {
             
                removeWord = true;
                setTimeout(typeWriter, 6000); 
            }
        }}
    }

function A () {
   ;
                    
}