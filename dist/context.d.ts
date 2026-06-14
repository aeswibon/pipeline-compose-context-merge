export declare function parseJsonObject(label: string, raw: string): Record<string, unknown>;
export declare function readContextFile(contextFile: string): Record<string, unknown>;
export declare function mergeStageOutputs(context: Record<string, unknown>, stageId: string, outputs: Record<string, unknown>): Record<string, unknown>;
export declare function writeContextFile(contextFile: string, context: Record<string, unknown>): void;
