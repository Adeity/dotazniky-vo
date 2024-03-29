import { formatTimeOnlyHoursToJson, formatTime } from '../utils/time-format'

export function getPeopleDataSleep() {

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/sleep-respondent-data`)
        .then(response => response.json())
        .then(data => extractPeopleDataSleep(data))
}

export function getPeopleDataSleepPage(body) {

    const options =  {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      };

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comps/sleep-respondent-data-pageable`, options)
        .then(response => response.json())
        .then(data => extractRespondentsResponseDto(data))
}

export function extractRespondentsResponseDto(dto) {
    return {
        totalRespondentNumber: dto.respondentsNum,
        activePage: dto.activePage + 1,
        respondentData: extractPeopleDataSleep(dto.respondentData)
    }
}

export function extractPeopleDataSleep(people) {

    const srData = [];

    people.forEach(respondent => {

        const formComputations = [];
        const deviceComputations = [];
        
        respondent.formComputations?.forEach(element => formComputations.push(computationResultFromDto(element, respondent)))
        respondent.deviceComputations?.forEach(element => deviceComputations.push(deviceComputationResultFromDto(element, respondent)))

        formComputations.sort( (a, b) =>  a.version !== b.version ? a.version - b.version : a.recalculations - b.recalculations)
        deviceComputations.sort( (a, b) => a.version !== b.version ? a.version - b.version : a.recalculations - b.recalculations)

        srData.push({
            id: respondent.id,
            socJetlagThreshold: respondent.socJetlagThreshold,
            latencyFaThreshold: respondent.latencyFaThreshold,
            formComputations: formComputations,
            deviceComputations: deviceComputations
        })
    });
    return srData;
}

export function formComputationResultToDto(computation) {
    return {
        id: computation.id,
        person_id: computation.personId,
        version: computation.version,
        recalculations: computation.recalculations,
        compComparison: computation.compComparison,
        chronoFa: computation.fallingAsleepRythm,
        chronoWa: computation.wakingRythm,
        chronotype: computation.chronotype,
        created: computation.uploaded,
        modified: computation.lastModified,
        latencyFAGreaterText: computation.latencyText,
        socJetlagGreaterText: computation.jetlagBiggerThanXText,
        chronoFaText: computation.fallingAsleepRythmText,
        chronoWaText: computation.wakingRythmText,
        socJetlagGreater: computation.jetlagBiggerThanX,
        latency: computation.latency,
        socJetlag: computation.socJetlag,
        latencyFAGreater: computation.latencyFaGreater,
        latencyFaThreshold: computation.latencyFaThreshold,
        socJetlagThreshold: computation.socJetlagThreshold,
        avgLaydownTime: computation.avgLaydownTime,
        avgWakingTime: computation.avgWakingTime,
        awakeFrom: formatTime(computation.chronoAwakeFrom),
        awakeTo: formatTime(computation.chronoAwakeTo),
        sleepFrom: formatTime(computation.chronoSleepFrom),
        sleepTo: formatTime(computation.chronoSleepTo)
    }

}

export function computationResultFromDto(element, respondent) {

    return {
        id: element.id,
        title: respondent.id + " - Dotazníky",
        uploaded: new Date(element.created),
        lastModified: new Date(element.modified),
        compComparison: element.compComparison,
        source: "forms",
        version: element.version,
        recalculations: element.recalculations,

        personId: respondent.id,
        chronotype: element.chronotype,
        latencyFaGreater: element.latencyFAGreater,
        latencyText: element.latencyFAGreaterText,
        wakingRythm: element.chronoWa,
        wakingRythmText: element.chronoWaText,
        fallingAsleepRythm: element.chronoFa,
        fallingAsleepRythmText: element.chronoFaText,
        jetlagBiggerThanX: element.socJetlagGreater,
        jetlagBiggerThanXText: element.socJetlagGreaterText,
        latency: element.latency,
        socJetlag: element.socJetlag,
        latencyFaThreshold: element.latencyFaThreshold,
        socJetlagThreshold: element.socJetlagThreshold,

        avgLaydownTime: element.avgLaydownTime,
        avgWakingTime: element.avgWakingTime,
        chronoAwakeFrom: formatTimeOnlyHoursToJson(element.awakeFrom),
        chronoAwakeTo: formatTimeOnlyHoursToJson(element.awakeTo),
        chronoSleepFrom: formatTimeOnlyHoursToJson(element.sleepFrom),
        chronoSleepTo: formatTimeOnlyHoursToJson(element.sleepTo)
    }
}

export function deviceComputationResultFromDto(element, respondent) {
    return {
        id: element.id,
        title: respondent.id + " - Hodinky",
        uploaded: new Date(element.created),
        lastModified: new Date(element.modified),
        compComparison: element.compComparison,
        source: "device",
        version: element.version,
        recalculations: element.recalculations,

        personId: respondent.id,
        chronotype: element.chronotype,
        latencyFAGreater: element.latencyFAGreater,
        latencyText: element.latencyFAGreaterText,
        wakingRythmFreeDays: element.chronoWaFreeDays,
        wakingRythmFreeDaysText: element.chronoWaTextFreeDays,
        fallingAsleepRythmFreeDays: element.chronoFaFreeDays,
        fallingAsleepRythmFreeDaysText: element.chronoFaTextFreeDays,
        wakingRythmWorkDays: element.chronoWaWorkDays,
        wakingRythmWorkDaysText: element.chronoWaTextWorkDays,
        fallingAsleepRythmWorkDays: element.chronoFaWorkDays,
        fallingAsleepRythmWorkDaysText: element.chronoFaTextWorkDays,
        latency: element.latency,
        socJetlag: element.socJetlag,
        jetlagBiggerThanX: element.socJetlagGreater,
        jetlagBiggerThanXText: element.socJetlagGreaterText,
        avgFallAsleepTimeWorkDays: element.avgFallAsleepTimeWorkDays,
        avgWakingTimeWorkDays: element.avgWakingTimeWorkDays,
        avgFallAsleepTimeFreeDays: element.avgFallAsleepTimeFreeDays,
        avgWakingTimeFreeDays: element.avgWakingTimeFreeDays,

        chronoAwakeFrom: formatTimeOnlyHoursToJson(element.awakeFrom),
        chronoAwakeTo: formatTimeOnlyHoursToJson(element.awakeTo),
        chronoSleepFrom: formatTimeOnlyHoursToJson(element.sleepFrom),
        chronoSleepTo: formatTimeOnlyHoursToJson(element.sleepTo),

        latencyFaThreshold: element.latencyFaThreshold,
        socJetlagThreshold: element.socJetlagThreshold,
    }
}

export function deviceComputationResultToDto(computation) {

    return {
        id: computation.id,
        version: computation.version,
        researchParticipantResearchNumber: computation.personId,
        recalculations: computation.recalculations,
        compComparison: computation.compComparison,

        chronoFaFreeDays: computation.fallingAsleepRythmFreeDays,
        chronoWaFreeDays: computation.wakingRythmFreeDays,
        chronoFaWorkDays: computation.fallingAsleepRythmWorkDays,
        chronoWaWorkDays: computation.wakingRythmWorkDays,
        chronotype: computation.chronotype,
        created: computation.uploaded,
        modified: computation.lastModified,
        latencyFAGreaterText: computation.latencyText,
        socJetlagGreaterText: computation.jetlagBiggerThanXText,
        chronoFaTextFreeDays: computation.fallingAsleepRythmFreeDaysText,
        chronoWaTextFreeDays: computation.wakingRythmFreeDaysText,
        chronoFaTextWorkDays: computation.fallingAsleepRythmWorkDaysText,
        chronoWaTextWorkDays: computation.wakingRythmWorkDaysText,
        latency: computation.latency,
        socJetlag: computation.socJetlag,
        socJetlagGreater: computation.jetlagBiggerThanX,
        latencyFAGreater: computation.latencyFAGreater,
        avgFallAsleepTimeWorkDays: computation.avgFallAsleepTimeWorkDays,
        avgWakingTimeWorkDays: computation.avgWakingTimeWorkDays,
        avgFallAsleepTimeFreeDays: computation.avgFallAsleepTimeFreeDays,
        avgWakingTimeFreeDays: computation.avgWakingTimeFreeDays,

        awakeFrom: formatTime(computation.chronoAwakeFrom),
        awakeTo: formatTime(computation.chronoAwakeTo),
        sleepFrom: formatTime(computation.chronoSleepFrom),
        sleepTo: formatTime(computation.chronoSleepTo),

        latencyFaThreshold: computation.latencyFaThreshold,
        socJetlagThreshold: computation.socJetlagThreshold,
    }
}