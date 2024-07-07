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

		