import { ISessionFramework } from "./interfaces";
import { Session } from "./Session";

export class SessionFramework implements ISessionFramework {
    session:Session = new Session();

    public initialize():Promise<void> {
        return this.session.initialize();
        // TODO Finir le bootstrapping, voir infra-front/lib.ts
    }
}

/** The whole framework is a singleton. */
export const session:SessionFramework = new SessionFramework();
