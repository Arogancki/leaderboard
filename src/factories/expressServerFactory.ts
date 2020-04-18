import { Logger } from "pino";
import express, { Router } from "express";
import { Application } from "express";
import middlewaresFactory from "./middlewaresFactory";
import { asValue } from "awilix";
import { DependencyContainer, Types } from "../utils/dependency";
import env from "../configs/env";

interface ExpressServerFactoryArgs {
    apiRouter: Router;
    logger: Logger;
}

export default async function expressServerFactory({ logger, apiRouter }: ExpressServerFactoryArgs) {
    const server = express();

    const port = env.SERVER_PORT;

    const dependencyContainer = DependencyContainer.getInstance();
    dependencyContainer.register<Application>(Types.Server, asValue(server));

    await middlewaresFactory(dependencyContainer.cradle);

    server.use(apiRouter);

    return new Promise((resolve) => {
        server.listen(port, () => {
            logger.info(`Express server has started on port ${port}`);
            resolve(server);
        });
    });
}
