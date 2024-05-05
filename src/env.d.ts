/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export {};

declare global {
  const _GITLOG_: {
    recentCommit: string;
    recentBranch: string;
    recentTime: string;
    recentVersion: string;
    recentBuild: string;
    lastCommitName: string;
    env: string;
  };
  namespace NodeJS {
    interface ProcessEnv {
      // DB_PORT: number;
      // DB_USER: string;
      // ENV: "test" | "dev" | "prod";
      ADAPTOR: "vercel" | "node";
      PORT: number;
      API_BASE_URL: string;
    }
  }
}
