const fetchSpells = async () => {
	const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
	const spells = await res.json()

	return spells
}

fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })

async function main() {
    const spells = await fetch("https://potterapi-fedeperin.vercel.app/en/spells");
    const spellsData = await spells.json();
    const spellBoardEl = document.querySelector(".spell--board");
    spellBoardEl.innerHTML = spellsData.map(
        spell => `<div class="spells">
                    <div class="spell--details">
                        <h1>${spell.spell}</h1>
                        <p class="spell__description">${spell.use}</p>
                    </div>
                </div>` )
    .join("");
}

main()