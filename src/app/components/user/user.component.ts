import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.name = 'Johnny R';
    this.age = 30;
    this.email = 'fake@google.com';
    this.address = {
      street: '1st st',
      city: 'Monterey',
      state: 'CA'
    };
    this.hobbies = ['Watch movies', 'Listen to music', 'traveling'];
    this.hello = 'hello';
    
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
  onClick() {
    this.name = 'Jing Yang';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  
  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
  
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}