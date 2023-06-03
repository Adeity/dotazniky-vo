import { computationResultFromDto } from '../people.service.js'
import { formatTimeOnlyHoursToJson } from '../../utils/time-format.js'

// const computationResultFromDto = require('../people.service')

const peopleData = [
    
        {
            "id": "res_100",
            "formComputations": [
                {
                    "id": 6397935,
                    "version": 1,
                    "recalculations": 2,
                    "person_id": "res_100",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFa": "OK",
                    "chronoWa": "OK",
                    "chronotype": "STRONGLY_EVENING",
                    "latency": 15,
                    "socJetlag": "01:00",
                    "created": "2023-05-07T07:10:21.063+00:00",
                    "modified": "2023-05-07T07:34:54.458+00:00",
                    "latencyFAGreaterText": "Latence je větší než",
                    "socJetlagGreaterText": "Větší než",
                    "chronoFaText": "Chodí spát ve vhodné časové okno",
                    "chronoWaText": "Vstává ve vhodné časové okno",
                    "avgLaydownTime": "00:30",
                    "avgWakingTime": "09:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": true
                },
                {
                    "id": 6397938,
                    "version": 1,
                    "recalculations": 3,
                    "person_id": "res_100",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFa": "OK",
                    "chronoWa": "OK",
                    "chronotype": "STRONGLY_EVENING",
                    "latency": 15,
                    "socJetlag": "01:00",
                    "created": "2023-05-07T07:10:21.063+00:00",
                    "modified": "2023-05-09T19:51:29.125+00:00",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Větší než",
                    "chronoFaText": "Chodí spát ve vhodné časové okno",
                    "chronoWaText": "Vstává ve vhodné časové okno",
                    "avgLaydownTime": "00:30",
                    "avgWakingTime": "09:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": true
                },
                {
                    "id": 6397932,
                    "version": 1,
                    "recalculations": 1,
                    "person_id": "res_100",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFa": "OK",
                    "chronoWa": "OK",
                    "chronotype": "STRONGLY_EVENING",
                    "latency": 15,
                    "socJetlag": "01:00",
                    "created": "2023-05-07T07:10:21.063+00:00",
                    "modified": "2023-05-09T19:53:44.121+00:00",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Větší než",
                    "chronoFaText": "Chodí spát ve vhodné časové okno",
                    "chronoWaText": "Vstává ve vhodné časové okno",
                    "avgLaydownTime": "00:30",
                    "avgWakingTime": "09:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": true
                },
                {
                    "id": 6397928,
                    "version": 1,
                    "recalculations": 0,
                    "person_id": "res_100",
                    "socJetlagThreshold": "01:50",
                    "latencyFaThreshold": 10,
                    "chronoFa": "OK",
                    "chronoWa": "OK",
                    "chronotype": "STRONGLY_EVENING",
                    "latency": 15,
                    "socJetlag": "01:00",
                    "created": "2023-05-07T07:10:21.063+00:00",
                    "modified": "2023-05-11T13:15:40.263+00:00",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "chronoFaText": "Chodí spát ve vhodné časové okno",
                    "chronoWaText": "Vstává ve vhodné časové okno",
                    "avgLaydownTime": "00:30",
                    "avgWakingTime": "09:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397947,
                    "version": 2,
                    "recalculations": 1,
                    "person_id": "res_100",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFa": "OK",
                    "chronoWa": "OK",
                    "chronotype": "STRONGLY_EVENING",
                    "latency": 15,
                    "socJetlag": "01:00",
                    "created": "2023-05-07T07:10:21.063+00:00",
                    "modified": "2023-05-11T18:40:48.284+00:00",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Větší než",
                    "chronoFaText": "Chodí spát ve vhodné časové okno",
                    "chronoWaText": "Vstává ve vhodné časové okno",
                    "avgLaydownTime": "00:30",
                    "avgWakingTime": "09:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": true
                },
                {
                    "id": 6397953,
                    "version": 2,
                    "recalculations": 0,
                    "person_id": "res_100",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFa": "OK",
                    "chronoWa": "OK",
                    "chronotype": "STRONGLY_EVENING",
                    "latency": 15,
                    "socJetlag": "01:00",
                    "created": "2023-05-07T07:10:21.063+00:00",
                    "modified": "2023-05-11T20:47:00.444+00:00",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Větší neždawd",
                    "chronoFaText": "Chodí spát ve vhodné časové okno",
                    "chronoWaText": "Vstává ve vhodné časové okno--",
                    "avgLaydownTime": "00:30",
                    "avgWakingTime": "09:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": true
                }
            ],
            "deviceComputations": [
                {
                    "id": 6397939,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 1,
                    "recalculations": 3,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "OK",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Chodí spát ve vhodné časové okno",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-09T19:51:29.175+00:00",
                    "modified": "2023-05-09T19:51:29.175+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "00:00",
                    "avgWakingTimeFreeDays": "00:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397941,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 2,
                    "recalculations": 0,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-10T18:00:00.729+00:00",
                    "modified": "2023-05-10T18:00:00.729+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397943,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 3,
                    "recalculations": 0,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-10T18:03:52.260+00:00",
                    "modified": "2023-05-10T18:03:52.260+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397945,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 4,
                    "recalculations": 0,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-10T18:05:33.078+00:00",
                    "modified": "2023-05-10T18:05:33.078+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397931,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 1,
                    "recalculations": 0,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "01:50",
                    "latencyFaThreshold": 10,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "OK",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Chodí spát ve vhodné časové okno",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-07T07:10:30.650+00:00",
                    "modified": "2023-05-07T07:10:30.650+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "00:00",
                    "avgWakingTimeFreeDays": "00:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397933,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 1,
                    "recalculations": 1,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "OK",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Chodí spát ve vhodné časové okno",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-07T07:20:26.181+00:00",
                    "modified": "2023-05-07T07:20:26.181+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "00:00",
                    "avgWakingTimeFreeDays": "00:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397936,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 1,
                    "recalculations": 2,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "OK",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": " Vstáva včas",
                    "chronoFaTextFreeDays": "Chodí spát ve vhodné časové okno",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-07T07:29:00.975+00:00",
                    "modified": "2023-05-07T07:38:45.059+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "00:00",
                    "avgWakingTimeFreeDays": "00:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397948,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 2,
                    "recalculations": 1,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T18:40:48.507+00:00",
                    "modified": "2023-05-11T18:40:48.507+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397949,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 3,
                    "recalculations": 1,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T18:40:48.550+00:00",
                    "modified": "2023-05-11T18:40:48.550+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397950,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 4,
                    "recalculations": 1,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T18:40:48.609+00:00",
                    "modified": "2023-05-11T18:40:48.609+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397951,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 1,
                    "recalculations": 4,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "OK",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Chodí spát ve vhodné časové okno",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T18:40:48.648+00:00",
                    "modified": "2023-05-11T18:40:48.648+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "00:00",
                    "avgWakingTimeFreeDays": "00:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397954,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 2,
                    "recalculations": 2,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T19:58:57.891+00:00",
                    "modified": "2023-05-11T19:58:57.891+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397955,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 3,
                    "recalculations": 2,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T19:58:57.932+00:00",
                    "modified": "2023-05-11T19:58:57.932+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                },
                {
                    "id": 6397956,
                    "researchParticipantResearchNumber": "res_100",
                    "version": 4,
                    "recalculations": 2,
                    "latency": 15,
                    "socJetlag": "00:00",
                    "socJetlagThreshold": "00:50",
                    "latencyFaThreshold": 5,
                    "chronoFaWorkDays": "EARLY",
                    "chronoWaWorkDays": "EARLY",
                    "chronoFaFreeDays": "EARLY",
                    "chronoWaFreeDays": "EARLY",
                    "chronoFaTextWorkDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextWorkDays": "Měl by vstávat později",
                    "chronoFaTextFreeDays": "Měl by chodit spát později - upravit čas vstávání",
                    "chronoWaTextFreeDays": "Měl by vstávat později",
                    "chronotype": "STRONGLY_EVENING",
                    "latencyFAGreaterText": "Větší než",
                    "socJetlagGreaterText": "Menší než",
                    "compComparison": "NO_COMPARE",
                    "created": "2023-05-11T19:58:57.952+00:00",
                    "modified": "2023-05-11T19:58:57.952+00:00",
                    "avgFallAsleepTimeWorkDays": "22:00",
                    "avgWakingTimeWorkDays": "06:00",
                    "avgFallAsleepTimeFreeDays": "22:00",
                    "avgWakingTimeFreeDays": "06:00",
                    "awakeFrom": "06:30:00",
                    "awakeTo": "09:00:00",
                    "sleepFrom": "23:30:00",
                    "sleepTo": "00:30:00",
                    "latencyFAGreater": true,
                    "socJetlagGreater": false
                }
            ],
            "socJetlagThreshold": "00:50",
            "latencyFaThreshold": 5
        }
]

describe("People service", () => {

    it('should convert form dto to app object properly', () => {

        const dto = peopleData[0].formComputations[0]
        const respondent = peopleData[0]
        const appObject = computationResultFromDto(dto, respondent)

        console.log(appObject.id)
        console.log(dto.id)
        expect(appObject.id).toEqual(dto.id)
        expect(appObject.title).toEqual( respondent.id + " - Dotazníky")
        expect(appObject.uploaded).toEqual( new Date(dto.created))
        expect(appObject.lastModified).toEqual( new Date(dto.modified))
        expect(appObject.compComparison).toEqual( dto.compComparison)
        expect(appObject.source).toEqual("forms")
        expect(appObject.version).toEqual(dto.version)
        expect(appObject.recalculations).toEqual( dto.recalculations)

        expect(appObject.personId).toEqual( respondent.id)
        expect(appObject.chronotype).toEqual( dto.chronotype)
        expect(appObject.latencyFaGreater).toEqual( dto.latencyFAGreater)
        expect(appObject.latencyText).toEqual( dto.latencyFAGreaterText)
        expect(appObject.wakingRythm).toEqual( dto.chronoWa)
        expect(appObject.wakingRythmText).toEqual( dto.chronoWaText)
        expect(appObject.fallingAsleepRythm).toEqual( dto.chronoFa)
        expect(appObject.fallingAsleepRythmText).toEqual( dto.chronoFaText)
        expect(appObject.jetlagBiggerThanX).toEqual( dto.socJetlagGreater)
        expect(appObject.jetlagBiggerThanXText).toEqual( dto.socJetlagGreaterText)
        expect(appObject.latency).toEqual( dto.latency)
        expect(appObject.socJetlag).toEqual( dto.socJetlag)
        expect(appObject.latencyFaThreshold).toEqual( dto.latencyFaThreshold)
        expect(appObject.socJetlagThreshold).toEqual( dto.socJetlagThreshold)

        expect(appObject.avgLaydownTime).toEqual( dto.avgLaydownTime)
        expect(appObject.avgWakingTime).toEqual( dto.avgWakingTime)
        console.log(appObject.chronoAwakeFrom)
        console.log(formatTimeOnlyHoursToJson(dto.awakeFrom))
        expect(appObject.chronoAwakeFrom).toEqual( formatTimeOnlyHoursToJson(dto.awakeFrom))
        expect(appObject.chronoAwakeTo).toEqual( formatTimeOnlyHoursToJson(dto.awakeTo))
        expect(appObject.chronoSleepFrom).toEqual( formatTimeOnlyHoursToJson(dto.sleepFrom))
        expect(appObject.chronoSleepTo).toEqual( formatTimeOnlyHoursToJson(dto.sleepTo))
    });

    it('should convert device dto to entity properly', () => {




    });

    // it('should order computations of a person according to version and then recalculations', () => {

    // })


})