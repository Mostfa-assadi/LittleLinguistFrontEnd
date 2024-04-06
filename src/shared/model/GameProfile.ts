import { GameDifficulty } from "./GameDifficulty";

export class GameProfile {

    constructor(public id : Number, 
                public name : String, 
                public description : String, 
                public difficulty : GameDifficulty,
                public gameURL : String) {
    }
}