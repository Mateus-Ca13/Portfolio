
document.addEventListener('DOMContentLoaded', () => {
    const textElement1 = document.getElementById('typewriter-text1');
    const textElement2 = document.getElementById('typewriter-text2');
    const text1 = "Olá! Meu nome é"
    const text2 = "Mateus Cavichion.";
    let index1 = 0;
    let index2 = 0

    function typeWriter() {
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
                setTimeout(() => {
                    textElement1.innerHTML = '';
                    textElement2.innerHTML = '';
                    index1 = 0;
                    index2 = 0;
                    typeWriter();
                }, 6000); 
            }
        }


       
    }
    typeWriter();
});