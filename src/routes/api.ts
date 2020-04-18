import { notFound } from "../middlewares/notFound";
import { getErrorHandler } from "../middlewares/errorHandler";
import { Router } from "express";
import { Logger } from "pino";

interface IRouterArgs {
    scoreRouter: Router;
    logger: Logger;
}

export default function createApiRouter({ logger, scoreRouter }: IRouterArgs) {
    const router = Router();

    router.use("/api/v1/score", scoreRouter);

    router.use("*", notFound);
    router.use(getErrorHandler(logger));

    return router;
}
