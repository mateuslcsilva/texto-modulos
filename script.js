const changeText = () => {
    let texto = document.querySelector("#text").value;
    
    let textonovo = texto.trim().split("- ")

    let textocerto = textonovo.join("").split(" ;").join(";").replaceAll('\n', ' ')
   
    document.querySelector("#arrumado").innerHTML = textocerto 

    navigator.clipboard.writeText(textocerto)

    document.querySelector("#text").value = ''

    if (!textocerto) return

    let popover = document.createElement('p')
    popover.setAttribute('class', 'popover')
    popover.innerText = 'Texto arrumado e copiado!!'
    document.querySelector('.container').append(popover)

    if(popover){
        setInterval(() => {
            popover.remove()
        }, 4000);
      }
  }
  
/*const clearTextArea = () => {
	setInterval (() => {
	   document.querySelector("#text").value = ''
        }, 10)
}*/

document.querySelector("#text").value = ''
 


