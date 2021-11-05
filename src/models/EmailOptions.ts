import { Readable } from 'stream';
import { Url } from 'url';
export class EmailOptions {
  subject: string;
  to: string;
  from?: string;
  text?: string;
  html?: string;
  bcc?: string;
  envelope?: {
    to: string;
    from: string;
  };
  attachments?: {
    filename?: string;
    content?: string | Buffer | Readable;
    path?: string | Url;
    encoding?: string;
  }[];
}

export interface IEmailNotify {
  emailOptions: EmailOptions;
  bodyTemplate: {
    //Body message or Handlebars template
    template: string;
    //Handlebars data
    data: any;
  };
}
