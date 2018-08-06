//Animate Smooth Scroll
$('#view-about').on('click', function(){
    const about = $('#about').position().top;

    $('html, body').animate({
        scrollTop: about
    }, 900)
});

$('#view-roster').on('click', function(){
    const roster = $('#roster-title').position().top;

    $('html, body').animate({
        scrollTop: roster
    }, 900)
});

$('#view-uandu').on('click', function(){
    const uandu = $('#uandu-title').position().top;

    $('html, body').animate({
        scrollTop: uandu
    }, 900)
});

$('#view-sponsors').on('click', function(){
    const sponsors = $('#sponsor-title').position().top;

    $('html, body').animate({
        scrollTop: sponsors
    }, 900)
});

$('#view-contact').on('click', function(){
    const contact = $('#contact').position().top;

    $('html, body').animate({
        scrollTop: contact
    }, 900)
});

$('#roster-nav a').click(function() {
    $(this).closest("a").addClass('highlight').siblings().removeClass('highlight');
    return(false);   // no default behavior from clicking on the link
});

// Load 2016 rosters
$('#view-2016').on('click', function(){
    const mensA = ["Albert Kragl","Alistair Russell (C)","Angus Boswell","Arthur Denefle","Brenden Kadota","Christophe Tremblay-Joncas","Connor Fowlie","Daniel Tessier","Eamonn Lye","Edouard Levesque","Edward Tu","Elias Hess-Childs","Gabriel Russell","Henry Lu","Jason Galet","Kirk Wright","Lloyd Park","Lucas Ethgen","Neil Wu","Nicolas Swan","Paul Hooley","Simon Reynders","Thomas McAlear (C)","Thomas Ronson","Timmy Woo"]
    const womensA = ["Amy Ker","Amy Song","Celine Huang","Claire Reierson","Daisy Lin (C)","Elsa Chu","Fanny Ma","Hannah Taylor","Helen Thompson (C)","Jacqueline Chi","Jenna Quong","Julia Biris","Katie Hu","Lily Zhu","Louise Podmore","Mariah Chang","Martha Schwarz","Melody Kwong","Noelia Gravotta","Sammie Lo"]
    const mensB = ["Angus McLean","Ben Wong","Dylan Andrew Moran","Georges Cote","Harrison Kim","Jackson Foellmer","Josh Levin","Luca Stabile","Ludovic Cao","Michael Kleinman","Nathan Osman","Nic Levy","Nico Rullmann","Nicolas Vendeville","Odin Guo","Ryan Burgett","Thomas Bertrand","Tony To","William Maccaul"]
    const womensB = ["Bailey Hardy","Carrie Gu","Chloe Rourke","Claire Amiro","Clara Chu","Danielle Findlay","Deifilia To","Inès Petard","Johanna Busch","Kavya Anchuri","Kelly Amrud","Lucia Wang","Mirela Maier","Neala MacLeod Farley","Nicole Pelletier","Paula Figueroa","Sierra Sewell","Zoe Yu"]
    var players = "";
    // Populate Men's A
    for (var i = 0; i < mensA.length; i++) {
        players += mensA[i] + "<br>";
    }
    document.getElementById("mens-A").innerHTML = players;
    players = ""
    // Populate Women's A
    for (var i = 0; i < womensA.length; i++) {
        players += womensA[i] + "<br>";
    }
    document.getElementById("womens-A").innerHTML = players;
    players = ""
    // Populate Men's B
    for (var i = 0; i < mensB.length; i++) {
        players += mensB[i] + "<br>";
    }
    document.getElementById("mens-B").innerHTML = players;
    players = ""
    // Populate Women's B
    for (var i = 0; i < womensB.length; i++) {
        players += womensB[i] + "<br>";
    }
    document.getElementById("womens-B").innerHTML = players;
});

// Load 2017 rosters
$('#view-2017').on('click', function(){
    const mensA = ["Adam Gosselin","Albert Kragl","Brenden Kadota","Christophe Tremblay-Joncas","Christos Cunning","Daniel Tessier","Edward Tu","Elias Hess-Childs","Gabriel Gefter","Georges Cote","Henry Lu","Kirk Wright (C)","Lloyd Park","Lucas Ethgen","Ludovic Cao","Paul Hooley","Thomas McAlear (C)","Thomas Ronson","Thomas Wright","Timmy Woo (C)","Vincent Lee"]
    const womensA = ["Amy Ker (C)","Bea Lehmann","Camille Forest","Celine Huang","Elsa Chu","Georgia Cato","Grace Longson","Ines Petard","Julia Biris (C)","Katie Hu (C)","Kelly Amrud","Lianne Campbell","Lindsay Potts","Lucia Wang","Mariah Chang","Paula Figueroa","Peggie Hsu","Taylor Johansen"]
    const mensB = ["Alexander Li","Angus McLean","Dylan Andrew Golden","Émile Riel-Proulx","Everett Stamm","Finlay Douglas","Harrison Kim","Henry Richardson","Liam Baker","Jackson Spainhoward","Jay Jeong","Jesse Schwartz","Joey Richmond","Nathan Osman","Nico Rullman","Ryan Burgett","Saeesh Mangwani","Sam Hecht","Samuel Grégoire","Thibault Leyne","William MacCaul"]
    const womensB = ["Clara Chu","Carrie Gu","Daria Eisner","Fabiana Chamis","Hanisah Hilmi","Helen Turvene","Jenna Yanke","Kaitlyn Liu","Lauren Benson-Armer","Lynda Au","Mirela Maier","Neala Farley","Nicole Pelletier","Noelia De La Cruz"]
    var players = "";
    // Populate Men's A
    for (var i = 0; i < mensA.length; i++) {
        players += mensA[i] + "<br>";
    }
    document.getElementById("mens-A").innerHTML = players;
    players = ""
    // Populate Women's A
    for (var i = 0; i < womensA.length; i++) {
        players += womensA[i] + "<br>";
    }
    document.getElementById("womens-A").innerHTML = players;
    players = ""
    // Populate Men's B
    for (var i = 0; i < mensB.length; i++) {
        players += mensB[i] + "<br>";
    }
    document.getElementById("mens-B").innerHTML = players;
    players = ""
    // Populate Women's B
    for (var i = 0; i < womensB.length; i++) {
        players += womensB[i] + "<br>";
    }
    document.getElementById("womens-B").innerHTML = players;
});

// Load 2018 rosters
$('#view-2018').on('click', function(){
    const mensA = ["Coming soon"]
    const womensA = ["Coming soon"]
    const mensB = ["Coming soon"]
    const womensB = ["Coming soon"]
    var players = "";
    // Populate Men's A
    for (var i = 0; i < mensA.length; i++) {
        players += mensA[i] + "<br>";
    }
    document.getElementById("mens-A").innerHTML = players;
    players = ""
    // Populate Women's A
    for (var i = 0; i < womensA.length; i++) {
        players += womensA[i] + "<br>";
    }
    document.getElementById("womens-A").innerHTML = players;
    players = ""
    // Populate Men's B
    for (var i = 0; i < mensB.length; i++) {
        players += mensB[i] + "<br>";
    }
    document.getElementById("mens-B").innerHTML = players;
    players = ""
    // Populate Women's B
    for (var i = 0; i < womensB.length; i++) {
        players += womensB[i] + "<br>";
    }
    document.getElementById("womens-B").innerHTML = players;  
});

function loadDefaultRosters() {
    const mensA = ["Adam Gosselin","Albert Kragl","Brenden Kadota","Christophe Tremblay-Joncas","Christos Cunning","Daniel Tessier","Edward Tu","Elias Hess-Childs","Gabriel Gefter","Georges Cote","Henry Lu","Kirk Wright (C)","Lloyd Park","Lucas Ethgen","Ludovic Cao","Paul Hooley","Thomas McAlear (C)","Thomas Ronson","Thomas Wright","Timmy Woo (C)","Vincent Lee"]
    const womensA = ["Amy Ker (C)","Bea Lehmann","Camille Forest","Celine Huang","Elsa Chu","Georgia Cato","Grace Longson","Ines Petard","Julia Biris (C)","Katie Hu (C)","Kelly Amrud","Lianne Campbell","Lindsay Potts","Lucia Wang","Mariah Chang","Paula Figueroa","Peggie Hsu","Taylor Johansen"]
    const mensB = ["Alexander Li","Angus McLean","Dylan Andrew Golden","Émile Riel-Proulx","Everett Stamm","Finlay Douglas","Harrison Kim","Henry Richardson","Liam Baker","Jackson Spainhoward","Jay Jeong","Jesse Schwartz","Joey Richmond","Nathan Osman","Nico Rullman","Ryan Burgett","Saeesh Mangwani","Sam Hecht","Samuel Grégoire","Thibault Leyne","William MacCaul"]
    const womensB = ["Clara Chu","Carrie Gu","Daria Eisner","Fabiana Chamis","Hanisah Hilmi","Helen Turvene","Jenna Yanke","Kaitlyn Liu","Lauren Benson-Armer","Lynda Au","Mirela Maier","Neala Farley","Nicole Pelletier","Noelia De La Cruz"]
    var players = "";
    // Populate Men's A
    for (var i = 0; i < mensA.length; i++) {
        players += mensA[i] + "<br>";
    }
    document.getElementById("mens-A").innerHTML = players;
    players = ""
    // Populate Women's A
    for (var i = 0; i < womensA.length; i++) {
        players += womensA[i] + "<br>";
    }
    document.getElementById("womens-A").innerHTML = players;
    players = ""
    // Populate Men's B
    for (var i = 0; i < mensB.length; i++) {
        players += mensB[i] + "<br>";
    }
    document.getElementById("mens-B").innerHTML = players;
    players = ""
    // Populate Women's B
    for (var i = 0; i < womensB.length; i++) {
        players += womensB[i] + "<br>";
    }
    document.getElementById("womens-B").innerHTML = players;
}

//Expand navbar
$('#expand-nav').on('click', function(){
    if ($('nav').hasClass('responsive')) {
        $('nav').removeClass('responsive');
    }
    else {
        $('nav').addClass('responsive');
    }
});