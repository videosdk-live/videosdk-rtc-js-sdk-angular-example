import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-join-screen',
  templateUrl: './join-screen.component.html',
  styleUrls: ['./join-screen.component.css'],
})
export class JoinScreenComponent {
  @Output() joinMeeting = new EventEmitter();
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @Input() participantName: string = '';
  @Input() meetingId: string = '';
  @Input() isCreatedMeetingClicked: boolean = false;
  @Input() isJoinedMeetingClicked: boolean = false;
  @Input() showMeetingIdError: boolean = false;
  @Input() showParticipantNameError: boolean = false;
  @Output() changeName = new EventEmitter<string>();
  @Output() validateMeeting = new EventEmitter<string>();
  @Output() createMeeting = new EventEmitter();
  @Output() startMeeting = new EventEmitter();

  fireChangeName() {
    this.changeName.emit(this.participantName);
  }

  fireJoinMeeting() {
    this.joinMeeting.emit();
  }

  fireCreateMeeting() {
    this.createMeeting.emit();
  }

  fireStartMeeting() {
    this.startMeeting.emit();
  }

  fireValidateMeeting() {
    this.validateMeeting.emit(this.meetingId);
  }

  constructor() {
    this.videoPlayer = new ElementRef(null);
  }

  setVideoSource(sourceObject: any) {
    this.videoPlayer.nativeElement.srcObject = sourceObject;
  }

  ngOnInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Request permission to access the camera
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const sourceObject = stream;
          this.setVideoSource(sourceObject);
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }
}
