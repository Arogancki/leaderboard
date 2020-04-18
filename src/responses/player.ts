import { IPlayer } from "../models/player";

export class GetPlayerResponse {
    private nick: string;
    private rank: string;
    constructor(player: IPlayer) {
        this.nick = player.nick || "unknown";
        this.rank = player.rank || "unknown";
    }
}
