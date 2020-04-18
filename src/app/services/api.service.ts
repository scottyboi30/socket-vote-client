import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.api;

  constructor(private http: HttpClient) { }

  startVoting(path, question) {
    const formData = new FormData();
    const obs = from(fetch(path).then(r => r.blob()));

    return obs.pipe(
      switchMap(blob => {
        formData.append('file', blob);
        formData.append('question', question);
        return this.http.post<any>(`${this.url}/voting`, formData);
      })
    );
  }

  getVotings() {
    return this.http.get<any[]>(`${this.url}/voting`);
  }
 
  getVoting(id) {
    return this.http.get(`${this.url}/voting/${id}`);
  }
 
  upvote(id) {
    return this.http.put(`${this.url}/voting/${id}/up`, {});
  }
 
  downvote(id) {
    return this.http.put(`${this.url}/voting/${id}/down`, {});
  }
 
  getVotingImage(id) {
    return this.http.get(`${this.url}/voting/${id}/image`);
  }
 
  getComments(id) {
    return this.http.get<any[]>(`${this.url}/comments/${id}`);
  }
}
