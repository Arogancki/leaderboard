import ScoreRepository from "../repositories/scoreRepository";
import { PutScoreRequest, GetScoresRequest } from "../dto/score";
import PlayerService from "../services/playerService";
import boom from "boom";

interface IScoreServiceArgs {
    scoreRepository: ScoreRepository;
    playerService: PlayerService;
}

export default class ScoreService {
    private scoreRepository: ScoreRepository;
    private playerService: PlayerService;
    constructor({ playerService, scoreRepository }: IScoreServiceArgs) {
        this.scoreRepository = scoreRepository;
        this.playerService = playerService;
    }

    async saveScore(score: PutScoreRequest) {
        const { player, points } = score;
        if (!(await this.playerService.getPlayer(player))) {
            throw boom.notFound("Player not found.");
        }

        // unique: true on schema - allows to avoid race condition
        const playerScore = await this.scoreRepository.findOne({ player });
        if (playerScore) {
            await this.scoreRepository.updateOneById(playerScore._id, { points });
        } else {
            await this.scoreRepository.create(score);
        }
    }

    async getScores({ page, pageSize }: GetScoresRequest) {
        return this.scoreRepository.getScores({ skip: (page - 1) * pageSize, limit: pageSize });
    }
}
