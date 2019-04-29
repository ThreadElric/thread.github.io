define([
    'utils/FormaterUtils'
    ],
    function(FormaterUtils){
        const StepTodayView = function StepToday(step, todayElement){
            this.step = step;
            this.todayElement = todayElement;
            this.init();
        }
    
        StepTodayView.prototype.init = function init(){
            const templateToday = document.getElementById('template-step-today');
            const todayInstance = document.importNode(templateToday.content, true);
            
            todayInstance.querySelector('.start').innerHTML = this.step.start;
            
            if(this.step.distance !== undefined){
                todayInstance.querySelector('.end').innerHTML = this.step.end;
                todayInstance.querySelector('.header__distance').innerHTML = FormaterUtils.formatDistance(this.step.distance);
            } else {
                todayInstance.querySelector('.end').remove();
            }
    
            this.todayElement.appendChild(todayInstance);
        }

        return StepTodayView;
    }
);