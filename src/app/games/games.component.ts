import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username='';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
    id: 1,
    name: 'Uncharted 4'
    },
    {
    id: 2,
    name: 'Horizon Zero Dawn'
    },
    {
    id: 3,
    name: 'Bloodborne'
    },
  ]
}
