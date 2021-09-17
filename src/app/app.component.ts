import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appTest';

  posts: Post[] = [
    { title: 'фвфцвцфвц', text: 'some text', id: 1},
    { title: 'second title', text: 'other text', id: 2}
  ];
}
