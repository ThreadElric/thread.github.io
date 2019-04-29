// imports
define(function(require){
	// models
	const Journey = require('./models/Journey');
	// views
	const JourneyView = require('./page/journey/views/JourneyView');

	let journey = [];

	journey.push({
		start:"Tours",
		end:"Sorigny",
		distance:26.1,
	});

	journey.push({
		end:"Sainte-Maure-de-Touraine",
		distance:20.7,
	});

	journey.push({
		end:"Les Ormes",
		distance:20.6,
	});

	journey.push({
		end:"Châtellerault",
		distance:27,
	});

	journey.push({
		end:"Poitiers",
		distance:42,
	});

	journey.push({
		end:"Poitiers",
		duration: 2
	});

	journey.push({
		start:"Poitiers",
		end: "Coulombiers",
		distance:31,
	});

	journey.push({
		start: "Coulombiers",
		end: "Lusignan",
		distance: 8,
	});

	journey.push({
		start: "Paris",
		end: "Paris",
		duration: 17,
	});

	journey.push({
		start: "Lusignan",
		end:"Saint-Sauvant",
		distance:12.6,
	});

	journey.push({
		end:"Melle",
		distance:35.5,
	});

	journey.push({
		end:"Villefolet",
		distance: 22,
	});

	journey.push({
		end:"Aulnay-de-Saintonge",
		distance: 20.7,
	});

	journey.push({
		end:"Saint-Jean-d’Angély",
		distance:23.4,
	});

	journey.push({
		end: "Saintes",
		distance : 35.5,
	});

	journey.push({
		end: "Pons",
		distance : 22.6,
	});

	journey.push({
		end: "Mirambeau",
		distance : 32.5,
	});

	journey.push({
		end: "Saint-Aubain-de-Blaye",
		distance : 16.7,
	});

	journey.push({
		end: "Blaye",
		distance : 20.5,
	});

	journey.push({
		end: "Le Bouscat",
		distance : 36.3,
	});

	journey.push({
		end: "Bordeaux",
		distance : 16.7,
	});

	journey.push({
		end: "Bordeaux",
	});

	journey.push({
		end: "Gradignan",
		distance : 15.7,
	});

	journey.push({
		end: "Le Barp",
		distance : 26.5,
	});

	journey.push({
		end: "Le Muret",
		distance : 26.7,
	});

	journey.push({
		end: "Labouheyre",
		distance : 31.2,
	});

	journey.push({
		end: "Onesse-et-Laharie",
		distance : 23,
	});

	journey.push({
		end: "Taller",
		distance : 25.1,
	});

	journey.push({
		end: "Dax",
		distance : 24.4,
	});

	journey.push({
		end: "Sordes-l'Abbaye",
		distance : 25,
	});

	journey.push({
		end: "Bergouey-Viellenave",
		distance : 20,
	});

	journey.push({
		end: "Ostabat",
		distance : 26,
	});

	journey.push({
		end: "Saint-Jean-Pied-de-Port",
		distance : 23,
	});

	journey.push({
		end: "Roncevaux",
		distance : 26.9,
	});

	journey.push({
		end: "Larrasoaña",
		distance : 22,
	});

	journey.push({
		end: "Pampelune",
		distance : 19.8,
	});

	journey.push({
		end: "Puente la Reina",
		distance : 24.3,
	});

	journey.push({
		end: "Estella",
		distance : 23.3,
	});

	journey.push({
		end: "Torres del Rio",
		distance : 29,
	});

	journey.push({
		end: "Logroño",
		distance : 21.1,
	});

	journey.push({
		end: "Nàjera",
		distance : 30.1,
	});

	journey.push({
		end: "Grañon",
		distance : 28.8,
	});

	journey.push({
		end: "Belorado",
		distance : 17,
	});

	journey.push({
		end: "San Juan de Ortega",
		distance : 24.8,
	});

	journey.push({
		end: "Burgos",
		distance : 30.4,
	});

	journey.push({
		end: "Hontanas",
		distance : 29.8,
	});

	journey.push({
		end: "Ermita San Nicolàs",
		distance : 18.7,
	});

	journey.push({
		end: "Villalcázar de Sirga",
		distance : 29.9,
	});

	journey.push({
		end: "Calzadilla de la Cueza",
		distance : 23.3,
	});

	journey.push({
		end: "Sahagún",
		distance : 24.8,
	});

	journey.push({
		end: "Reliegos",
		distance : 31.1,
	});

	journey.push({
		end: "León",
		distance : 29.9,
	});

	journey.push({
		end: "Hospital de Órbigo",
		distance : 32,
	});

	journey.push({
		end: "Santa Catalina de Somoza",
		distance : 26.5,
	});

	journey.push({
		end: "El Acebo",
		distance : 33.9,
	});

	journey.push({
		end: "Ponferrada",
		distance: 18.1
	});

	journey.push({
		end: "Villafranca del Bierzo",
		distance: 25.5
	});

	journey.push({
		end: "O’Cebreiro",
		distance : 27.5,
	});

	journey.push({
		end: "Triacastela",
		distance : 21.5,
	});

	journey.push({
		end: "Barbadelo",
		distance : 23.7,
	});

	journey.push({
		end: "Gonzar",
		distance : 26.2,
	});

	journey.push({
		end: "Melide",
		distance : 31.4,
	});

	journey.push({
		end: "Santa Irene",
		distance : 30.7,
	});

	journey.push({
		end: "Saint-Jacques de Compostelle",
		distance : 25.3,
	});

	journey.push({
		end: "Negreira",
		distance : 22.8,
	});

	journey.push({
		end: "Olveiroa",
		distance : 32.5,
	});

	journey.push({
		end: "Fisterra",
		distance : 33.2,
	});

	const compostelle = new Journey(new Date(2019,3,11), journey);

	// view

	new JourneyView(compostelle);
});



