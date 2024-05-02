function StopWatch() {
    let startTime, endTime, running=false; // PRIVATE PROPERTIES

    this.start = function() {
        if(running) {
            return "StopWatch Is Already Running";
        } else {
            running = true;
            startTime = new Date();
        }
    }

    this.stop = function() {
        if(!running) {
            return "StopWatch Is Not Started";
        } else {
            running = false;
            endTime = new Date();
        }
    }

    this.reset = function() {
        startTime = 0;
        endTime = 0;
        running = false;
    }

    Object.defineProperty(this, "duration", {
        get: function() {
            return endTime.getTime() - startTime.getTime();
        }
    });
};
