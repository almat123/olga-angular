import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
    menu = MENU;
}

const MENU = [
    { "name": "House Salad", "description": "Tomatoes, red onions, cucumbers, shredded cheese, garlic croutons with your choice of dressing" },
    { "name": "Ceasar Salad", "description": "Romaine lettuce tossed with oven baked croutons, Parmesan cheese, and rich Caesar dressing" },
    { "name": "Chicken Salad", "description": "A classic egg salad with eggs, sweet pickles, & mayonnaise" }
];


