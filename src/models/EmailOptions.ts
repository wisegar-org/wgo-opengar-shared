export class EmailOptions {
  subject: string;
  to: string;
  from?: string;
  text?: string;
  html?: string;
}

export interface IEmailNotify {
  emailOptions: {
    to: string;
    subject: string;
  };
  bodyTemplate: {
    //Body message or Handlebars template
    template: string;
    //Handlebars data
    data: any;
  };
}
