const url = "./assets/tasks.json";
let json = "";

async function main() {
  json = await getJsonPromised(url);
}

function getJsonPromised(url) {
  return fetch(url).then((data) => data.json());
}

main();
