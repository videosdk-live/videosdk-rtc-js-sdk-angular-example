# VideoSDK for Angular 2

[![Documentation](https://img.shields.io/badge/Read-Documentation-blue)](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/getting-started)
[![Discord](https://img.shields.io/discord/876774498798551130?label=Join%20on%20Discord)](https://discord.gg/kgAvyxtTxv)
[![Register](https://img.shields.io/badge/Contact-Know%20More-blue)](https://app.videosdk.live/signup)

At Video SDK, we’re building tools to help companies create world-class collaborative products with capabilities of live audio/videos, compose cloud recordings/rtmp/hls and interaction APIs

## Setup Guide

- Sign up on [VideoSDK](https://app.videosdk.live/) and visit [API Keys](https://app.videosdk.live/api-keys) section to get your API key and Secret key.

- Get familiarized with [API key and Secret key](https://docs.videosdk.live/flutter/guide/video-and-audio-calling-api-sdk/signup-and-create-api)

- Get familiarized with [Token](https://docs.videosdk.live/flutter/guide/video-and-audio-calling-api-sdk/server-setup)

<br/>

### Prerequisites

- Valid [Video SDK Account](https://app.videosdk.live/signup)

## Run the Sample App

### 1. Clone the sample project

Clone the repository to your local environment.

```js
git clone https://github.com/videosdk-live/videosdk-rtc-js-sdk-angular-example.git
cd angular-2/
```

### 2. Install the dependecies

Install all the dependecies to run the project.

```js
npm install
```

### 3. Update the enviroment.ts file

- Create a new file enviroment.ts inside `src/enviroments` and Copy the enviroment.example.ts file's data to enviroment.ts file

- Update the TOKEN in `enviroment.ts` file.Token would be generated from dashboard `https://app.videosdk.live/dashboard`

  ```js
  token: YOUR_TOKEN,
  ```

### 4. Run the sample app

- Bingo, It's time to run app

  ```js
  ng serve
  ```

<br/>

## Key Concepts

- `Meeting` - A Meeting represents Real time audio and video communication.

  **`Note : Don't confuse with Room and Meeting keyword, both are same thing 😃`**

- `Sessions` - A particular duration you spend in a given meeting is a referred as session, you can have multiple session of a particular meetingId.
- `Participant` - Participant represents someone who is attending the meeting's session, `local partcipant` represents self (You), for this self, other participants are `remote participants`.
- `Stream` - Stream means video or audio media content that is either published by `local participant` or `remote participants`.

<br/>

## Token Generation

Token is used to create and validate a meeting using API and also initialise a meeting.

🛠️ `Development Environment`:

- For development, you can use temporary token. Visit VideoSDK [dashboard](https://app.videosdk.live/api-keys) to generate temporary token.

🌐 `Production Environment`:

- For production, you have to set up an authentication server to authorize users. Follow our official example repositories to setup authentication server, [videosdk-rtc-api-server-examples](https://github.com/videosdk-live/videosdk-rtc-api-server-examples)

<br/>

## API: Create and Validate meeting

- `create meeting` - Please refer this [documentation](https://docs.videosdk.live/api-reference/realtime-communication/create-room) to create meeting.
- `validate meeting`- Please refer this [documentation](https://docs.videosdk.live/api-reference/realtime-communication/validate-room) to validate the meetingId.

<br/>

## [Initialize a Meeting](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#initmeeting)

```js
const meeting = VideoSDK.initMeeting({
  meetingId: "abc-1234-xyz",
  name: "John Doe",
  micEnabled: true,
  webcamEnabled: true,
  maxResolution: "hd",
});
```

<br/>

## [Mute/Unmute Local Audio](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic)

```js
// unmute mic
meeting.unmuteMic();

// mute mic
meeting.muteMic();
```

<br/>

## [Enable/Disable Local Webcam](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera)

```js
// enable webcam
meeting.enableCam();

// disable webcam
meeting.disableCam();
```

<br/>

## [Leave or End Meeting](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/setup-call/leave-end-meeting)

```js
// Only one participant will leave/exit the meeting; the rest of the participants will remain.
meeting.leave();

// The meeting will come to an end for each and every participant. So, use this function in accordance with your requirements.
meeting.end();
```

<br/>

## [Listen for Meeting Events](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/get-notified/meeting-events)

By registering callback handlers, VideoSDK sends callbacks to the client app whenever there is a change or update in the meeting after a user joins.

```js
meeting.on("meeting-joined", () => {
  // This event will be emitted when a localParticipant(you) successfully joined the meeting.
});

meeting.on("meeting-left", () => {
  // This event will be emitted when a localParticipant(you) left the meeting.
  // [errorMsg]: It will have the message if meeting was left due to some error like Network problem
});

meeting.on("participant-joined", (participant) => {
  // This event will be emitted when a new participant joined the meeting.
  // [participant]: new participant who joined the meeting
});

meeting.on("participant-left", (participant) => {
  // This event will be emitted when a joined participant left the meeting.
  // [participantId]: id of participant who left the meeting
});
```

<br/>

## [Listen for Participant Media Events](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/get-notified/media-events)

By registering callback handlers, VideoSDK sends callbacks to the client app whenever a participant's video, audio, or screen share stream is enabled or disabled.

```js
participant.on("stream-enabled", (stream) => {
  // This event will be triggered whenever a participant's video, audio or screen share stream is enabled.
});

participant.on("stream-disabled", (stream) => {
  // This event will be triggered whenever a participant's video, audio or screen share stream is disabled.
});
```

If you want to learn more about the SDK, read the Complete Documentation of [Javascript VideoSDK](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/concept-and-architecture)

<br/>

## Project Description

<br/>

> **Note :**
>
> - **main** branch: Simple UI with basic features.

<br/>

## Use case type

- **Meeting** - In `Meeting` you can enable mic and webcam, record the meeting, raise hand, chat, share your screen.

<br/>

## Project Structure

There are 1 folder :

1. [`app`](https://github.com/videosdk-live/videosdk-rtc-js-sdk-angular-example/tree/master/angular-2/src/app) - This folder includes folders or files related to meeting.

<br/>

## Common components

**1. Create or join Meeting**

- [`app/join-screen/join-screen.component.html`](https://github.com/videosdk-live/videosdk-rtc-js-sdk-angular-example/blob/master/angular-2/src/app/join-screen/join-screen.component.html) : It shows the user with the option to meeting type and create or join a meeting and to initiate webcam and mic status.

- `meeting.service.ts` : It includes all the API calls for create and validate meeting.

- If you click `Create Meeting`, it will show following:

  - `MeetingId` - You can copy this meetingId and share it with other participants that wants to join the meeting.
  - `TextField for ParticipantName` - This text field will contain name of the participant.
  - `Start Meeting Button` - This button will call api to create meeting with meetingId that participant want to join.

  <p align="center">
  <img width="600" height="338" src="public/create_meeting.gif"/>
  </p>

- If you click `Join Meeting`, it will show following:

  - `TextField for MeetingId` - This text field will contain the meeting Id that you want to join.
  - `TextField for ParticipantName` - This text field will contain name of the participant.
  - `Join Meeting Button` - This button will call api to validate meeting with meetingId that participant want to join.

  <p align="center">
  <img width="600" height="338" src="public/join_meeting.gif"/>
  </p>

**2. Topbar**
[`app/top-bar/top-bar.component.html`](https://github.com/videosdk-live/videosdk-rtc-js-sdk-angular-example/blob/master/angular-2/src/app/top-bar/top-bar.component.html) - It contains meetingId , Disable/Enable Webcam , Disable/Enable Mic and Leave Meeting Button.

**3. ParticipantGrid**

[`app/app.component.html`](https://github.com/videosdk-live/videosdk-rtc-js-sdk-angular-example/blob/master/angular-2/src/app/app.component.html) - It contains joinScreen, topbar and grid of participant that are displayed in the main screen.

<br/>

## Examples

### Examples for Conference

- [videosdk-rtc-prebuilt-examples](https://github.com/videosdk-live/videosdk-rtc-prebuilt-examples)
- [videosdk-rtc-javascript-sdk-example](https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example)
- [videosdk-rtc-react-sdk-examplee](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example)
- [videosdk-rtc-react-native-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example)
- [videosdk-rtc-flutter-sdk-example](https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example)
- [videosdk-rtc-android-java-sdk-example](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example)
- [videosdk-rtc-android-kotlin-sdk-example](https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example)
- [videosdk-rtc-ios-sdk-example](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example)

### Examples for Live Streaming

- [videosdk-hls-react-sdk-example](https://github.com/videosdk-live/videosdk-hls-react-sdk-example)
- [videosdk-hls-react-native-sdk-example](https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example)
- [videosdk-hls-flutter-sdk-example](https://github.com/videosdk-live/videosdk-hls-flutter-sdk-example)
- [videosdk-hls-android-java-example](https://github.com/videosdk-live/videosdk-hls-android-java-example)
- [videosdk-hls-android-kotlin-example](https://github.com/videosdk-live/videosdk-hls-android-kotlin-example)

## Documentation

[Read the documentation](https://docs.videosdk.live/) to start using Video SDK.

## Community

- [Discord](https://discord.gg/Gpmj6eCq5u) - To get involved with the Video SDK community, ask questions and share tips.
- [Twitter](https://twitter.com/video_sdk) - To receive updates, announcements, blog posts, and general Video SDK tips.
