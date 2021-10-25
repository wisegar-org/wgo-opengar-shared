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
