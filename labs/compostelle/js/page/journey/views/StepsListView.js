define([
    'utils/DateUtils',
    'utils/FormaterUtils'
    ],
    function(DateUtils, FormaterUtils){
        const StepsListView = function(journeyModel, listElement){
            this.journey = journeyModel;
            this.listElement = listElement;
            this.init();
        }

        StepsListView.prototype.init = function init(){
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
            
                let isToday = DateUtils.isBetween(today, step.startDate, step.endDate);
            
                if(step.distance === undefined){
                    stepElement.classList.add('step--break');
                } else {
                    startElement.innerHTML = step.start;
                    stepInstance.querySelector('.distance').innerHTML = FormaterUtils.formatDistance(step.distance);
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
                dateElement.innerHTML = DateUtils.formatDate(step.startDate);
            
                list.appendChild(stepInstance);
            });
        };
    
        return StepsListView;
}
);