import { ScoreSchema, Score, IScore, scoreCollectionName } from "../models/score";
import Repository from "../utils/classes/repository";
import { Types } from "mongoose";

export default class ScoreRepository extends Repository<Score> {
    constructor() {
        super(scoreCollectionName, ScoreSchema);
    }

    public create({ player, ...props }: Omit<IScore, "player"> & { player: string }) {
        return super.create({ player: new Types.ObjectId(player), ...props });
    }

    public findOne(query: Partial<Omit<IScore, "player">> & { player?: string }) {
        return this.model.findOne(query.player ? { ...query, player: new Types.ObjectId(query.player) } : query);
    }

    async getScores({ skip, limit }: { skip: number; limit: number }) {
        return this.model.find({}).sort({ points: -1 }).skip(skip).limit(limit).populate("player");
    }
}
