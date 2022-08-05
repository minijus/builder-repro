import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import {
  DevServerBuilderOptions,
  executeDevServerBuilder,
} from '@angular-devkit/build-angular';

function devServer(options: DevServerBuilderOptions, context: BuilderContext) {
  return executeDevServerBuilder(options, context);
}

export default createBuilder(devServer);
