import { Message } from '@aws-sdk/client-sqs';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';

export class MessageHandler {
  @SqsMessageHandler('MinhaPrimeiraFila', false)
  public async handleMessage(message: Message) {
    console.log('Manipulando Mensagem!');
  }

  @SqsConsumerEventHandler('MinhaPrimeiraFila', 'processing_error')
  public onProcessingError(error: Error, message: Message) {
    console.log('Erro no processo');
  }
}
