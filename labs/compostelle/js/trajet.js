// utils
function isSameDate(ref, value){
	return (value.getTime() - ref.getTime()) === 0;
}

function isBefore(ref, value){
	return (ref.getTime() - value.getTime()) < 0;
}

function isAfter(ref, value){
	return (ref.getTime() - value.getTime()) > 0;
}

function isBetween(ref, start, end){
	return (isAfter(ref, start) && isBefore(ref, end))
		|| isSameDate(ref, start) 
		|| isSameDate(ref, end)
	; 
}

// models

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

const Journey = function(departure, steps){
	this.departure = departure;
	this.steps = steps;
	this.journey = null;
	this.init();
};

Journey.prototype.init = function init(){
	// init model
	const departure = new Date(this.departure);

	let lastEnd = null;
	let cumulKms = 0;

	this.journey = this.steps.map(function(step){
		const newStep = Object.assign({}, step);
		newStep.startDate = new Date(departure);
		newStep.cumul = cumulKms;
		if(!step.start && lastEnd){
			newStep.start = lastEnd;
		}
		// changement variables
		const duration = step.duration || 1;
		departure.setDate(departure.getDate()+duration);
		newStep.endDate = new Date(departure);
		lastEnd = step.end;
		cumulKms += step.distance || 0;
		return newStep;
	});
};

Journey.prototype.getStepToday = function getStepToday(){
	const today = new Date();
	if(!this.journey){
		throw new Error("This object is not initialazed");
	}
	const result =  this.journey.find(function(step){
		return isBetween(today, step.startDate, step.endDate);
	});
	return result;
}

Journey.prototype.getSteps = function getSteps(){
	return this.journey;
}

const compostelle = new Journey(new Date(2019,3,11), journey);

// view

const frenchDays = [
	'Dimanche',
	'Lundi',
	'Mardi',
	'Mercredi',
	'Jeudi',
	'Vendredi',
	'Samedi',
];
const frenchMonthes = [
	'Janvier',
	'Février',
	'Mars',
	'Avril',
	'Mai',
	'Juin',
	'Juillet',
	'Août',
	'Septembre',
	'Octobre',
	'Novembre',
	'Décembre'
];

function getFrenchDay(indexDay){
	return frenchDays[indexDay] || new Error('Invalid day index');
}

function getFrenchMonth(indexMonth){
	return frenchMonthes[indexMonth] || new Error('Invalid month index');
}

function formatDate(date){
	let day = date.getDate();
	day = day >= 10 ? day : '0'+day;
	
	return getFrenchDay(date.getDay())+' '+day+' '+getFrenchMonth(date.getMonth());
}

function formatDistance(distance){
	return distance+' kms';
}

const JourneyView = function(journeyModel){
	this.journey = journeyModel;
	// two views
	this.list = new StepList(journeyModel, document.getElementById('js-journey-list'));
	this.today = new StepToday(journeyModel.getStepToday(), document.getElementById('js-step-today'));
};

const StepList = function(journeyModel, listElement){
	this.journey = journeyModel;
	this.listElement = listElement;
	this.init();
}

StepList.prototype.init = function init(){
	const list = this.listElement;
	
	list.innerHTML = '';
	
	// templates
	const templateStep = document.getElementById('template-step');
	
	const today = new Date();
	
	// list
	this.journey.getSteps().forEach(function(step){
		const stepInstance = document.importNode(templateStep.content, true);
	
		const stepElement = stepInstance.querySelector('.step');
		const dateElement = stepInstance.querySelector('.step__date');
		const startElement = stepInstance.querySelector('.start');
		const endElement = stepInstance.querySelector('.end');
	
		let isToday = isBetween(today, step.startDate, step.endDate);
	
		if(step.distance === undefined){
			stepElement.classList.add('step--break');
		} else {
			startElement.innerHTML = step.start;
			stepInstance.querySelector('.distance').innerHTML = formatDistance(step.distance);
		}
	
		if(
			isToday ||
			(step.start === 'Saint-Jean-Pied-de-Port') ||
			(step.end === 'Saint-Jacques de Compostelle')
		){
			stepElement.classList.add('step--current');
		}
	
		if(isToday){
			stepInstance.querySelector('.sub_header').innerHTML = 'Depuis le début, '+step.cumul+' kms parcourus';
		}
	
		endElement.innerHTML = step.end;
		dateElement.innerHTML = formatDate(step.startDate);
	
		list.appendChild(stepInstance);
	});
};

const StepToday = function StepToday(step, todayElement){
	this.step = step;
	this.todayElement = todayElement;
	this.init();
}

StepToday.prototype.init = function init(){
	const templateToday = document.getElementById('template-step-today');
	const todayInstance = document.importNode(templateToday.content, true);
	
	todayInstance.querySelector('.start').innerHTML = this.step.start;
	
	if(this.step.distance !== undefined){
		todayInstance.querySelector('.end').innerHTML = this.step.end;
		todayInstance.querySelector('.header__distance').innerHTML = formatDistance(this.step.distance);
	} else {
		todayInstance.querySelector('.end').remove();
	}

	this.todayElement.appendChild(todayInstance);
}

new JourneyView(compostelle);
