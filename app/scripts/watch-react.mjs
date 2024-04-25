import * as esbuild from 'esbuild';
import {config} from './config-react.mjs';

config.minify = false;
let ctx = await esbuild.context(config);
await ctx.watch();
console.log('watching...');
