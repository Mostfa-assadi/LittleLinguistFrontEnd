import { Injectable, OnInit } from '@angular/core';
import { GameProfile } from '../../shared/model/GameProfile';
import { GameDifficulty } from '../../shared/model/GameDifficulty';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games : GameProfile[] = [];

  constructor() {
    this.games.push(new GameProfile(1, "Matching Game", "You have to match each word with its meaning.",  GameDifficulty.MEDIUM, "matching-game"));
    this.games.push(new GameProfile(4, "Inordered Words Game", "You have to reorder the English word.", GameDifficulty.EASY, "inordered-words-game"));

  }

  getGames() : GameProfile[] {
    return this.games;
  }
}
