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
  @Output() changeName = new EventEmitter<string>();

  fireChangeName() {
    this.changeName.emit(this.participantName);
  }

  fireJoinMeeting() {
    this.joinMeeting.emit();
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
