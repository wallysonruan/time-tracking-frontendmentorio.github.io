const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// work, play, study, exercise, social, self care
const workActualTime = document.getElementById("work-actual-time"),
workPastTime = document.getElementById("work-past-time"),
playActualTime = document.getElementById("play-actual-time"),
playPastTime = document.getElementById("play-past-time"),
studyActualTime = document.getElementById("study-actual-time"),
studyPastTime = document.getElementById("study-past-time"),
exerciseActualTime = document.getElementById("exercise-actual-time"),
exercisePastTime = document.getElementById("exercise-past-time"),
socialActualTime = document.getElementById("social-actual-time"),
socialPastTime = document.getElementById("social-past-time"),
selfCareActualTime = document.getElementById("self-care-actual-time"),
selfCarePastTime = document.getElementById("self-care-past-time"),
dailyBttn = document.getElementById("daily"),
weeklyBttn = document.getElementById("weekly"),
monthlyBttn = document.getElementById("monthly");



const work = (period, actual, past) => {
    workActualTime.innerHTML = `${actual}hrs`;
    workPastTime.innerHTML = `Last ${period} – ${past}hrs`
}
const play = (period, actual, past) => {
    playActualTime.innerHTML = `${actual}hrs`;
    playPastTime.innerHTML = `Last ${period} – ${past}hrs`
}
const study = (period, actual, past) => {
    studyActualTime.innerHTML = `${actual}hrs`;
    studyPastTime.innerHTML = `Last ${period} – ${past}hrs`
}
const exercise = (period, actual, past) => {
    exerciseActualTime.innerHTML = `${actual}hrs`;
    exercisePastTime.innerHTML = `Last ${period} – ${past}hrs`
}
const social = (period, actual, past) => {
    socialActualTime.innerHTML = `${actual}hrs`;
    socialPastTime.innerHTML = `Last ${period} – ${past}hrs`
}
const selfCare = (period, actual, past) => {
    selfCareActualTime.innerHTML = `${actual}hrs`;
    selfCarePastTime.innerHTML = `Last ${period} – ${past}hrs`
}

const updateTime = (period) =>{
  switch(period){
    case "daily":
        data.map(e => {
            let times;
            switch(e.title){
                case "Work":
                times = e.timeframes.daily;
                work("day", times.current, times.previous)
                break
                
                case "Play":
                times = e.timeframes.daily;
                play("day", times.current, times.previous)
                break

                case "Study":
                times = e.timeframes.daily;
                study("day", times.current, times.previous)
                break

                case "Exercise":
                times = e.timeframes.daily;
                exercise("day", times.current, times.previous)
                break

                case "Social":
                times = e.timeframes.daily;
                social("day", times.current, times.previous)
                break

                case "Self Care":
                times = e.timeframes.daily;
                selfCare("day", times.current, times.previous)
                break
            }})
    break
    case "weekly":
        data.map(e => {
            let times;
            switch(e.title){
                case "Work":
                times = e.timeframes.weekly;
                work("week", times.current, times.previous)
                break
                
                case "Play":
                times = e.timeframes.weekly;
                play("week", times.current, times.previous)
                break

                case "Study":
                times = e.timeframes.weekly;
                study("week", times.current, times.previous)
                break

                case "Exercise":
                times = e.timeframes.weekly;
                exercise("week", times.current, times.previous)
                break

                case "Social":
                times = e.timeframes.weekly;
                social("week", times.current, times.previous)
                break

                case "Self Care":
                times = e.timeframes.weekly;
                selfCare("week", times.current, times.previous)
                break
            }})
    break
    case "monthly":
        data.map(e => {
            let times;
            switch(e.title){
                case "Work":
                times = e.timeframes.monthly;
                work("month", times.current, times.previous)
                break
                
                case "Play":
                times = e.timeframes.monthly;
                play("month", times.current, times.previous)
                break

                case "Study":
                times = e.timeframes.monthly;
                study("month", times.current, times.previous)
                break

                case "Exercise":
                times = e.timeframes.monthly;
                exercise("month", times.current, times.previous)
                break

                case "Social":
                times = e.timeframes.monthly;
                social("month", times.current, times.previous)
                break

                case "Self Care":
                times = e.timeframes.monthly;
                selfCare("month", times.current, times.previous)
                break
            }})
    break
   }}

window.addEventListener("load", updateTime("daily"));

dailyBttn.addEventListener("click", go => updateTime("daily"));
weeklyBttn.addEventListener("click", go => updateTime("weekly"));
monthlyBttn.addEventListener("click", go => updateTime("monthly"));