import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text =''
  randomText  = lorem.sentence();

  onInput(value: string){
    this.text = value;
  }

  getClass(randomLetter: string , textLetter: string){
    if(!textLetter) return 'pending'

   return randomLetter== textLetter? 'green': 'red';
  }

}
