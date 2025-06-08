let timer, isRunning = false, seconds = 0, minutes = 0, hours = 0, lapTimes = [];

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        function updateTimeDisplay() {
            document.getElementById("time-display").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        }

        function startStop() {
            if (isRunning) {
                clearInterval(timer);
                document.getElementById("start-stop").textContent = "Start";
            } else {
                timer = setInterval(updateTime, 1000);
                document.getElementById("start-stop").textContent = "Pause";
            }
            isRunning = !isRunning;
        }

        function updateTime() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimeDisplay();
        }

        function reset() {
            clearInterval(timer);
            isRunning = false;
            seconds = 0;
            minutes = 0;
            hours = 0;
            lapTimes = [];
            updateTimeDisplay();
            document.getElementById("start-stop").textContent = "Start";
            document.getElementById("lap-list").innerHTML = "";
        }

        function recordLap() {
            if (isRunning) {
                const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
                lapTimes.push(lapTime);
                const lapItem = document.createElement("li");
                lapItem.textContent = `Lap ${lapTimes.length}: ${lapTime}`;
                document.getElementById("lap-list").appendChild(lapItem);
            }
        }