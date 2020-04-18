import { PlayerSchema, Player, playerCollectionName } from "../models/player";
import Repository from "../utils/classes/repository";

export default class PlayerRepository extends Repository<Player> {
    constructor() {
        super(playerCollectionName, PlayerSchema);
    }
}
