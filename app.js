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
    return `<div class="characters">
                <div class="character--img__wrapper">
                    <figure>
                        <img class="character--img src="${character.image}" alt="">
                    </figure>
                </div>
                <div class="character--details">
                <h1 class="fullname">${character.fullName}</h1>
                <h2 class="hogwarts--house">${character.hogwartsHouse}</h2>
                <h3 class="character--birthdate">${character.birthdate}</h3>                        
                <h4 class="character--childs">${character.children}</h4>
                <p class="played-by">${character.interpretedBy}</p>
                </div>
            </div>`
}

function characterInfoHTML(character) {
    return `<div class="character--img__wrapper">
                <figure>
                    <img class="character--img src="${character.image}" alt="">
                </figure>
            </div>
            <div class="character--details">
               
            </div>`
}
