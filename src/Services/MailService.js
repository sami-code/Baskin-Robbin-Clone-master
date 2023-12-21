import GenericService from "./GenericServices";
import React from "react";

class MailService extends GenericService {
  constructor() {
    super();
  }

  sendmail = (_id) => this.get("mail/" + _id);
}
let mailService = new MailService();
export default mailService;
