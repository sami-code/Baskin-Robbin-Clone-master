var express = require("express");
var router = express.Router();
require("dotenv").config();
const mailer = require("nodemailer");
const { User } = require("../../models/Users");
let email;
let transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "fa17-bcs-063@cuilahore.edu.pk",
    pass: "ciitlahore1",
  },
});

router.get("/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  email = user.email;
  console.log(email);
  let mailOptions = {
    from: "fa17-bcs-063@cuilahore.edu.pk",
    to: email,
    subject: "Baskin's Robin Order",
    text: "Your Order has been confirmed.",
  };
  let mailsend = transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.log("err ", err);
    } else {
      console.log("Mail sent..");
    }
  });
  return res.send("Mail Sent...!");
});
module.exports = router;
