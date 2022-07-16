import * as cdk from 'aws-cdk-lib';

export class CdkprojectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkprojectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}