import { rewritePathsOfTsConfig } from "@nmhillusion/n2mix/rewrite";
import * as path from "path";
import * as fs from "fs";

console.log(
  " START rewrite import path >>> ",
  path.resolve(__dirname, "../tsconfig.rewrite.path.json")
);

rewritePathsOfTsConfig(
  path.resolve(__dirname, "../tsconfig.rewrite.path.json"),
  path.resolve(__dirname, "../dist/n2angular"),
  (filePath) => String(filePath).endsWith(".ts")
);

console.log(" <<< END rewrite import path");
