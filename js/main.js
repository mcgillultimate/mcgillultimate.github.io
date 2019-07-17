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
