define(function () {
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
        }
    };
}
);