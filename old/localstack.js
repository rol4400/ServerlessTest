// /*
//  * Use the default endpoints provided by localstack
//  */
// const localstack = require('node-localstack')();
 
 
// /*************/
 
 
// /*
//  * Use custom endpoints
//  */
 
// // Endpoints should contain the endpoint for each service
// // not using the default endpoint provided by localstack
// const endpoints = {
//   'APIGateway': 'http://localhost:4201',
//   'CloudFormation': 'http://localhost:4202',
//   'CloudWatch': 'http://localhost:4203',
//   'DynamoDB': 'http://localhost:4204',
//   'ES': 'http://localhost:4205',
//   'Firehose': 'http://localhost:4206',
//   'Kinesis': 'http://localhost:4207',
//   'Lambda': 'http://localhost:4208',
//   'Redshift': 'http://localhost:4209',
//   'Route53': 'http://localhost:4210',
//   'S3': 'http://localhost:4211',
//   'SES': 'http://localhost:4212',
//   'SNS': 'http://localhost:4213',
//   'SQS': 'http://localhost:4214',
//   'SSM': 'http://localhost:4215'
// };
 
// const AWS = require('node-localstack')(endpoints);
 
// //...
 
// // const <SERVICE> = new AWS.<SERVICE>(options)
// // // Use <SERVICE> variable as you would use it with AWS SDK. Just keep in mind that you won't have
// // // access to all services but only the ones provided by localstack and supported by this library
 
// // // S3 example
// // const s3 = new AWS.S3();
// // s3.listBuckets({}, (err, data) => {
// //   // ...
// // });