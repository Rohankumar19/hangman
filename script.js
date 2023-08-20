const randomAnimalsNames = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

let totalChances = 0;

const hangStandChildren = document.querySelector(".hangstand").children;

for (let index = 0; index < hangStandChildren.length; index++) {
  const element = hangStandChildren[index];
  element.classList.add("display-none");
}

let randomAnimalName = null;

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function giveMeButtonsOnScreen() {
  const rootEl = document.querySelector(".buttons-parent");
  let buttonsDataArray = Array(26).fill(null);
  let i = 65;
  buttonsDataArray = buttonsDataArray.map((value) => {
    return String.fromCharCode(i++);
  });

  buttonsDataArray.forEach((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    rootEl.appendChild(btn);
  });
}

function chooseRandomAnimalName() {
  const blankParentEl = document.querySelector(".blanks_parent");
  const randomNumber = getRandomNumber(0, randomAnimalsNames.length);
  randomAnimalName = randomAnimalsNames[randomNumber].toUpperCase();

  for (let index = 0; index < randomAnimalName.length; index++) {
    const letter = randomAnimalName[index];
    const alpha = document.createElement("p");
    const para = document.createElement("span");
    para.textContent = letter;
    alpha.appendChild(para);
    blankParentEl.appendChild(alpha);
  }
}

giveMeButtonsOnScreen();
chooseRandomAnimalName();

const buttonsParentEl = document.querySelector(".buttons-parent");

let checkStatusGlobal = 0;
const buttonParentClickFunction = function (e) {
  let checkStatus = 0;
  if (e.target.textContent.length === 1) {
    const letterClicked = e.target.textContent;
    console.log(randomAnimalName);

    const allLettersEls = document.getElementsByTagName("span");

    for (let index = 0; index < allLettersEls.length; index++) {
      const spanEl = allLettersEls[index];

      if (letterClicked == spanEl.textContent) {
        spanEl.parentElement.textContent = letterClicked;

        checkStatus++;
        checkStatusGlobal++;
      }
    }

    if (checkStatus != 0) {
      e.target.classList.add("greenBtn");
    } else {
      totalChances++;
      const elementToRemoveClass = document.querySelector(
        `.class-${totalChances}`
      );
      elementToRemoveClass.classList.remove("display-none");
      e.target.classList.add("redBtn");
    }

    e.target.setAttribute("disabled", "disabled");
  }

  if (totalChances == 10) {
    alert("You Lost the Game");
    location.reload();
  }

  if (checkStatusGlobal == randomAnimalName.length) {
    alert("You won the Game bro");
    location.reload();
  }
};

buttonsParentEl.addEventListener("click", buttonParentClickFunction);
