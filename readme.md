# Generic Recorder Catalyst (GRC)
## _The real personal assistant, Ever_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

GRC is a desktop runtime implemented in Nodejs and Python that allows individual users to record system sound, regardless of the programme, and feed it into the Symbl Async API to obtain valuable information like transcripts, tasks, and inquiries.

##### Objective
The main objective of our applications is to:
- ✨You can gain insights from any application through system sound, input sound, or both, regardless of what application it is.✨
-✨You will always gain insight from meetings that you are unable to attend due to your busy schedule.✨

## Features

- **GENERIC** 
 Regardless of the application, it can acquire the audio data it needs. Eg. getting audio from a live YouTube stream to a Microsoft Teams meeting.
- **FEASIBILTY** 
 Never miss a task, assignment or duty. Automatically transcribe online meetings into text, integrate into your management software, create actionable items, and share outcomes instantly.
- **NOTIFICATION SERVICES** 
 Get notified about upcoming one-on-one meetings.
- **TRACK REPORTING**
 Keep track of your action items and meeting notes in one place.



## Tech

GRC uses a number of open source projects to work properly:

- [Python] - Recorder Functionalty!
- [node.js] - evented I/O for the backend
- [Express] - for local server app framework 
- [VAC] - an audio cable to route the application sound

And of course GRC itself is open source with a [public repository][grc]  on GitHub.

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

## Plugins

GRC is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Symbl | [plugins/dropbox/README.md][PlDb] |
| Sendgrid | [plugins/github/README.md][PlGh] |
| VAC | [plugins/googledrive/README.md][PlGd] |


## Deployment

Start the project

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

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
