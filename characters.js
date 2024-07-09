const fullCharacterInfoEl = document.querySelector(`.character`)



async function main() {
  const id = localStorage.getItem("id")
  const fullCharacterInfo = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters?search=${}`);
  const fullCharacterInfoData = await fullCharacterInfo.json();
  console.log(fullCharacterInfoData)

  fullCharacterInfoEl.innerHTML = fullCharacterInfoData.map(fullCharacterInfo => 
    `<div class="character--img__wrapper">
      <figure>
          <img class="character--img src="${characters.image}" alt="">
      </figure>
    </div>
    <div class="character--details">
        <h1 class="fullname">${characters.fullName}</h1>
        <h2 class="hogwarts--house">${characters.hogwartsHouse}</h2>
        <h3 class="character--birthdate">${characters.birthdate}</h3>                        
        <h4 class="character--childs">${characters.children}</h4>
        <p class="played-by">${characters.interpretedBy}</p>
    </div>`).join('');
}

main();