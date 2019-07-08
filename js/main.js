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

const teams = {
  MENS_A: "ma",
  WOMENS_A: "wa",
  MENS_B: "mb",
  WOMENS_B: "wb"
};

var selected_year = "2018";
var selected_team = teams.MENS_A;

function loadRostersForYear() {
  var year = $("#roster-year-select option:selected").text();
  if (year === "2018") {
    selected_year = "2018";
    if (selected_team === teams.MENS_A) {
      loadRoster(
        ma_roster_2018,
        ma_practice_roster_2018,
        ma_captains_2018,
        ma_jersey_numbers_2018
      );
    } else if (selected_team === teams.WOMENS_A) {
      loadRoster(
        wa_roster_2018,
        wa_practice_roster_2018,
        wa_captains_2018,
        wa_jersey_numbers_2018
      );
    } else if (selected_team === teams.MENS_B) {
      loadRoster(
        mb_roster_2018,
        mb_practice_roster_2018,
        mb_captains_2018,
        mb_jersey_numbers_2018
      );
    } else if (selected_team === teams.WOMENS_B) {
      loadRoster(
        wb_roster_2018,
        wb_practice_roster_2018,
        wb_captains_2018,
        wb_jersey_numbers_2018
      );
    }
  } else if (year === "2017") {
    selected_year = "2017";
    if (selected_team === teams.MENS_A) {
      loadRoster(
        ma_roster_2017,
        ma_practice_roster_2017,
        ma_captains_2017,
        ma_jersey_numbers_2017
      );
    } else if (selected_team === teams.WOMENS_A) {
      loadRoster(
        wa_roster_2017,
        wa_practice_roster_2017,
        wa_captains_2017,
        wa_jersey_numbers_2017
      );
    } else if (selected_team === teams.MENS_B) {
      loadRoster(
        mb_roster_2017,
        mb_practice_roster_2017,
        mb_captains_2017,
        mb_jersey_numbers_2017
      );
    } else if (selected_team === teams.WOMENS_B) {
      loadRoster(
        wb_roster_2017,
        wb_practice_roster_2017,
        wb_captains_2017,
        wb_jersey_numbers_2017
      );
    }
  } else if (year === "2016") {
    selected_year = "2016";
    if (selected_team === teams.MENS_A) {
      loadRoster(
        ma_roster_2016,
        ma_practice_roster_2016,
        ma_captains_2016,
        ma_jersey_numbers_2016
      );
    } else if (selected_team === teams.WOMENS_A) {
      loadRoster(
        wa_roster_2016,
        wa_practice_roster_2016,
        wa_captains_2016,
        wa_jersey_numbers_2016
      );
    } else if (selected_team === teams.MENS_B) {
      loadRoster(
        mb_roster_2016,
        mb_practice_roster_2016,
        mb_captains_2016,
        mb_jersey_numbers_2016
      );
    } else if (selected_team === teams.WOMENS_B) {
      loadRoster(
        wb_roster_2016,
        wb_practice_roster_2016,
        wb_captains_2016,
        wb_jersey_numbers_2016
      );
    }
  }
}

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

    if (typeof jersey_numbers[i] === "undefined") row_number.innerHTML = "";
    else row_number.innerHTML = jersey_numbers[i];

    if (practice_roster.indexOf(roster[i]) != -1) {
      row_name.innerHTML = "<i>" + roster[i] + "</i>";
    } else if (captains.indexOf(roster[i]) != -1) {
      row_name.innerHTML = "<strong>" + roster[i] + "</strong>";
    } else {
      row_name.innerHTML = roster[i];
    }
  }
}

// Load Men's A rosters
$("#view-ma").on("click", () => {
  selected_team = teams.MENS_A;
  if (selected_year === "2018") {
    loadRoster(
      ma_roster_2018,
      ma_practice_roster_2018,
      ma_captains_2018,
      ma_jersey_numbers_2018
    );
  } else if (selected_year === "2017") {
    loadRoster(
      ma_roster_2017,
      ma_practice_roster_2017,
      ma_captains_2017,
      ma_jersey_numbers_2017
    );
  } else if (selected_year === "2016") {
    loadRoster(
      ma_roster_2016,
      ma_practice_roster_2016,
      ma_captains_2016,
      ma_jersey_numbers_2016
    );
  }
});

// Load Men's B rosters
$("#view-mb").on("click", () => {
  selected_team = teams.MENS_B;
  if (selected_year === "2018") {
    loadRoster(
      mb_roster_2018,
      mb_practice_roster_2018,
      mb_captains_2018,
      mb_jersey_numbers_2018
    );
  } else if (selected_year === "2017") {
    loadRoster(
      mb_roster_2017,
      mb_practice_roster_2017,
      mb_captains_2017,
      mb_jersey_numbers_2017
    );
  } else if (selected_year === "2016") {
    loadRoster(
      mb_roster_2016,
      mb_practice_roster_2016,
      mb_captains_2016,
      mb_jersey_numbers_2016
    );
  }
});

// Load Women's A rosters
$("#view-wa").on("click", () => {
  selected_team = teams.WOMENS_A;
  if (selected_year === "2018") {
    loadRoster(
      wa_roster_2018,
      wa_practice_roster_2018,
      wa_captains_2018,
      wa_jersey_numbers_2018
    );
  } else if (selected_year === "2017") {
    loadRoster(
      wa_roster_2017,
      wa_practice_roster_2017,
      wa_captains_2017,
      wa_jersey_numbers_2017
    );
  } else if (selected_year === "2016") {
    loadRoster(
      wa_roster_2016,
      wa_practice_roster_2016,
      wa_captains_2016,
      wa_jersey_numbers_2016
    );
  }
});

// Load Women's B rosters
$("#view-wb").on("click", () => {
  selected_team = teams.WOMENS_B;
  if (selected_year === "2018") {
    loadRoster(
      wb_roster_2018,
      wb_practice_roster_2018,
      wb_captains_2018,
      wb_jersey_numbers_2018
    );
  } else if (selected_year === "2017") {
    loadRoster(
      wb_roster_2017,
      wb_practice_roster_2017,
      wb_captains_2017,
      wb_jersey_numbers_2017
    );
  } else if (selected_year === "2016") {
    loadRoster(
      wb_roster_2016,
      wb_practice_roster_2016,
      wb_captains_2016,
      wb_jersey_numbers_2016
    );
  }
});

//Expand navbar
$("#expand-nav").on("click", function() {
  if ($("nav").hasClass("responsive")) {
    $("nav").removeClass("responsive");
  } else {
    $("nav").addClass("responsive");
  }
});
