import { Router } from "express";
import ScoreController from "../controllers/scoreController";
import { GetScoresRequest, PutScoreRequest } from "../dto/score";
import { IValidator } from "../utils/helpers/validator";

interface IScoreRouterArgs {
    scoreController: ScoreController;
    validator: IValidator;
}

export default function createScoreRouter({ validator, scoreController }: IScoreRouterArgs) {
    const router = Router();

    router.get("/", validator.query(GetScoresRequest), scoreController.getScores.bind(scoreController));
    router.put("/", validator.body(PutScoreRequest), scoreController.putScore.bind(scoreController));

    return router;
}
