const weekData = [
    {
        day:"Monday", 
        sleepHours:5, 
        screenTime:3, // hours
        mood:"tired",
        caffeineIntake:1, // cups
        focusLevel:3 //1-10
    },
    {
        day:"Tuesday",
        sleepHours:8,
        screenTime:6,
        mood:"content",
        caffeineIntake:2,
        focusLevel:9
    },
    {
        day:"Wednesday",
        sleepHours:8,
        screenTime:6,
        mood:"busy",
        caffeineIntake:2,
        focusLevel:8
    },
    {
        day:"Thursday",
        sleepHours:8,
        screenTime:5,
        mood:"content",
        caffeineIntake:2,
        focusLevel:7
    },
    {
        day:"Friday",
        sleepHours:8,
        screenTime:3,
        mood:"happy",
        caffeineIntake:3,
        focusLevel:4
    },
    {
        day:"Saturday",
        sleepHours:6,
        screenTime:5,
        mood:"happy",
        caffeineIntake:2,
        focusLevel:8
    },
    {
        day:"Sunday",
        sleepHours:8,
        screenTime:4,
        mood:"content",
        caffeineIntake:2,
        focusLevel:6
    }
];

function averageCaffeineIntake(set){
    let total = 0;
    for(let entry of set){
        total += entry.caffeineIntake;
    }
    return total/set.length;
}

function mostFrequentMood(set){
    const moods = {};
    for (let entry of set){
        if(!moods[entry.mood]){
            moods[entry.mood] = 1;
        }
        else{
            moods[entry.mood] += 1;
        }
    }
    let highest = "";
    let count = 0;
    for (let mood in moods){
        if(moods[mood] > count){
            count = moods[mood];
            highest = mood;
        }
    }
    return highest
}

function bestFocus(set){
    const focus = {};
    let day = "";
    let hour = 0;
    for (let entry of set){
        if(entry.focusLevel > hour){
            hour = entry.focusLevel;
            day = entry.day;
        }
    }
    return day;
}

function caffeineFocusCoorelation(set){
    let table = [0, 0, 0, 0];
    for(let entry of set){
        if(entry.caffeineIntake < 2 && entry.focusLevel < 6){
            table[0] += 1;
        }
        else if(entry.caffeineIntake < 2 && entry.focusLevel > 5){
            table[1] += 1;
        }
        else if(entry.caffeineIntake > 0 && entry.focusLevel < 6){
            table[2] += 1;
        }
        else{
            table[3] += 1;
        }
    }

    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}


/* Predictions:
Which day had the most screen time? 
Tuesday and Wednesday

Best focus day? 
Tuesday

Is more caffeine helping? 
Caffeine and focus level have little consistent coorelation in the data. 
*/