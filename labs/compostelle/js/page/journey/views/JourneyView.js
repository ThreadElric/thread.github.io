define(
    [
        './StepsListView',
        './StepTodayView'
    ],
    function(StepsListView, StepTodayView){
        const JourneyView = function(journeyModel){
            this.journey = journeyModel;
            // two views
            this.list = new StepsListView(journeyModel, document.getElementById('js-journey-list'));
            this.today = new StepTodayView(journeyModel.getStepToday(), document.getElementById('js-step-today'));
        };

        return JourneyView;
    }
)