const fetchCharacters = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/characters');
    const characters = await res.json();
    return characters;
};

const characterBoardEl = document.querySelector(".characters--board");
const searchInputEl = document.querySelector(".nav-bar__search--bar");

function getChildrenText(children) {
    return children && children.length > 0 ? children.join(', ') : 'None';
}

function characterHTML(character) {
    return `<div class="characters">
              <div class="character--img__wrapper">
                <figure>
                  <img class="character--img" src="${character.image}" alt="">
                </figure>
              </div>
              <div class="character--details">
                <h1 class="fullname">${character.fullName}</h1>
                <h2 class="hogwarts--house">${character.hogwartsHouse}</h2>
                <h4 class="character--childs">Children: 
                <br> ${getChildrenText(character.children)}</h4>
                <p class="played-by">Played by: <br>${character.interpretedBy}</p>
                <h3 class="character--birthdate">Born: ${character.birthdate}</h3>                        
              </div>
            </div>`;
}

function displayCharacters(characters) {
    characterBoardEl.innerHTML = characters.slice(0, 8).map((character) => characterHTML(character)).join("");
}

async function main() {
    const characters = await fetchCharacters();
    displayCharacters(characters);
}

async function handleSearch() {
    const query = searchInputEl.value.toLowerCase();
    const characters = await fetchCharacters();
    const filteredCharacters = characters.filter(character => 
      character.fullName.toLowerCase().includes(query) ||
      character.hogwartsHouse.toLowerCase().includes(query) ||
      character.interpretedBy.toLowerCase().includes(query)
    );
    displayCharacters(filteredCharacters);
}

searchInputEl.addEventListener("input", handleSearch);

main();
