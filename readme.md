# Generic Recorder Catalyst (GRC)
## _The real personal assistant, Ever_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

- GRC is a desktop runtime prototype implemented in Nodejs and Python that allows individual users to record the content they want to transcript as per their customizations.

- The customizations include :
        - Recording only the sound that is emitted from the system.
        - Recording only the sound that is captured via a microphone.
        - Recording the entire system sound that is both emitted and captured.
        - The user may record and transcribe the audio from an independent application using a Virtual Audio Cable. (For example, the user can watch a video on YouTube while he/she can record a Microsoft meeting in the background.)

- Another great feature is the future recorder. Using this feature, you can view meeting data (timings) of your calendars (like GoogleMeet, Microsoft Calendar) and schedule recordings to transcript future meetings.


##### Objective
The main objective of our applications is to:
- ✨You can gain insights from any application through system sound, input sound, or both  and individual application sound, regardless of what application it is.✨
- ✨You will always gain insight from meetings that you are unable to attend due to your busy schedule.✨

## Features

- **GENERIC** 
 Regardless of the application, it can acquire the audio data it needs. Eg. getting audio from a live YouTube stream to a Microsoft Teams meeting.
- **FEASIBILTY** 
 Never miss a task, assignment or duty. Automatically transcribe online meetings into text, integrate into your management software, create actionable items, and share outcomes instantly.
- **NOTIFICATION SERVICES** 
 Get notified about upcoming one-on-one meetings.
- **TRACK REPORTING**
 Keep track of your action items and meeting notes in one place.



## Tech Stack

- [Python] - Recorder Functionalty!
- [node.js] - evented I/O for the backend
- [Express] - for local server app framework 
- [VAC] - an audio cable to route the application sound

## APIs

- [Sendgrid] - Recorder Functionalty!
- [Google translate] - evented I/O for the backend
- [Microsoft Graph] - for local server app framework 
- [Symbl Async] - an audio cable to route the application sound

## Architecture Diagram

![Arch](https://user-images.githubusercontent.com/37975726/131716002-4c48232c-6b2d-44a6-8b1e-9dd559752d1b.JPG)

## Installation & Local Server Setup

GRC requires [Node.js](https://nodejs.org/) v10+ and [Python] and lite version of [VAC] (which is completly free)  to run. So far compatabile only for Windows.

1.Clone the repository [GRC][grc] in your local machine.
2.Download the [Virtual Audio Cable][VAC] into your local machine, refer plugin section for more detail.
3.Install the python dependencies : Open your terminal
```sh
cd (To your local repo)
python m pip install user virtualenv
python -m venv env
\env\Scripts\activate.bat
Pip install pipwin
pipwin install pyaudio
Pip install pydub
```

4.Install the NodeJS dependencies : Open your terminal

```sh
cd (To your local repo)
npm install 
```

5.(Beta Version => under construction) Deploy the Calendar service from the below tutorial and makeu sure to host the application in the local host :3000

[Get Calendar View]


## Plugins

GRC is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Symbl | [plugins/symbl/README.md][Plsymbl] |
| Sendgrid | [plugins/sendgrid/README.md][Plsendgrid] |
| VAC | [plugins/vac/README.md][Plvac] |
| Google Translate| [plugins/GT/README.md][PlGT] |


## Deployment

Start the project:

Activate the Virtual environment by changing the directory into the \{Environment Name of the virtualenv}\Scripts\
```sh
.\activate.bat
```

```sh
npm run dev
```


Verify the deployment by navigating to your server address in
your preferred browser.



```sh
127.0.0.1:3001
```

## License

**Free Software, Hell Yeah!**


   [grc]: <https://github.com/balajibalajanc/Generic-Recorder-Catalyst>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Python]: <https://www.python.org/downloads/>
   [VAC]: <https://vac.muzychenko.net/en/>

   [Get Calendar View]: <https://docs.microsoft.com/en-us/graph/tutorials/node?tutorial-step=1>
   
   [Plsymbl]: <https://github.com/balajibalajanc/Generic-Recorder-Catalyst/tree/master/plugins/symbl>
   [Plsendgrid]:<https://github.com/balajibalajanc/Generic-Recorder-Catalyst/tree/master/plugins/sendgrid>
   [Plvac]:<https://github.com/balajibalajanc/Generic-Recorder-Catalyst/tree/master/plugins/vac>
   [PlGT]:<https://github.com/balajibalajanc/Generic-Recorder-Catalyst/tree/master/plugins/GT>
   [Symbl Async]: <https://symbl.ai/>
   [Microsoft Graph]: <https://developer.microsoft.com/en-us/graph/graph-explorer>
   [Google translate]: <https://cloud.google.com/translate>
   [Sendgrid]: <https://sendgrid.com/>
