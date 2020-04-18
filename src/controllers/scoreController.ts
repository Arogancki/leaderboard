import { Request, Response, NextFunction } from "express";
import ScoreService from "../services/scoreService";
import { PutScoreRequest, GetScoresRequest } from "../dto/score";
import { PutScoreResponse, GetScoreResponse } from "../responses/score";
import { IScore } from "../models/score";

interface IScoreControllerArgs {
    scoreService: ScoreService;
}

export default class ScoreController {
    private service: ScoreService;
    constructor({ scoreService }: IScoreControllerArgs) {
        this.service = scoreService;
    }

    public async getScores(req: Request & { query: GetScoresRequest }, res: Response, next: NextFunction) {
        try {
            const scores = await this.service.getScores(req.query);

            res.json(scores.map((score: IScore) => new GetScoreResponse(score)));
        } catch (err) {
            next(err);
        }
    }

    public async putScore(req: Request & { body: PutScoreRequest }, res: Response, next: NextFunction) {
        try {
            await this.service.saveScore(req.body);

            res.json(new PutScoreResponse());
        } catch (err) {
            next(err);
        }
    }
}
