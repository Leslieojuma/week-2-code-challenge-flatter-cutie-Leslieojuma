async function fetchndisplayname(params) {
    const response = await fetch('http://localhost:3000/characters');
    const data = await response.json();
    document.addEventListener("DOMcontentloaded" ,()) => {
        const characterBar = document.getElementById("character-bar");
        const characterInfo = document.getElementById("characterInfo");
        const nameElement= document.getElementById("name");
        const ImageElement =document.getElementById("Image");  
        data.characters.forEach(character => {
            const span = document.createElement('span');
            span.textContent = character.name;
            characterBar.appendChild(span);
        });
        } ;
}




