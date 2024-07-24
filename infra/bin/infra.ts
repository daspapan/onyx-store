#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as gitBranch from 'git-branch';
import { InfraStack } from '../lib/infra-stack';
import { CDKContext } from '../cdk.context'

const app = new cdk.App();

const currentBranch = process.env.AWS_BRANCH || gitBranch.sync()
const globals = app.node.tryGetContext('globals') || {}
const branchConfig = app.node.tryGetContext(currentBranch)

// Combine the globals and branch-specific configuration
const context: CDKContext & cdk.StackProps = {
	branch: currentBranch,
	...globals,
	...branchConfig,
}


const appName = `${context.appName}-${context.stage}`
const stackName = `${appName}-stack`

new InfraStack(
  app, 
  stackName, 
  {
    stackName,
		env: context.env,
  },
  context
);