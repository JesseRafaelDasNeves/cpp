import {
  SqsModuleOptionsFactory,
  SqsOptions,
} from '@ssut/nestjs-sqs/dist/sqs.types';

export class SqsConfigService implements SqsModuleOptionsFactory {
  createOptions(): Promise<SqsOptions> | SqsOptions {
    return {
      consumers: [
        {
          name: 'primeira-fila',
          region: 'sa-east-1',
          queueUrl:
            'https://sqs.sa-east-1.amazonaws.com/863518419256/MinhaPrimeiraFila',
        },
      ],
      producers: [
        {
          name: 'primeira-fila',
          region: 'sa-east-1',
          queueUrl:
            'https://sqs.sa-east-1.amazonaws.com/863518419256/MinhaPrimeiraFila',
        },
      ],
    };
  }
}
