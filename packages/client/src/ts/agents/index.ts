import { IBusAgent } from "..";

export type AgentFactory = () => IBusAgent;
export { factory as blogAgentFactory } from "./blog.agent";
export { factory as folderAgentFactory } from "./folder.agent";
export { factory as mindmapAgentFactory } from "./mindmap.agent";
