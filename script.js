
//Set map tile
	var map = L.map('map');
		L.tileLayer('http://{s}.tile.cloudmade.com/a1ed8ecdfd8e41d890fc74beb07cdc63/997/256/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
	}).addTo(map);

//Set map to start at mobile location
		map.locate({setView: true, maxZoom: 16});
	
	function onLocationFound(e) {
		var radius = e.accuracy / 2;
		L.marker(e.latlng).addTo(map)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();
		L.circle(e.latlng, radius).addTo(map);
	}

//Show error if can't get location
	map.on('locationfound', onLocationFound);
	
	function onLocationError(e) {
		alert(e.message);
		}

	map.on('locationerror', onLocationError);


var cafes = [
  {
    x:-122.410957,
    y:37.763115,
    name:"Coffee Bar",
    description:"<div dir=ltr>Mon-Wed 7 am - 8 pm<br>Thu-Fri 7 am - 10 pm<br>Sat 8 am - 8 pm<br>Sun 8 am - 7 pm</div>"
  },
  {
    "x":-122.395996,
    "y":37.762539,
    "name":"Farleys",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 10 pm<br>Sat 7:30 am - 10 pm<br>Sun 8 am - 10 pm</div>"
  },
  {
    "x":-122.419556,
    "y":37.755527,
    "name":"Revolution Cafe",
    "description":"<div dir=ltr>Mon-Wed 9 am - 12:30 am<br>Thu, Sun 9 am - 1 am<br>Fri-Sat 9 am - 2 am</div>"
  },
  {
    "x":-122.398788,
    "y":37.781467,
    "name":"Epicenter Cafe",
    "description":"<div dir=ltr>Mon-Fri 7 am - 10 pm<br>Sat-Sun 8 am - 10 pm<br><br>Wi-fi hours are restricted by a code you get at purchase. 1-2 hour chunks. <br><br>(Personally don't see this as a hassle as it's kinda obnoxious to ride out more than a couple hours on a single cup of coffee. Another purchase for more time is totally reasonable for a high-traffic spot).</div>"
  },
  {
    "x":-122.424133,
    "y":37.773876,
    "name":"Mercury Cafe",
    "description":"<div dir=ltr>Mon-Thu 7 am - 7 pm<br>Fri 7 am - 8 pm<br>Sat 8 am - 8 pm<br>Sun 8 am - 7 pm</div>"
  },
  {
    "x":-122.408943,
    "y":37.799175,
    "name":"Cavalli Books & Cafe",
    "description":"<div dir=ltr>Open till 11pm.</div>"
  },
  {
    "x":-122.438889,
    "y":37.772736,
    "name":"Oakside Cafe",
    "description":"<div dir=ltr>Closes at 5pm-ish.</div>"
  },
  {
    "x":-122.431519,
    "y":37.776009,
    "name":"Alamo Square Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 7 pm<br>Sat-Sun 7:30 am - 6 pm</div>"
  },
  {
    "x":-122.423653,
    "y":37.763584,
    "name":"Cafe Petra",
    "description":"<div dir=ltr>Mon, Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.42646,
    "y":37.763142,
    "name":"Maxfield's House of Caffeine",
    "description":"<div dir=ltr>Mon-Sat 7 am - 9 pm<br>Sun 8 am - 9 pm</div>"
  },
  {
    "x":-122.408684,
    "y":37.776394,
    "name":"BrainWash",
    "description":"<div dir=ltr>Mon-Thu 7 am - 10 pm<br>Fri-Sat 7 am - 11 pm<br>Sun 8 am - 10 pm</div>"
  },
  {
    "x":-122.413208,
    "y":37.803768,
    "name":"Caffe' Capriccio",
    "description":"<div dir=ltr>Mon-Fri 7 am - 6 pm<br>Sat-Sun 8 am - 6 pm</div>"
  },
  {
    "x":-122.45076,
    "y":37.768433,
    "name":"Cole Valley Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 8:30 pm<br>Sat-Sun 6:30 am - 8 pm</div>"
  },
  {
    "x":-122.444984,
    "y":37.770054,
    "name":"Coffee To the People",
    "description":"<div dir=ltr>Mon-Fri 6 am - 8 pm<br>Sat-Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.438622,
    "y":37.779465,
    "name":"Apollo Coffee",
    "description":"<div dir=ltr>Mon-Thu 8 am - 7 pm<br>Fri-Sat 8 am - 6 pm<br>Sun 9 am - 6 pm</div>"
  },
  {
    "x":-122.433243,
    "y":37.760925,
    "name":"Philz Coffee",
    "description":"<div dir=ltr>Mon-Fri 6 am - 8:30 pm<br>Sat-Sun 6:30 am - 8 pm</div>"
  },
  {
    "x":-122.429031,
    "y":37.766926,
    "name":"Church Street Cafe",
    "description":"<div dir=ltr>Mon-Thu 6 am - 11 pm<br>Fri 6 am - 12 am<br>Sat 7 am - 12 am<br>Sun 7 am - 11 pm<br><br>Update by @alexisR: Now there's 2hr free WiFi with code after purchase. Used to be unlimited.</div>"
  },
  {
    "x":-122.399101,
    "y":37.786636,
    "name":"The Roastery (formerly Cafe Trieste)",
    "description":"San Francisco, CA 94105<br><img src=http://cbk0.google.com/cbk?output=thumbnail&amp;w=90&amp;h=68&amp;ll=37.786635,-122.399104>"
  },
  {
    "x":-122.424683,
    "y":37.776981,
    "name":"Cafe La Vie",
    "description":"<div dir=ltr>Mon-Sat 7 am - 7 pm<br>Sun 8 am - 7 pm</div>"
  },
  {
    "x":-122.388451,
    "y":37.760555,
    "name":"Sundance Coffee",
    "description":"<div dir=ltr>Mon-Fri 7 am - 6 pm<br>Sat 8 am - 1 pm</div>"
  },
  {
    "x":-122.412201,
    "y":37.7528,
    "name":"Sundance Coffee",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 7 pm<br>Sat-Sun 7:30 am - 7 pm</div>"
  },
  {
    "x":-122.421303,
    "y":37.755791,
    "name":"Marsh Theatre",
    "description":"<div dir=ltr>Mon-Sun 3:30 pm - 10 pm</div>"
  },
  {
    "x":-122.420197,
    "y":37.788242,
    "name":"Quetzal Internet Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 10 pm<br>Sat-Sun 7:30 am - 10 pm</div>"
  },
  {
    "x":-122.421371,
    "y":37.756416,
    "name":"Ritual Coffee Roasters",
    "description":"<div dir=ltr>Mon-Fri 6 am - 10 pm<br>Sat 7 am - 10 pm<br>Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.411522,
    "y":37.788757,
    "name":"Sugar Cafe",
    "description":"<div dir=ltr>Mon-Fri 6 am - 2 am<br>Sat-Sun 7 am - 2 am</div>"
  },
  {
    "x":-122.393478,
    "y":37.775566,
    "name":"Philz Coffee",
    "description":"<div dir=ltr>Mon-Fri 6 am - 8:30 pm<br>Sat-Sun 6:30 am - 8 pm</div>"
  },
  {
    "x":-122.415123,
    "y":37.763203,
    "name":"Stable Cafe",
    "description":"<div dir=ltr>Mon-Fri 8 am - 4 pm<br>Sat 9 am - 4 pm</div>"
  },
  {
    "x":-122.409592,
    "y":37.752846,
    "name":"Sugarlump",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 10 pm<br>Sat-Sun 7 am - 10 pm</div>"
  },
  {
    "x":-122.432518,
    "y":37.782467,
    "name":"Espress Yourself",
    "description":""
  },
  {
    "x":-122.431381,
    "y":37.769329,
    "name":"Duboce Park Cafe",
    "description":"<div dir=ltr>Mon-Sun 7 am - 8 pm<br>&nbsp;</div>"
  },
  {
    "x":-122.433701,
    "y":37.78878,
    "name":"Royal Ground Coffee",
    "description":"<div dir=ltr>Mon-Fri 6 am - 6 pm<br>Sat 7 am - 6 pm<br>Sun 8 am - 6 pm</div>"
  },
  {
    "x":-122.411346,
    "y":37.794537,
    "name":"Gallery Cafe",
    "description":"<div dir=ltr>weekdays<br>6:30am-7pm<br>weekends<br>7:30am-7:30pm</div>"
  },
  {
    "x":-122.416634,
    "y":37.795658,
    "name":"The Chameleon Cafe",
    "description":"<div dir=ltr>Mon-Thu 7 am - 3 pm<br>Fri 7 am - 7 pm<br>Sat-Sun 8 am - 7 pm</div>"
  },
  {
    "x":-122.421043,
    "y":37.793503,
    "name":"It's a Grind",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 10 pm<br>Sat-Sun 7 am - 10 pm</div>"
  },
  {
    "x":-122.432236,
    "y":37.771088,
    "name":"Bean There",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 7 pm<br>Sat-Sun 7 am - 7 pm</div>"
  },
  {
    "x":-122.409477,
    "y":37.788174,
    "name":"Cafe La Taza",
    "description":"<div dir=ltr>Mon-Sat 6 am - 7 pm</div>"
  },
  {
    "x":-122.405174,
    "y":37.786034,
    "name":"Coffee Bean & Tea Leaf",
    "description":"<div dir=ltr>Mon-Thu 6 am - 10 pm<br>Fri 6 am - 10:30 pm<br>Sat 7 am - 10:30 pm<br>Sun 7 am - 10 pm</div>"
  },
  {
    "x":-122.413704,
    "y":37.752712,
    "name":"Haus Coffee",
    "description":"<div dir=ltr>Mon-Fri 6 am - 9 pm<br>Sat-Sun 9 am - 9 pm</div>"
  },
  {
    "x":-122.410393,
    "y":37.75753,
    "name":"Pirate Cat Radio Cafe",
    "description":"<div dir=ltr>Mon-Sun 7 am - 11 pm</div>"
  },
  {
    "x":-122.469254,
    "y":37.737411,
    "name":"The Greenhouse",
    "description":"<div dir=ltr>Mon-Fri 7 am - 7 pm<br>Sat-Sun 8 am - 7 pm</div>"
  },
  {
    "x":-122.441429,
    "y":37.777218,
    "name":"Matching Half Cafe",
    "description":"<div dir=ltr>Monday - Thursday 7:00 am -8:00 pm<br>Friday 7:00am - 9:00 pm<br>Saturday 8:00am - 9:00pm<br>Sunday  8:00 am - 8:00 pm</div>"
  },
  {
    "x":-122.408241,
    "y":37.776089,
    "name":"Radius",
    "description":"<div dir=ltr>Mon 8 am - 9 pm<br>Tue-Wed 8 am - 11 pm<br>Thu-Fri 8 am - 1 am<br>Sat 11 am - 1 am<br>Sun 11 am - 6 pm</div>"
  },
  {
    "x":-122.399284,
    "y":37.766506,
    "name":"Axis Cafe",
    "description":"<div dir=ltr>Mon-Fri 8 am - 9 pm<br>Sat-Sun 10 am - 3 pm</div>"
  },
  {
    "x":-122.411491,
    "y":37.759003,
    "name":"The Atlas Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 10 pm<br>Sat 8 am - 10 pm<br>Sun 8 am - 8 pm</div>"
  },
  {
    "x":-122.409302,
    "y":37.757477,
    "name":"Progressive Grounds",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 6 pm<br>Sat-Sun 7:30 am - 8 pm</div>"
  },
  {
    "x":-122.417686,
    "y":37.738953,
    "name":"Progressive Grounds",
    "description":"<div dir=ltr>Hours not listed on web. Help us out by sending them to @joshsprague or @kidkameleon.<br></div>"
  },
  {
    "x":-122.420067,
    "y":37.745102,
    "name":"SoCha Cafe",
    "description":"<div dir=ltr>Via web tip, hours are around 10-5 M-F right now.</div>"
  },
  {
    "x":-122.420937,
    "y":37.75185,
    "name":"Muddy's Coffee House",
    "description":""
  },
  {
    "x":-122.430862,
    "y":37.762634,
    "name":"H Cafe",
    "description":"<div dir=ltr>Mon-Fri 6 am - 9 pm<br>Sat-Sun 7 am - 8 pm</div>"
  },
  {
    "x":-122.421265,
    "y":37.757465,
    "name":"Mission Creek Cafe",
    "description":""
  },
  {
    "x":-122.422928,
    "y":37.75494,
    "name":"Cafe Que Tal",
    "description":""
  },
  {
    "x":-122.509018,
    "y":37.76041,
    "name":"Java Beach Cafe",
    "description":"<div dir=ltr>Mon-Fri 5:30 am - 11 pm<br>Sat-Sun 6 am - 11 pm</div>"
  },
  {
    "x":-122.462601,
    "y":37.783127,
    "name":"Blue Danube Coffee House",
    "description":"<div dir=ltr>Mon-Thu, Sun 7 am - 10 pm<br>Fri-Sat 7 am - 11 pm</div>"
  },
  {
    "x":-122.428345,
    "y":37.7631,
    "name":"Morning Due Cafe",
    "description":"<div dir=ltr>Mon-Sun 7 am - 9:30 pm</div>"
  },
  {
    "x":-122.430214,
    "y":37.771301,
    "name":"Le Cafe Du Soleil",
    "description":"<div dir=ltr>Mon-Sat 7 am - 10 pm<br>Sun 8 am - 9 pm<br><br>Note: Outlets are sparse.</div>"
  },
  {
    "x":-122.430847,
    "y":37.772274,
    "name":"Cafe International",
    "description":"<div dir=ltr>Tue-Thu, Sat 7 am - 10 pm<br>Fri 7 am - 12 am<br>Sun 8 am - 10 pm</div>"
  },
  {
    "x":-122.435104,
    "y":37.77132,
    "name":"Grind",
    "description":"<div dir=ltr>7:00am to 8:00pm, Monday - Friday <br>7:00am to 6:00pm, Saturday <br>8:00am to 6:00pm, Sunday</div>"
  },
  {
    "x":-122.437958,
    "y":37.77507,
    "name":"Bean Bag Cafe",
    "description":"<div dir=ltr>Mon-Fri 7 am - 10 pm<br>Sat 7:30 am - 10 pm<br>Sun 8 am - 10 pm</div>"
  },
  {
    "x":-122.438248,
    "y":37.77552,
    "name":"Mojo Bicycle CafÃ©",
    "description":"<div dir=ltr>Mon-Wed 7 am - 10 pm<br>Thu-Fri 7 am - 12 am<br>Sat 8 am - 12 am<br>Sun 8 am - 5 pm</div>"
  },
  {
    "x":-122.43837,
    "y":37.776951,
    "name":"Cafe Abir",
    "description":"<div dir=ltr>Mon-Sat 6 am - 11 pm<br>Sun 6 am - 9 pm</div>"
  },
  {
    "x":-122.449921,
    "y":37.766117,
    "name":"Reverie Coffee Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 9 pm<br>Sat-Sun 7:30 am - 7:30 pm</div>"
  },
  {
    "x":-122.434967,
    "y":37.785545,
    "name":"Cafe Murano",
    "description":"<div dir=ltr>Mon-Fri 6 am - 7 pm<br>Sat 7 am - 8 pm<br>Sun 7 am - 5 pm</div>"
  },
  {
    "x":-122.395149,
    "y":37.777439,
    "name":"The Creamery",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 9 pm<br>Sat-Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.401939,
    "y":37.786522,
    "name":"The Grove Cafe Yerba Buena",
    "description":"<div dir=ltr>Mon-Fri 7 am - 11 pm<br>Sat-Sun 8 am - 11 pm<br><br>30 minutes of Wi-Fi per </div>"
  },
  {
    "x":-122.481285,
    "y":37.74305,
    "name":"Trolley Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 5:30 pm<br>Sat-Sun 6:30 am - 4 pm</div>"
  },
  {
    "x":-122.4786,
    "y":37.763714,
    "name":"iCafe",
    "description":"<div dir=ltr>Mon 7 am - 7 pm<br>Tue-Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.456718,
    "y":37.724262,
    "name":"Caffe D'Melanio Gourmet Coffee",
    "description":"<div dir=ltr>Mon-Wed 7 am - 5 pm<br>Thu-Sat 7 am - 9 pm</div>"
  },
  {
    "x":-122.454712,
    "y":37.723316,
    "name":"Java Jitters",
    "description":"<div dir=ltr>Mon-Fri 7 am - 8 pm<br>Sat 8 am - 6 pm<br>Sun 8 am - 2 pm</div>"
  },
  {
    "x":-122.460182,
    "y":37.724983,
    "name":"Java On Ocean Coffee House",
    "description":""
  },
  {
    "x":-122.462509,
    "y":37.72504,
    "name":"Kings Coffee",
    "description":""
  },
  {
    "x":-122.472435,
    "y":37.763996,
    "name":"Old Jerusalem Cafe",
    "description":"<div dir=ltr>Mon-Sat 6 am - 7 pm<br>Sun 9 am - 7 pm</div>"
  },
  {
    "x":-122.464394,
    "y":37.764301,
    "name":"The Beanery",
    "description":""
  },
  {
    "x":-122.466454,
    "y":37.763817,
    "name":"Beanery",
    "description":""
  },
  {
    "x":-122.439857,
    "y":37.716187,
    "name":"Claddagh Coffee",
    "description":"<div dir=ltr>Mon-Sat 6 am - 7 pm<br>Sun 7 am - 4 pm</div>"
  },
  {
    "x":-122.434242,
    "y":37.733803,
    "name":"Pebble's Cafe",
    "description":""
  },
  {
    "x":-122.421745,
    "y":37.744114,
    "name":"Cafe Seventy8",
    "description":"<div dir=ltr>Mon-Fri 6 am - 7 pm<br>Sat-Sun 7 am - 7 pm</div>"
  },
  {
    "x":-122.422569,
    "y":37.741657,
    "name":"Nervous Dog Coffee",
    "description":"<div dir=ltr>Mon-Sat 7 am - 6 pm<br>Sun 8 am - 4 pm</div>"
  },
  {
    "x":-122.426376,
    "y":37.742207,
    "name":"Cafe XO",
    "description":"<div dir=ltr>Mon-Sat 6 am - 6 pm</div>"
  },
  {
    "x":-122.420029,
    "y":37.745472,
    "name":"Caffeinated Comics",
    "description":"<div dir=ltr>Mon-Fri 8am - 6pm<br>Sat-Sun 9:30am - 5pm</div>"
  },
  {
    "x":-122.422371,
    "y":37.745571,
    "name":"Cup of Java",
    "description":""
  },
  {
    "x":-122.413818,
    "y":37.746887,
    "name":"Park Bench Cafe",
    "description":""
  },
  {
    "x":-122.413635,
    "y":37.74715,
    "name":"Charlie's Deli Cafe",
    "description":""
  },
  {
    "x":-122.397858,
    "y":37.759857,
    "name":"Thinkers Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 4 pm<br>Sat-Sun 7:30 am - 4 pm</div>"
  },
  {
    "x":-122.398346,
    "y":37.762394,
    "name":"Chatz Coffee",
    "description":""
  },
  {
    "x":-122.403549,
    "y":37.771023,
    "name":"Caffe Moda",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 4 pm</div>"
  },
  {
    "x":-122.390724,
    "y":37.779129,
    "name":"Sohberts",
    "description":"<div dir=ltr>Mon-Fri 7:30 am - 5 pm</div>"
  },
  {
    "x":-122.495811,
    "y":37.776031,
    "name":"Simple Pleasures Cafe",
    "description":"<div dir=ltr>Mon-Sun 6am - 11pm</div>"
  },
  {
    "x":-122.498741,
    "y":37.775406,
    "name":"Nibs",
    "description":"<div dir=ltr>Tue-Fri 7 am - 2 pm<br>Sat 7:30 am - 2 pm<br>Sun 7:30 am - 12 pm</div>"
  },
  {
    "x":-122.493324,
    "y":37.779819,
    "name":"Art Bistro",
    "description":""
  },
  {
    "x":-122.498154,
    "y":37.775463,
    "name":"Zephyr Caffe",
    "description":"<div dir=ltr>Mon-Fri 7 am - 11 pm<br>Sat-Sun 8 am - 11 pm</div>"
  },
  {
    "x":-122.492683,
    "y":37.78141,
    "name":"Garden House Cafe",
    "description":"<div dir=ltr>Mon - Sat: 6:30 AM - 7:30 PM<br>Sun: 7 AM - 7 PM</div>"
  },
  {
    "x":-122.481194,
    "y":37.783825,
    "name":"Bazaar Cafe",
    "description":"<div dir=ltr>Mon-Fri 9 am - 10 pm<br>Sat 8 am - 10 pm</div>"
  },
  {
    "x":-122.470535,
    "y":37.782848,
    "name":"Cafe La Flore",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 9:30 pm<br>Sat-Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.473167,
    "y":37.780525,
    "name":"Lou's Cafe",
    "description":"<div dir=ltr>Mon-Fri 8 am - 7 pm<br>Sat 8 am - 4 pm</div>"
  },
  {
    "x":-122.476357,
    "y":37.780338,
    "name":"Royal Ground Coffee",
    "description":""
  },
  {
    "x":-122.476601,
    "y":37.784393,
    "name":"California Grind",
    "description":""
  },
  {
    "x":-122.465477,
    "y":37.785145,
    "name":"Kaju Foods & Trading Co",
    "description":"<div dir=ltr>Mon-Wed 6 am - 4 pm<br>Thu-Fri 6 am - 6 pm<br>Sat-Sun 7 am - 6 pm</div>"
  },
  {
    "x":-122.468735,
    "y":37.780636,
    "name":"Coffee Break",
    "description":""
  },
  {
    "x":-122.479218,
    "y":37.780186,
    "name":"Javacat Coffee",
    "description":""
  },
  {
    "x":-122.458374,
    "y":37.775295,
    "name":"Velo Rouge Cafe",
    "description":"<div dir=ltr>Mon-Tue 6:30 am - 5 pm<br>Wed-Fri 6:30 am - 10 pm<br>Sat 8 am - 10 pm<br>Sun 8 am - 5 pm</div>"
  },
  {
    "x":-122.450897,
    "y":37.773281,
    "name":"Sacred Grounds Coffee House",
    "description":""
  },
  {
    "x":-122.447807,
    "y":37.773556,
    "name":"Emma's Coffee House",
    "description":"<div dir=ltr>Mon-Fri 6 am - 8 pm<br>Sat-Sun 7 am - 8 pm</div>"
  },
  {
    "x":-122.448563,
    "y":37.782139,
    "name":"Nani's Coffee",
    "description":"<div dir=ltr>Mon-Fri 7 am - 5:30 pm<br>Sat 8:30 am - 5 pm<br>Sun 8:30 am - 3 pm</div>"
  },
  {
    "x":-122.452141,
    "y":37.781769,
    "name":"Royal Ground Coffee",
    "description":"<div dir=ltr>Mon-Fri 6 am - 6 pm<br>Sat 7 am - 6 pm<br>Sun 8 am - 6 pm</div>"
  },
  {
    "x":-122.451096,
    "y":37.786301,
    "name":"Rigolo CafÃ©",
    "description":"<div dir=ltr>Mon-Sat 7:30 am - 8:30 pm<br>Sun 7:30 am - 4 pm</div>"
  },
  {
    "x":-122.456841,
    "y":37.781666,
    "name":"Cup & Cake Cafe",
    "description":""
  },
  {
    "x":-122.451698,
    "y":37.799774,
    "name":"Acre Cafe",
    "description":""
  },
  {
    "x":-122.388145,
    "y":37.781502,
    "name":"South Beach Cafe",
    "description":"<div dir=ltr>Mon-Fri 6 am - 10 pm<br>Sat 8 am - 10 pm<br>Sun 8 am - 9 pm</div>"
  },
  {
    "x":-122.404129,
    "y":37.77446,
    "name":"Caffe Roma Coffee Roasting Co",
    "description":""
  },
  {
    "x":-122.42189,
    "y":37.772995,
    "name":"Caffe Trieste",
    "description":""
  },
  {
    "x":-122.393227,
    "y":37.752506,
    "name":"Caffe Trieste",
    "description":""
  },
  {
    "x":-122.410126,
    "y":37.775204,
    "name":"Wicked Grounds",
    "description":"<div dir=ltr>Mon-Thu 10 am - 10 pm<br>Fri 10 am - 2 am<br>Sat 11 am - 2 am<br>Sun 11 am - 8 pm<br><br>Heads up: Kink-affiliated, but vanilla friendly.</div>"
  },
  {
    "x":-122.411621,
    "y":37.773605,
    "name":"Pick Me Up Cafe",
    "description":""
  },
  {
    "x":-122.408524,
    "y":37.776974,
    "name":"Sightglass Coffee - HONORABLE MENTION",
    "description":"<div dir=ltr>Mon-Sat 7amâ6pm<br>Sundays 8am-6pm</div>"
  },
  {
    "x":-122.419487,
    "y":37.766487,
    "name":"Bay Blend Coffee & Tea",
    "description":""
  },
  {
    "x":-122.422218,
    "y":37.768154,
    "name":"Carlin's Cafe",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 8 pm<br>Sat-Sun 6:30 am - 7 pm</div>"
  },
  {
    "x":-122.42334,
    "y":37.75985,
    "name":"Java Supreme",
    "description":"<div dir=ltr>Mon-Sun 6:30 am - 7 pm</div>"
  },
  {
    "x":-122.409584,
    "y":37.752548,
    "name":"L's Caffe",
    "description":"<div dir=ltr>Mon-Fri 6 am - 9 pm<br>Sat-Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.416359,
    "y":37.753994,
    "name":"Little Spot Cafe",
    "description":"<div dir=ltr>Mon-Sun 7 am - 6 pm</div>"
  },
  {
    "x":-122.42572,
    "y":37.761326,
    "name":"Dolores Park Cafe",
    "description":"<div dir=ltr>Mon-Thu 7am - 8 pm<br>Fri 7am - 10 pm<br>Sat-Sun 7am - 8 pm<br></div>"
  },
  {
    "x":-122.418922,
    "y":37.752274,
    "name":"Cafe La Boheme",
    "description":"<div dir=ltr>Mon-Sat 6 am - 10:30 pm<br>Sun 6 am - 9 pm</div>"
  },
  {
    "x":-122.41523,
    "y":37.765301,
    "name":"Soccer Cafe",
    "description":"<div dir=ltr>Mon-Fri 7 am - 8 pm<br>Sat 8 am - 6 pm</div>"
  },
  {
    "x":-122.41407,
    "y":37.752449,
    "name":"Philz Coffee",
    "description":"<div dir=ltr>Mon-Fri 6 am - 8:30 pm<br>Sat-Sun 6:30 am - 8:30 pm</div>"
  },
  {
    "x":-122.421364,
    "y":37.758102,
    "name":"Javalencia Cafe",
    "description":""
  },
  {
    "x":-122.425018,
    "y":37.748554,
    "name":"Luv a Java",
    "description":"<div dir=ltr>Mon-Fri 6 am - 7 pm<br>Sat-Sun 7 am - 7 pm</div>"
  },
  {
    "x":-122.436134,
    "y":37.751419,
    "name":"Cafe Ponte",
    "description":"<div dir=ltr>Mon-Fri 6:30 am - 5 pm<br>Sat 7 am - 5 pm<br>Sun 8 am - 5 pm</div>"
  },
  {
    "x":-122.431168,
    "y":37.75156,
    "name":"Bernie's",
    "description":""
  },
  {
    "x":-122.418587,
    "y":37.757481,
    "name":"Cafe La Taza",
    "description":"<div dir=ltr>Mon-Fri 6 am - 8 pm<br>Sat 7 am - 8 pm<br>Sun 7 am - 6 pm</div>"
  },
  {
    "x":-122.436707,
    "y":37.760979,
    "name":"Cafe La Taza",
    "description":""
  },
  {
    "x":-122.409637,
    "y":37.788216,
    "name":"Cafe La Taza",
    "description":"<div dir=ltr>Mon-Sat 6 am - 7 pm</div>"
  },
  {
    "x":-122.430038,
    "y":37.764366,
    "name":"Cafe D' Amore",
    "description":""
  },
  {
    "x":-122.435173,
    "y":37.759125,
    "name":"Spike's Coffees & Tea",
    "description":"<div dir=ltr>Mon-Sat 6:30 am - 7 pm<br>Sun 7:30 am - 7 pm</div>"
  },
  {
    "x":-122.438698,
    "y":37.760857,
    "name":"Queen Malika Cafe",
    "description":"<div dir=ltr>Mon-Sun 6:30 am - 7 pm</div>"
  },
  {
    "x":-122.415131,
    "y":37.788403,
    "name":"Cup-A-Joe Coffee House",
    "description":"<div dir=ltr>Mon-Fri 6 am - 10 pm<br>Sat 7 am - 10 pm<br>Sun 7 am - 9 pm</div>"
  },
  {
    "x":-122.469254,
    "y":37.737411,
    "name":"Greenhouse Cafe",
    "description":"<div dir=ltr>Mon-Fri 7 am - 7 pm<br>Sat-Sun 8 am - 7 pm</div>"
  },
  {
    "x":-122.438583,
    "y":37.777821,
    "name":"Oasis Cafe",
    "description":"Mon-Sun 6am-11pm"
  },
  {
    "x":-122.394173,
    "y":37.775906,
    "name":"Panera Bread",
    "description":"<div dir=ltr>Mon-Fri 6 am - 9:30 pm<br>Sat-Sun 7 am - 9:30 pm</div>"
  },
  {
    "x":-122.396194,
    "y":37.780689,
    "name":"Darwin Cafe",
    "description":"<span style=font-size:11px;color:rgb(85, 85, 85);line-height:13px>Mon-Fri 8 am - 8 pm</span>"
  },
  {
    "x":-122.399979,
    "y":37.784798,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.394859,
    "y":37.789917,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.401985,
    "y":37.789757,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.40184,
    "y":37.795063,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.40686,
    "y":37.789383,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.415131,
    "y":37.778374,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.417519,
    "y":37.776703,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.430397,
    "y":37.797657,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.438622,
    "y":37.800606,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.453262,
    "y":37.786255,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.465965,
    "y":37.764137,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.431641,
    "y":37.751308,
    "name":"Starbucks",
    "description":""
  },
  {
    "x":-122.421783,
    "y":37.760513,
    "name":"The Summit - CLOSED",
    "description":"<span style=font-size:11px;color:rgb(85, 85, 85);line-height:16px><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;outline-width:0px;outline-style:initial;outline-color:initial;font-size:11px;vertical-align:baseline;background-color:transparent;line-height:13px>CLOSED</p><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;outline-width:0px;outline-style:initial;outline-color:initial;font-size:11px;vertical-align:baseline;background-color:transparent;line-height:13px><br></p><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;outline-width:0px;outline-style:initial;outline-color:initial;font-size:11px;vertical-align:baseline;background-color:transparent;line-height:13px>Leaving on here to get the word out.</p></span>"
  },
  {
    "x":-122.434013,
    "y":37.733814,
    "name":"Cafe Bello",
    "description":""
  },
  {
    "x":-122.409683,
    "y":37.789101,
    "name":"Hotel Rex",
    "description":"<div dir=ltr>Lobby bar has free WiFi and is recommended as a nice work spot.</div>"
  },
  {
    "x":-122.453232,
    "y":37.78611,
    "name":"Special Starbucks",
    "description":"<div dir=ltr>Special Starbucks is open 24/7 most days of the week. Closes at 1am Sunday night/Monday morning) and opens again at 4am. Also, tends to get really crowded in the earlier evening (9pm-11pm).</div>"
  },
  {
    "x":-122.416901,
    "y":37.771717,
    "name":"Sage Lounge",
    "description":"<div dir=ltr>Mon-Sat 7 am - 5 pm</div>"
  },
  {
    "x":-122.42173,
    "y":37.764515,
    "name":"Muddy Waters Coffee House",
    "description":"<div dir=ltr>Open past 7pm, but hours not posted online.</div>"
  },
  {
    "x":-122.428864,
    "y":37.785786,
    "name":"YakiniQ",
    "description":""
  },
  {
    "x":-122.419098,
    "y":37.790997,
    "name":"Contraband Coffee Bar",
    "description":"<div dir=ltr>Hours:<br>Mon-Sat 7 am - 10 pm<br>Sun 8 am - 8 pm</div>"
  },
  {
    "x":-122.428986,
    "y":37.75169,
    "name":"Martha & Bros Coffee Company",
    "description":"<div dir=ltr>Hours:<br>Mon-Fri 5:30 am - 8 pm<br>Sat-Sun 6 am - 7 pm</div>"
  },
  {
    "x":-122.466385,
    "y":37.740555,
    "name":"Noah's Bagels",
    "description":"<div dir=ltr>Heads up: No plugs<br><br>Recommended by @fabiansf</div>"
  },
  {
    "x":-122.396675,
    "y":37.788498,
    "name":"Specialty's",
    "description":"<div><font face=arial size=2>Open Mon-Fri 6am-6pm.</font></div><div style=font-family:arial;font-size:10pt><br>Recommended by @fabiansf</div><div style=font-family:arial;font-size:10pt><br>&nbsp;</div><font face=arial size=2>San Francisco, CA 94105</font><br><a href=http://maps.google.com/maps/place?ftid=0x8085807cb305bb77:0x1b2dbdd409a4eee6&amp;q=500+howard+st&amp;hl=en&amp;cd=1&amp;cad=src:ppiwlink&amp;ei=ZniMT5OBFYSuoQS26MlA&amp;sig2=v39mUBzeCSGcYeUOUyscAw&amp;dtab=5 style=font-family:arial;font-size:10pt target=_blank><img src=http://cbk0.google.com/cbk?output=thumbnail&amp;w=90&amp;h=68&amp;ll=37.788497,-122.396677&amp;thumb=0></a>"
  },
  {
    "x":-122.414093,
    "y":37.80286,
    "name":"901 Columbus",
    "description":"<div><dt style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;font-size:11px;vertical-align:baseline;background-color:rgb(255, 255, 255);font-weight:bold;color:rgb(68, 68, 68);line-height:16px;text-align:left>Hours:</dt><dd style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;font-size:11px;vertical-align:baseline;background-color:rgb(255, 255, 255);color:rgb(68, 68, 68);line-height:16px;text-align:left><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;vertical-align:baseline;background-color:transparent;line-height:13px>Mon-Sun 7 am - 10 pm</p><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;vertical-align:baseline;background-color:transparent;line-height:13px><br></p><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;vertical-align:baseline;background-color:transparent;line-height:13px><span style=color:rgb(51, 51, 51);font-size:14px;line-height:18px;text-align:-webkit-auto>Lots of seating, Wi-fi, kitchen, and open until 10pm. Cash only. @AlanHogan</span></p><p style=margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-style:initial;border-color:initial;vertical-align:baseline;background-color:transparent;line-height:13px>&nbsp;</p></dd></div><img src=http://cbk0.google.com/cbk?output=thumbnail&amp;w=90&amp;h=68&amp;ll=37.802860,-122.414090&amp;thumb=0>"
  },
  {
    "x":-122.422768,
    "y":37.776993,
    "name":"Arlequin Cafe & Food-To-Go",
    "description":"<div dir=ltr>Hours:<br>Mon-Fri 8 am - 8 pm<br>Sat 9 am - 7 pm<br>Sun 9 am - 6 pm<br><br>Seems like Wi-Fi can get inconsistent if a lot of people are using it at once.</div>"
  },
  {
    "x":-122.426064,
    "y":37.775917,
    "name":"Momi Toby's Revolution Cafe",
    "description":"<div dir=ltr>Hours:<br>Mon-Thu 7:30 am - 10 pm<br>Fri-Sat 7:30 am - 12 am<br>Sun 8 am - 10 pm<br><br>Torn about adding this one. Used to be wi-fi free in favor of conversation and had a great vibe. Still nice, but people on laptops drag down the Euro cafe atmosphere. Try to find technology-free reasons to visit.</div>"
  },
  {
    "x":-122.401436,
    "y":37.774326,
    "name":"Showplace Caffe",
    "description":"<div dir=ltr>Hours: M-F 8am - 4pm<br><br>Recommended by @miketwardos<br>Has Sightglass coffee</div>"
  },
  {
    "x":-122.42173,
    "y":37.805656,
    "name":"Blackpoint Cafe",
    "description":"<div>Recommended by @benchun</div><div><br>&nbsp;</div><div>Message me at @joshsprague if you know the hours.</div><div><br>&nbsp;</div><div><br>&nbsp;</div>"
  },
  {
    "x":-122.412109,
    "y":37.752705,
    "name":"Bello Coffee & Tea",
    "description":"<div dir=ltr>Mon-Fri 6 am - 6:30 pm<br>Sat-Sun 7:30 am - 6:30 pm<br><br>Added by @alexisR - Chill staff. Plenty of outlets. No WiFi time limit.</div>"
  },
  {
    "x":-122.415894,
    "y":37.775318,
    "name":"Cumaica Coffee",
    "description":"<div>M-F: 5:30am-8:30pm</div><div>Wknd.: 5:30am-8pm</div><div><br>&nbsp;</div><div>Added by @alexisR - Not so many outlets &amp; loud pop music. Not very crowded ever.</div>"
  }
];

//Hand coded markers
/* var coffeeIcon1 = L.icon({
	iconUrl: 'coffee1.png',
	iconSize: [30, 30],
});
*/

//L.marker([37.762539, -122.395996]).addTo(map);
for (var i=0; i<cafes.length; i++) {
L.marker([cafes[i]["y"], cafes[i]["x"]]).bindPopup(cafes[i]["name"]+"<br>"+cafes[i]["description"]).addTo(map);
}
//  Unused Test code
//	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
//	circle.bindPopup("I am a circle.");
//	polygon.bindPopup("I am a polygon.");
	
//	var popup = L.popup()
//	.setLatLng([51.5, -0.09])
//	.setContent("I am a standalone popup.")
//	.openOn(map);

//var josh = function() {
//for (var i=0; i<3; i++) {
//	L.marker([cafes[i][y], cafes[i][x]]).addTo(map);
//}
//}
