import React from "react";
import { Grid } from "@material-ui/core";
import MediaCard from "./card";
const AboutUs = () => {
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item>
        <MediaCard
          title={"Taha Baber"}
          details={"FA17-BCS-063"}
          url={
            "https://scontent.flhe9-1.fna.fbcdn.net/v/t1.0-9/s960x960/86601649_2630868533633683_9059931274063380480_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_eui2=AeGZhvbm0FWGF8L2yzX8UNQ5Gf_MEiif4IoZ_8wSKJ_gitjqaT6ax851vhn-oEH2kerA97CPPm6864tO2zT8UcIi&_nc_ohc=bw-5-W8QSYoAX8GICgY&_nc_ht=scontent.flhe9-1.fna&_nc_tp=7&oh=bad8be9600e80e6ae1ff2b1908846ccd&oe=5F5FBF44"
          }
        />
      </Grid>
      <Grid item>
        <MediaCard
          title={"Noor Aftab"}
          details={"FA17-BCS-045"}
          url={
            "https://scontent.flhe9-1.fna.fbcdn.net/v/t1.0-9/94368654_3667059026700310_4421096187537391616_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_eui2=AeHQhZoCrnEOXqca4gUsQz2tk5oXcrGMhmGTmhdysYyGYavcbhN5DhdsEx7DNZxXSyBiuEkP3kz_HiMLnqyqUHCP&_nc_ohc=RFiDsDKzKswAX97Qlo9&_nc_ht=scontent.flhe9-1.fna&oh=669e7b29f3eb37bd2e44355a31b86e50&oe=5F616551"
          }
        />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
