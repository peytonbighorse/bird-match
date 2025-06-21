// Replace with your actual API key
const EBIRD_API_KEY = "Yg22mh61dq5rs";

const yourBirds = [
  "AMERICAN ROBIN",
  "BLUE JAY",
  "HOUSE FINCH",
  "RED-TAILED HAWK",
  "MOURNING DOVE",
  "BARN SWALLOW",
  "EUROPEAN STARLING",
  "BLACK-CAPPED CHICKADEE",
  "WHITE-BREASTED NUTHATCH",
  "CANADA GOOSE",
  "MALLARD",
  "BELTED KINGFISHER",
  "RED-WINGED BLACKBIRD",
  "DOWNY WOODPECKER",
  "NORTHERN MOCKINGBIRD",
  "YELLOW-RUMPED WARBLER",
  "EASTERN BLUEBIRD",
  "BROWN THRASHER",
  "KILLDEER",
  "CEDAR WAXWING",
  "STELLER'S JAY",
  "BROWN-HEADED COWBIRD",
  "COOPER'S HAWK",
  "DARK-EYED JUNCO",
  "GREAT BLUE HERON",
  "NORTHERN CARDINAL",
  "NORTHERN FLICKER",
  "OSPREY",
  "SANDWICH TERN",
  "SCISSOR-TAILED FLYCATCHER",
];

async function getScientificNames() {
  const res = await fetch(
    `https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json&key=${EBIRD_API_KEY}`
  );
  const taxonomy = await res.json();

  const nameMap = {};

  yourBirds.forEach((name) => {
    const match = taxonomy.find(
      (bird) => bird.comName.toUpperCase() === name.toUpperCase()
    );
    if (match) {
      nameMap[name] = match.sciName;
    } else {
      nameMap[name] = "❌ Not found in eBird taxonomy";
    }
  });

  console.log(nameMap);
}

getScientificNames();
