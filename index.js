function contarVocales() {
    let frase=document.getElementById("texto").value;
    let numA=0;
    let numE=0;
    let numI=0;
    let numO=0;
    let numU=0;
    for (let i = 0; i < frase.length; i++) 
    {
        if ((frase.charAt(i)== 'a') || (frase.charAt(i)== 'A')){
            
            numA++;
        }
       
        if ((frase.charAt(i)== 'e' ) || (frase.charAt(i)== 'E')){
            
            numE++;
        }
        if ((frase.charAt(i)== 'i' ) || (frase.charAt(i)== 'I')){
            
            numI++;
        }
        if ((frase.charAt(i)== 'o' ) || (frase.charAt(i)== 'O')){
            
            numO++;
        }
        if ((frase.charAt(i)== 'u' ) || (frase.charAt(i)== 'U')){
            
            numU++;
        }
    }
    document.getElementById("resultado").innerHTML="El número de vocales es:" + numA +"aes," + numE + "es," + numI + "ies," + numO + "oes" + " y " + numU + "ues."
    console.log(numA);
    

}   