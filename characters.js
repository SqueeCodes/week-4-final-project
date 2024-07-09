

async function main() {
  const id = localStorage.getItem("id84")
  const posts = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters?search=${}`);
  const postsData = await posts.json();

  console.log(postsData)
}

main();