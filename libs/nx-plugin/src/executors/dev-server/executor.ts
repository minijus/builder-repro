import { DevServerBuilderOptions } from '@angular-devkit/build-angular';
import type { ExecutorContext } from '@nrwl/devkit';
import { workspaceRoot } from '@nrwl/devkit';
import { scheduleTarget } from 'nx/src/adapter/ngcli-adapter';

export default async function runExecutor(
  options: DevServerBuilderOptions,
  context: ExecutorContext
) {
  await scheduleTarget(
    workspaceRoot,
    {
      project: context.projectName as string,
      target: context.targetName as string,
      configuration: context.configurationName as string,
      runOptions: options,
      executor: '@angular-devkit/build-angular:browser',
    },
    options.verbose
  );

  return {
    success: true,
  };
}
