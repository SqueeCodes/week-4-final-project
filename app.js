const fetchCharacters = async () => {
	const res = await fetch('https://potterapi-fedeperin.vercel.app/en/characters')
	const characters = await res.json()

	return characters
}

fetch('https://potterapi-fedeperin.vercel.app/en/characters')
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })

const characterBoardEl = document.querySelector(".characters--board");



async function main() {
    const characters = await fetch("https://potterapi-fedeperin.vercel.app/en/characters");
    const charactersData = await characters.json();
    characterBoardEl.innerHTML = charactersData.map((character) => characterHTML(character)).join("");
}

main();

function characterHTML(character) {
    return `<div class="characters" onclick="fullCharacterInfo(${character.id})">
                <div class="character--img__wrapper">
                    <figure>
                        <img class="character--img src="${character.image}" alt="">
                    </figure>
                </div>
                <div class="character--details">
                <h1 class="nickname">${character.nickname}</h1>
                </div>
            </div>`
}

function fullCharacterInfo(id) {
    localStorage.setItem("id84", id)
    console.log(window.location);
    window.location.href = `${window.location.origin}/character.html`
}
