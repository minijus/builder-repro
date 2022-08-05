import { BuilderContext } from '@angular-devkit/architect';
import {
  DevServerBuilderOptions,
  executeDevServerBuilder,
} from '@angular-devkit/build-angular';
import { DevServerBuilderOutput } from '@angular-devkit/build-angular/src/builders/dev-server';
import { ExecutorContext } from '@nrwl/devkit';
import { lastValueFrom, Observable } from 'rxjs';

export default async function runExecutor(
  options: DevServerBuilderOptions,
  context: ExecutorContext
) {
  await lastValueFrom<DevServerBuilderOutput>(
    executeDevServerBuilder(
      options,
      nonExistingMethodToConvertExecutorContextToBuilderContext(context)
    ) as unknown as Observable<DevServerBuilderOutput>
  );

  return {
    success: true,
  };
}

// Missing magic to convert ExecutorContext to BuilderContext
function nonExistingMethodToConvertExecutorContextToBuilderContext(
  context: ExecutorContext
): BuilderContext {
  return context as unknown as BuilderContext;
}
