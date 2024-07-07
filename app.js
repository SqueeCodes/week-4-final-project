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
    console.log(
    spellsData.map(spell => `<div class="spells">
        <div class="spell--details">
          <h1>Spell Name</h1>
          <p class="spell__description">Description of spell</p>
        </div>
      </div>` )
    .join("")
);
}

main()