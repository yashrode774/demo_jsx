import * as esbuild from 'esbuild';
import {config} from "./config-react.mjs";
config.minify = false;
esbuild.build(config)
  .catch(() => process.exit(1));
