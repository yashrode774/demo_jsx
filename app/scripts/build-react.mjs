import * as esbuild from 'esbuild';
import {config} from './config-react.mjs';

esbuild.build(config)
.catch(() => process.exit(1));
