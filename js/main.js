//Animate Smooth Scroll
$("#view-about").on("click", function() {
  const about = $("#about").position().top;

  $("html, body").animate(
    {
      scrollTop: about
    },
    900
  );
});

$("#view-roster").on("click", function() {
  const roster = $("#roster-title").position().top;

  $("html, body").animate(
    {
      scrollTop: roster
    },
    900
  );
});

$("#view-uandu").on("click", function() {
  const uandu = $("#uandu-title").position().top;

  $("html, body").animate(
    {
      scrollTop: uandu
    },
    900
  );
});

$("#view-sponsors").on("click", function() {
  const sponsors = $("#sponsor-title").position().top;

  $("html, body").animate(
    {
      scrollTop: sponsors
    },
    900
  );
});

$("#view-contact").on("click", function() {
  const contact = $("#contact").position().top;

  $("html, body").animate(
    {
      scrollTop: contact
    },
    900
  );
});

$("#roster-nav a").click(function() {
  $(this)
    .closest("a")
    .addClass("highlight")
    .siblings()
    .removeClass("highlight");
  return false; // no default behavior from clicking on the link
});

function loadRoster(roster, practice_roster, captains, jersey_numbers) {
  var table = document
    .getElementById("roster-table")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  // populate roster and numbers
  for (var i = 0; i < roster.length; i++) {
    var row = table.insertRow(-1);
    var row_number = row.insertCell(0);
    var row_name = row.insertCell(1);

    row_number.innerHTML = jersey_numbers[i];

    if (practice_roster.indexOf(roster[i]) != -1) {
      row_name.innerHTML = "<i>" + roster[i] + "</i>";
    } else if (captains.indexOf(roster[i]) != -1) {
      row_name.innerHTML = "<strong>" + roster[i] + "</strong>";
    } else {
      row_name.innerHTML = roster[i];
    }
  }
}

const ma_roster = [
  "Edward Tu",
  "Thomas Griffin",
  "Thomas McAlear",
  "Paul Hooley",
  "Elias Hess-Childs",
  "Gabriel Gefter",
  "Hayden Stone",
  "Christos Cunning",
  "Thomas Ronson",
  "Vincent Lee",
  "Thomas Wright",
  "Jack Eagles",
  "Jordan Faries",
  "Brenden Kadota",
  "Calvin Coulbury",
  "Christophe Tremblay-Joncas",
  "Albert Kragl",
  "Angus Boswell",
  "Adam Gosselin",
  "Elliot Wong",
  "Timmy Woo"
];
const ma_practice_roster = ["Elliot Wong"];
const ma_captains = [
  "Albert Kragl",
  "Thomas McAlear",
  "Christophe Tremblay-Joncas",
  "Timmy Woo"
];
const ma_jersey_numbers = [
  2,
  3,
  4,
  6,
  7,
  8,
  14,
  15,
  23,
  24,
  26,
  27,
  28,
  33,
  37,
  44,
  47,
  50,
  50,
  60,
  71
];

const wa_roster = [
  "Antoinette Busch",
  "Ines Petard",
  "Carrie Gu",
  "Camille Couture",
  "Helen Turvene",
  "Julia Biris",
  "Paula Figeuroa ",
  "Deborah Su",
  "Amy Ker",
  "Grace Longson",
  "Kelly Amrud",
  "Cindy He",
  "Lianne Campbell",
  "Celine Huang",
  "Lindsay Potts",
  "Lucia Wang",
  "Lucy Core",
  "Jingjing Tong",
  "Bea Lehmann",
  "Caitlin Fowler"
];
const wa_practice_roster = ["Caitlin Fowler"];
const wa_captains = ["Lindsay Potts", "Amy Ker"];
const wa_jersey_numbers = [
  3,
  5,
  6,
  7,
  9,
  10,
  11,
  12,
  14,
  16,
  17,
  18,
  19,
  22,
  23,
  27,
  36,
  66,
  77,
  "NA"
];

const mb_roster = [
  "Nikola Lemic",
  "Luca Fournier",
  "Ryan Purkhart",
  "Derek Allen",
  "Jay Jeong",
  "Liam Baker",
  "Nathan Osman",
  "Everett Stamm",
  "Drake Wong",
  "Elio Abi Younes",
  "Henry Richardson",
  "David Gao",
  "Ryan Burgett",
  "Jackson Foellmer",
  "David How",
  "Samuel Grégoire",
  "Alexander Li ",
  "Theo Malholtra",
  "Fenton Garvie",
  "Sam Hecht",
  "Fin Douglas"
];
const mb_practice_roster = [];
const mb_captains = [];
const mb_jersey_numbers = [
  0,
  2,
  3,
  5,
  6,
  9,
  9,
  10,
  11,
  12,
  14,
  15,
  17,
  22,
  35,
  36,
  49,
  51,
  84,
  97,
  99
];

const wb_roster = [
  "Yasmine Bougueche",
  "Saphia Petard",
  "Haein Yoo",
  "Rachel Chen",
  "Katelyn Liu",
  "Maria Castellanos",
  "Jenna Yanke",
  "Jill (Jingling) Miao",
  "Leonie Laug",
  "Milly Huang",
  "Nicole Dacanay"
];
const wb_practice_roster = [];
const wb_captains = [];
const wb_jersey_numbers = [0, 4, 5, 8, 12, 13, 16, 17, 24, 26, 27];

// Load Men's A rosters
$("#view-ma").on("click", () =>
  loadRoster(ma_roster, ma_practice_roster, ma_captains, ma_jersey_numbers)
);

// Load Men's B rosters
$("#view-mb").on("click", () =>
  loadRoster(mb_roster, mb_practice_roster, mb_captains, mb_jersey_numbers)
);

// Load Women's A rosters
$("#view-wa").on("click", () =>
  loadRoster(wa_roster, wa_practice_roster, wa_captains, wa_jersey_numbers)
);

// Load Women's B rosters
$("#view-wb").on("click", () =>
  loadRoster(wb_roster, wb_practice_roster, wb_captains, wb_jersey_numbers)
);

//Expand navbar
$("#expand-nav").on("click", function() {
  if ($("nav").hasClass("responsive")) {
    $("nav").removeClass("responsive");
  } else {
    $("nav").addClass("responsive");
  }
});
