import { IScore } from "../models/score";
import { GetPlayerResponse } from "./player";
import { IPlayer } from "../models/player";

export class GetScoreResponse {
    score: number;
    player: GetPlayerResponse;
    constructor(score: IScore) {
        this.score = score.points || 0;
        this.player = new GetPlayerResponse((score.player || {}) as IPlayer);
    }
}

export class PutScoreResponse {
    success = true;
}
