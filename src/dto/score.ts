import * as jf from "joiful";
import Validateable from "../utils/classes/validateable";

export class GetScoresRequest extends Validateable {
    @(jf.number().min(1).default(1))
    page!: number;

    @(jf.number().min(1).max(100).default(10))
    pageSize!: number;
}

export class PutScoreRequest extends Validateable {
    @(jf.string().required())
    player!: string;

    @(jf.number().min(0).max(999999).required())
    points!: number;
}
