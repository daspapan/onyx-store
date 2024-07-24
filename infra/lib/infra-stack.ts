import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CDKContext } from '../cdk.context';
import { createAmplifyHosting } from './hosting/amplify';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps, context: CDKContext) {
    super(scope, id, props);

    const appNameWithStage = `${context.appName}-${context.stage}`

    const amplifyHosting = createAmplifyHosting(this, {
			appName: appNameWithStage,
			account: context.env.account,
			branch: context.branch,
			ghOwner: context.hosting.ghOwner,
			ghTokenName: context.hosting.ghTokenName,
			repo: context.hosting.repo,
			environmentVariables: {
				region: this.region,
			},
		})

    new cdk.CfnOutput(this, 'AmplifyAppId', {value: amplifyHosting.appId,})
    
  }
}
