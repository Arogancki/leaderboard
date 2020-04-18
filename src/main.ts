import expressServerFactory from "./factories/expressServerFactory";
import { DependencyContainer } from "./utils/dependency";

(async function main() {
    await expressServerFactory(DependencyContainer.getInstance().cradle);
})().catch(console.error);
