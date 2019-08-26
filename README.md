# HAS Hospitals Assistance Sydney


This application have the goal:

 ● Allow the user to select their illness and grade their level of pain from 0-4
 ● Calculate waiting times based on the patient’s level of pain and hospitals average process times
 ● Show hospitals back to the user ordered by waiting time (Shortest to longest)
 ● Store new Patient information in your selected database
 ● For the UI you can use the screens provided below for inspiration

## Features for implematations

 ● Fix layouts of user's screens
 ● Add erros's messages
 ● Add Table Paginations on List of Hospitals
 ● Add more tests
 ● Created generic component of the List (ListOfHospitalsComponent,
 ListOfPainComponent, ListOfIllnessComponent)
 ● Check name's patterns (Classes, functions for exemplo)

## This repo has 2 applications:

- Front-end: ReactJS

- Backend: NestJS

## Development Requirements

- node >= v10 [![node](https://img.shields.io/badge/node-v10-blue.svg?cacheSeconds=2592000)](https://nodejs.org/en/download/)

- npm

- mongodb >= v4

## Installation

```bash

$ npm install

```

## Environment variables for development


| Variable name | Usage |

|------------------------------ |--------------------------------------|

| HOSPITALS_URL | Hospitals instance URL in Sydney |
| ILLNESSES_URL | Illnesses instance URL in Sydney |


## Running the app


```bash

# development

$ npm run start

# watch mode

$ npm run start:dev

# production mode

$ npm run start:prod

```



## Running Tests



```bash

# unit tests

$ npm run test



# e2e tests

$ npm run test:e2e



# test coverage

$ npm run test:cov

```

## API

New Patient
POST /api/v1/patient
```json
{
	"name": "New Patient",
	"levelOfPain": 1
}
```

Hospitals by waiting list
GET api/v1/hospitals/waitingtimes/pain=${pain}
```json
[
	[
		{
			"id": 1,
			"name": "St Vincent's Hospital",
			"waitingList": [
			{
				"patientCount": 1,
				"levelOfPain": ${pain},
				"averageProcessTime": 15
			}
		]
	}
]
```


List of Pains
GET api/v1/pains
```json
[
	0,

	1,

	2,

	3,

	4
]
```

List of Illnesses
GET api/v1/illnesses
```json
[
	{
		"id": 1,
		"name": "Mortal Cold"
	},
]
```
