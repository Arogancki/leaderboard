import PlayerRepository from "../repositories/playerRepository";

interface IPlayerServiceArgs {
    playerRepository: PlayerRepository;
}

export default class PlayerService {
    private repository: PlayerRepository;
    constructor({ playerRepository }: IPlayerServiceArgs) {
        this.repository = playerRepository;
    }

    public getPlayer(id: string) {
        return this.repository.findOneById(id);
    }
}
