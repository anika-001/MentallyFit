import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }

  moods = ["joyful, happy, relaxed, silly, content, great",
    "productive, active, energetic, motivated",
    "average, normal, uneventful, good",
    "sick, tired, lazy, dull, unmotivated, bored",
    "sad, lonely, numb, depressed, insecure",
    "angry, frustrated, anxious, grumpy"]
  user: any;
  monthdays: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  offset = 5;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mshort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  usermoods: Array<any> = [];
  temp = [];
  in: boolean = true;

  stories: Array<any> = [];

  stories2: any;
  storyform = new FormGroup({
    content: new FormControl(' ')
  })

  ngOnInit(): void {
    for (let i = 0; i < 53; i++) this.temp.push(i);
    for(let i = 0; i < (53*7); i++) this.usermoods.push({id: "", mood: -1})
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
      this.getMoods();
      this.getstories();
    })
  }

  getMoods() {
    this.db.collection("Users").doc(this.user.uid).collection("Moods").snapshotChanges().subscribe(res => {
      // this.usermoods = res;
      for(let i of res){
        // console.log(i.payload.doc.id);
        // let date = i.payload.doc.id.split(" ");
        // console.log(this.datetodaynumber("2021 0 7 5"));
        this.usermoods[this.datetodaynumber(i.payload.doc.id)].mood = i.payload.doc.data().mood;
        this.usermoods[this.datetodaynumber(i.payload.doc.id)].id = i.payload.doc.id;
        
      }
      // this.temp = []
      // for (let i = 0; i < (15 - res.length); i++) this.temp.push(i);
      // for (let i = 0; i < 52; i++) this.temp.push(i);
    });
  }

  getstory(x) {
    this.stories2 = [x];
    this.stories = [];
    console.log(x.payload.doc.id)
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(x.payload.doc.id).collection("Story").snapshotChanges().subscribe(res => {
      this.stories[x.payload.doc.id] = [];
      for (let j of res) {
        var time = j.payload.doc.id.split(" ")
        var timestr = time[0] + " Hours " + time[1] + " Minutes " + time[2] + " Seconds";
        this.stories[x.payload.doc.id].push({ "time": timestr, "story": j.payload.doc.data().story });

      }
      console.log(this.stories)
  })

}

getstories(){
  this.stories = []
  this.db.collection("Users").doc(this.user.uid).collection("Stories").snapshotChanges().subscribe(res => {
    var index = -1
    console.log(res)
    this.stories2 = res;
    this.stories2.reverse();
    for (let i of res) {
      this.stories = [];
      index += 1
      var id = i.payload.doc.id
      this.stories[id] = [];
      console.log(id)
      this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(id).collection("Story").snapshotChanges().subscribe(res => {
        var ind = index;
        var id = i.payload.doc.id
        console.log(res.length)
        this.stories[id] = [];
        for (let j of res) {
          var time = j.payload.doc.id.split(" ")
          var timestr = time[0] + " Hours " + time[1] + " Minutes " + time[2] + " Seconds";
          this.stories[id].push({ "time": timestr, "story": j.payload.doc.data().story });
          console.log(this.stories);
        }
      })
    }
  })
}

getdate(obj){
  var date = obj.split(" ");
  return this.days[date[3]] + " " + date[2] + " " + this.months[date[1]] + " " + date[0];
}

addstory() {
  var date = new Date()
  this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getFullYear().toString() + " " + date.getMonth().toString() + " " + date.getDate().toString() + " " + date.getDay().toString()).set({ "filler": "filler" }).then(res => {
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getFullYear().toString() + " " + date.getMonth().toString() + " " + date.getDate().toString() + " " + date.getDay().toString()).collection("Story").doc(date.getHours().toString() + " " + date.getMinutes().toString() + " " + date.getSeconds().toString()).set({ "story": this.storyform.get("content").value }).then(res => {
      this.storyform.get("content").setValue("");
    });
  })
}

addmood(mood) {
  var date = new Date()
  this.db.collection("Users").doc(this.user.uid).collection("Moods").doc(date.getFullYear().toString() + " " + date.getMonth().toString() + " " + date.getDate().toString() + " " + date.getDay().toString()).set({ "mood": mood });
}

datetodaynumber(date: string){
  let datearr = date.split(" ");
  let num = Number(datearr[2]) - 1;
  for(let i = 0; i < Number(datearr[1]); i++){
    num += this.monthdays[i];
  }
  num += this.offset;
  return num;
}

daynumbertodate(num: number){
  num -= this.offset;
  num += 1;
  let month = 0;
  if(num <= 0){
    return String(31 + num) + " December 2020";
  }
  for(let i = 0; i < 12; i++){
    if(num - this.monthdays[i] > 0){
      num -= this.monthdays[i]
      month += 1;
    }
    else{
      break
    }
  }
  if(month == 12){
    return String(num) + " January 2022";
  }
  return String(num) + " " + this.months[month] + " " + "2021";
}

togglein(){
  this.in = !this.in;
}

}
