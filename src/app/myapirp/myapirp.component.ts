import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-myapirp',
  templateUrl: './myapirp.component.html',
  styleUrls: ['./myapirp.component.scss']
})
export class MyapirpComponent implements OnInit {
postId:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = { 'content-type': 'application/json',
    'x-rapidapi-host': 'text-analysis12.p.rapidapi.com',
    'x-rapidapi-key': '21f05a919bmsh006432281901f7fp113deejsn5660fdc3d48d'};
    const body = { language:'english',text: 'Falcon 9’s first stage has landed on the Of Course I Still Love You droneship – the 9th landing of this booste' };
    this.http.post<any>('https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1', body, { headers }).subscribe(data => {
        this.postId = data;
        console.log("lk");
        console.log(this.postId);
    });
  }

}
