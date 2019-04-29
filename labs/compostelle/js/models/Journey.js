define(
    ['utils/DateUtils'], 
    function(DateUtils){
        const Journey = function(departure, steps){
            this.departure = departure;
            this.steps = steps;
        };
        
        Journey.prototype.getSteps = function getSteps(){
            // init model
            const departure = new Date(this.departure);
        
            let lastEnd = null;
            let cumulKms = 0;
        
            return this.steps.map(function(step){
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
           
            const result =  this.getSteps().find(function(step){
                return DateUtils.isBetween(today, step.startDate, step.endDate);
            });
            return result;
        }

        return Journey;
    }
);