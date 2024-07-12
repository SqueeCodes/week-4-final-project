const fetchCharacters = async () => {
  const res = await fetch('https://potterapi-fedeperin.vercel.app/en/characters');
  const characters = await res.json();
  return characters;
};

const characterBoardEl = document.querySelector(".characters--board");
const searchInputEl = document.querySelector(".nav-bar__search--bar");
const searchIconEl = document.getElementById("search-icon");

let allCharacters = [];

function getChildrenText(children) {
  return children && children.length > 0 ? children.join(', ') : 'None';
}

function characterHTML(character) {
  return `<div class="characters">
              <figure class="card--background__wrapper">
                  <img class="card--background" src="./assets/wizard card template2.png" alt="">
              </figure>
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

function displayCharacters(characters, pageIndex = 0) {
  const startIndex = pageIndex * 8;
  const endIndex = startIndex + 8;
  characterBoardEl.innerHTML = characters.slice(startIndex, endIndex).map((character) => characterHTML(character)).join("");
}

async function main() {
  allCharacters = await fetchCharacters();
  displayCharacters(allCharacters);
}

async function handleSearch() {
  const query = searchInputEl.value.toLowerCase();
  const filteredCharacters = allCharacters.filter(character => 
      character.fullName.toLowerCase().includes(query) ||
      character.hogwartsHouse.toLowerCase().includes(query) ||
      character.interpretedBy.toLowerCase().includes(query)
  );
  displayCharacters(filteredCharacters);
}

function loadPage() {
  const pageInputEl = document.getElementById("page-input");
  const pageIndex = parseInt(pageInputEl.value, 10) - 1; // Convert to zero-based index
  displayCharacters(allCharacters, pageIndex);
}

function toggleSearchIcon() {
  if (searchInputEl.value.length > 0) {
      searchIconEl.style.display = 'none';
  } else {
      searchIconEl.style.display = 'block';
  }
}

searchInputEl.addEventListener("input", handleSearch);
searchInputEl.addEventListener("input", toggleSearchIcon);

main();
