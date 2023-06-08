import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  private apiUrl = 'https://api.videosdk.live/v2/rooms';
  private authToken = environment.token;

  constructor(private http: HttpClient) {}

  createMeeting(): Observable<string> {
    const headers = new HttpHeaders({
      authorization: this.authToken,
      'Content-Type': 'application/json',
    });

    return this.http
      .post<{ roomId: string }>(this.apiUrl, {}, { headers })
      .pipe(map((response) => response.roomId));
  }

  // joinMeeting(meetingId: string): Observable<string> {
  //   const headers = new HttpHeaders({
  //     authorization: this.authToken,
  //     'Content-Type': 'application/json',
  //   });

  //   return this.http
  //     .post<{ token: string }>(
  //       `${this.apiUrl}/${meetingId}/tokens`,
  //       {},
  //       { headers }
  //     )
  //     .pipe(map((response) => response.token));
  // }

  ngOnInit() {}
}
