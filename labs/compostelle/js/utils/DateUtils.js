define(function () {
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

    return {
        // utils
        isSameDate: function isSameDate(ref, value){
            return (value.getTime() - ref.getTime()) === 0;
        },
        isBefore:function isBefore(ref, value){
            return (ref.getTime() - value.getTime()) < 0;
        },
        isAfter: function isAfter(ref, value){
            return (ref.getTime() - value.getTime()) > 0;
        },
        isBetween: function isBetween(ref, start, end){
            return (this.isAfter(ref, start) && this.isBefore(ref, end))
                || this.isSameDate(ref, start) 
                || this.isSameDate(ref, end)
            ; 
        },
        getFrenchDay: function getFrenchDay(indexDay){
            return frenchDays[indexDay] || new Error('Invalid day index');
        },
        getFrenchMonth: function getFrenchMonth(indexMonth){
            return frenchMonthes[indexMonth] || new Error('Invalid month index');
        },
        formatDate: function formatDate(date){
            let day = date.getDate();
            day = day >= 10 ? day : '0'+day;
            
            return this.getFrenchDay(date.getDay())+' '+day+' '+this.getFrenchMonth(date.getMonth());
        }
    };
}
);