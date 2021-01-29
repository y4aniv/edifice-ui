/* These interfaces describe, from the UI point of view :
 * - Data types and contants, with a semantic meaning : applications, resources, actions on resources...
 * - High-level API : an explorer context (IExplorerContext),
 * - Low-level API : access to the communication bus, if needed (IBus, IBusAgent)
 */
export * from './interfaces';

/* This is the Framework entry point */
export { framework } from "./foundation/ExplorerFramework";

/* These utility classes offer, from the applications' perspective :
 * CURRENTLY BEING TESTED
 */
export { IAbstractBusAgent, AbstractBusAgent } from './foundation/Agent';
