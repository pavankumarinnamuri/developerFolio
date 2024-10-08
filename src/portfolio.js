/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pavan Kumar Innamuri",
  title: "Hi all, I'm Pavan",
  subTitle: emoji(
    "A Passionate Cloud Engineer 🌩️ with Experience in Architecting Scalable Cloud Environments and Automating Infrastructure with AWS, Terraform, and Ansible"  ),
  resumeLink:
    "https://drive.google.com/file/d/1-ueYf68dBJf1OhwRDHmvrTzec1qTU17Y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pavankumarinnamuri",
  linkedin: "https://www.linkedin.com/in/pavankumarinnamuri/",
  gmail: "pavankumarinnamuri619@gmail.com",
  facebook: "https://www.facebook.com/pavankumarinnamuri",
  medium: "https://medium.com/@pavankumarinnamuri",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE CLOUD ENGINEER PASSIONATE ABOUT AUTOMATING AND OPTIMIZING INFRASTRUCTURE",
  skills: [
    emoji(
      "🌩️ Architect and deploy highly scalable and secure cloud environments on AWS and Azure"
    ),
    emoji("📈 Automate CI/CD pipelines and improve infrastructure visibility with tools like Terraform, Ansible, and Jenkins"),
    emoji(
      "🔗 Integration of cloud services and third-party tools for monitoring, disaster recovery, and cost optimization")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fab fa-terminal"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fab fa-terraform"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fab fa-cogs"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-kubernetes"
    },
    {
      skillName: "SQL DATABASE",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "NoSQL (MongoDB)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Arlington",
      //logo: require("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAD6CAMAAAA89pM0AAAA81BMVEX///8AZLAAAAAjHyD2gCaysbEAWqy7zuX7+/sHAADH1+kAYq8dGRr1dwDAv7/q6upQTk/Ix8gAXa1FQ0QRCgz96NsZFBUAV6sAX647ODlpZ2jZ2dmqqanu7u58envCwcHMzMyNi4xwb2+joqKamZnr6+tdW1zc5/KHhYb93sudnJwMAAWRkJDW1dU1MjP3mVnl7vb+9/L2hTAsKCmLrdNklMd4oc02erv1bgD+7+b2exX3mVr6v5z9699VU1SgvNsbbrVxnMv4pXD2jD/5s4j6yKqVtNf81b/4o2z5sIOxyOL5u5UsdblQh8EAUan3k033izujULZxAAAXmklEQVR4nO1dC3faONN25ZLaxWAIxgkGjMOtJFzahO1uStJsN5c3zWbb9P//mk93S7aRHBoC5zvMOdvYRpbmkWZGMyPJaxgvT38V32ho/+81NPvy9OFAB+RN8dummcxFf+5rkbw5eL9pLnOQdagH8ubwx6bZzEF/7+VA8ubg06b51NN/Wn1HtP/HpvnU0nu9vhP52jSjWvqcR00g7b3bNKcasnIOyZviX5tmVUP/y2GCCR182DSvanqTS98R7f+5aV6V9C6vcEHxOrQ2za2KfuTUd0R72+x8fco1K7JB+W/T7Croj9z6jmibna9ibn1HdPh50/wupX+fI1yQfm6tzutDLJn2/7dpjpdQjhBLpq0NuP55lr4j2lKdt/aeKVxbG3DlC7Fk2tvKgCtfiCXTVgZceUMsiYrFTbOdQYoQSzFYe/9umu8UfVIMyTfFoGxfwKUIsfb+VUyZ2xdwqSTokwLm/j+b5jxBihCr+EM1+xf3t8z5UoRYKKL6tnzItizgUrlcKN2oEK8tC7gUWW1snZRIt8n5shQhFpEehQOwVQGXKsT6iV0rVVy8TdluxXxBpz6VeG1RwKVik5kmlX+5Pc7XP4osFxMdlXhtTbZbldXmfpVq3LYm4FKFWPEqr2Jy3BrnS8VjHBSqxGtLst2qEIsIVx39o8y8FLfC+VKtYhHhusZQtj7gUoVY1HItHtG/KvHaioBLySD2Do8/nqE/SvHaBp1XZbX38Oz9cHf+Bf1VWYbDzQdcylUsIlwf6+eX6K9y9A42rvOqrDaR/uPL49INulCK18YDLiV3xDV8+HpcKmnFa+PZ7j9VC4tEuM6M49LiDl0pl7w2HHBZh1rhql9DJG+f0KUyTbnhgEu5ikWE6/YYIdGL14YDLuUq1h6eI94aCEkO8dpotlvtS+Fpsf6RILnQl99kwKUKsahwPd5hJG9Lp+hOuTBxsLmAS71xiFouqCB1iISKlwp6cXMB198qsScTxBfkcmEkWLzUiyybc74OD/aW008sXJePFAkTL+Urm3K+rPdKIsJVZ0gW9+j+g/qdDSHJIQtfSuhfguQiR5WbmVI+/dRn3C6v0b8YydvFqa609WMzAdcf+wefda74DRYpgqR0ryn8oXi4mXkeGpv9b0zCvtaz6PgcjwMdk+/ZhdhQ/X1Q3EyS5R1yuYoHNJVw+lR6e35eShJ2HBkS+N/Z2c3T08fv368fbm8fLy/vLp9IEAYl6zMy0MW9DSAhLlfxgFnOy4fj27MSYlegUp0jSWv86f330q+v5PrDNzI3bSDJwl2ovf+obNefvhr1JBici/iKx0TWqdP7i0Xp/IHe/cv2vGwgyRKvYhW5v3RxC/+pP/4SwCyQ8UJIyOhQOr37WCotFtwGfD4obmyet/ZjZ7B4wPT07hcOQ75ePnEwiFuIpHQpwLiAKOAvT1TXP/0neD2vnmSRQ6y9v6iEfTmjHH+Bvb5Y0Gnka2nx3WDPL+jz0iN99G5f9JCL+69siBMh1uEhczQebphVpX0PNR2OiUWePFEY0JAd02J/JpzKV06ypH3aAzbhH5fueDFonRal0t2X8zoajVjk3pa+M8n6Kxk/v3KSJSOrffCDGqfTpwvBLzm9v17cXZ6KMCAQBvb9YUZFr+lHZma1998ws3MpOyb174+lcwHHgk0ixh9Z9bzqCld2iFU8YCJeL12zonC6XBzfGnASZINSYpOI9SM7M/PzFXU+kwEkGDxn9b0ENdq6v4b8l47r50i94VQIsSwWbLw+vFkScr5ikmV5DBu7lHelBzIMi1s4RMSjP73/uPgoOozL6NWQKDYOFbnjdE2l6QaZs8VH+pRP9Z9Va/ivlWRRns3gLiUzU19wlojN8Q+3+A9zGJfU8Vo6rzmbcYDF/LgU29vj2O+qL/CfffWJm9dyvjRnsQgbDwvuQBr3GBV5+S1GpEzxv9qqtuZsBp2jqck1OBLqet1id0uzubi49yorXJqzGfuCcFGRImNCJvavRLw04/oqAZfubIYgXMzdvScDVMJT+xn+VyNer+J8aY6/022NiPcFieKNLzdU1H6hu8s84vUazpfubAYRLhK5k0nw/vzxibryyE85JbqjBvIaK1y6sxlEuG4XPL/1gPyW2xIPII0bIl6aoV3/eQ7N2Qwq4GfMAJ/eXGAzdPyWWGU4T97hSVInXmvfUqhlgAsXzqrEYdfpRYmqzilenNedGFy7zuuOvxPhelwQA/y4+Bq/eomhQH2/wGkL3Ycz1qzznzT6TnvyF/azrKdr6eX6GdKeY+M+l3itOeDSHX8nwvUV+771RSqlfV3CFo1YZ91h5/Vmu3XH35lwQXZp7kumu8VicWGQdITu0OBaAy6dRFDhuoEi9P02swY4S5buju9yVbbOj2bojr+Tbvxyfnt6drysjttSqU6S3eq61up8KTcKIiLCdXlz/1GxfnW8+PWQS7zWmO3WHX9nluvpUlnN6QWxBdpzg+sLuDQNM8slTiLZdEmsl+4o59rOcGmPv5M+rOvqQWWIeGnUbm0Bl+74+7MdDK14rSnbrT3+/vwJQHd6e03Ol/YLY89XUJ14rcf50n5xqPj81KFWvNbifGmPv6/iXWg/BrIO50u5hxE3uoL114rXGpwvrSCspJ36Wl8+2639wthKvWdpv3Pw4lsKdSHWqq6FVrxePNut/cLYiqb/vfYzGi/tfGn1fdWktGoT+G9VvIT0Xxhbtev0X/g7eFEk2i+MrWxj3mnF60UDLm2I9RsyoK36RQ/Q678wtrpe5hCvF3S+9F+vW31PvF68XjDb/e9PxXZlsmd5dQNjqfZC09pfzPl6/05Lv9HWemvf0Y52tKMd7WhHO9rRjna0ox3t6P8VWZikK3qffCZdxb/GxfhzsQwnt1yIhNfwz80Cf9WYFtINprgdVAtlN8k8KdnxAKQuejxjVzX4d0BKmujZBF6d8HI9dOFF8KqNntlTWAy9MXZ8eB9ipvFr8J9gytpsX5mTEQDoNWOIa2jBqw5833cA8H0fgBF600e/9eiFJzCNaFoD4VEFzMv0voAYcNC7oAlv++MZK1mjV+2G12CozSt6FY4r9GrosasyKNA3AECtWpWA3EdgbBlWC4AqLTmr4FK0eGN8RN9HHJigjXojpI/wM8OY0L8x9UEf91OF9DxmCuOHvdvEr17x5yEDCzzKknE1oRctwH5tsiEzJjX2KkFiRDWGzER/RnaDVdjBvBAARheQbm3hKh38bmfIfiN8eoUEkB5grNQ4Ky2CxPAjVANgPWwccSQNE7BG+7wi9iusqUcuTDbODIlBfxgQJFOAuttAfYcHxy0kkEQxkvaIdQJAMtninUTJJVUiavKxZkhaTRnJZMSQBBGgkhBmICkA0tVTwNthSAwJCWySaO0IBOLPDAkhR363jxiyUrIVsr6FVGHyzZBgykQyhPXhrjHCkzQSyybthGy4GZKINUaRcMmNQPy2DgnUm7LRD40EecI7vTEda4oED8kyJEZgO6h02EsjYYomcADNkus2h6wCiqTBezYEnhkLvhpJGZhtymlMLu1ZTBG7aZGBmkcqJAYxYJlIoPyjFrmpgEgcz7YBEMak2Sw3KjGLPeCBOcOlRgKFx+8bCZqKSLiitGw8O5CfOrHtmjBGMJKBPw6WIIGdDVmpdAQkuBNHwpgENaZq9FEX+ExRNUimTL0Egsx3xBs2JmHbdadknuoAbiW4dmMkaAwnS5D0wBCOt9AQ0ZMmK4ylqwdkGZmavm/lQdIGwEjSAIx7/CYCsp50MZJpbN1qfPK8ovyCzigTyQBW1Y9tyRLbVRtLFgvJerQqEmPmx8LcYr0v2a42m1ThFauxQFUntP1aJhLocUxMsX2OpC8ggVJCOLYoZ1dUQlZBUgCxYa4wuZWQQP2iPRfP2D3mrFR80DLYSyKSMvAEfY+RRA3Ki4P+hLZHvAGvSpG4KyOBI8xMU8SNlIwE9tzIwk855pHD6jQ5kr48uQGJGYPJzZyInEt5mXsNrBnB3MIc0s644rVimIJVYm9n7IBsz6gf43ozpn8TmSnokYLK1Zh7e9UQgNqE1NWkjkkVOrIgFGxRKDTmTpAzHI5GXRvja08aAFz1YYHBHMwi3KLXmrZos60u9JxHEXu3At3mo2pcc/OogdpPzvFQRrvA6UeQOyYcmKnuiVikMOqOYi6bnWq1U6aMdkiLzXIVPoyE9oRebaMfqx1I1Y7F7mkN1RNccNrvBkeUuSqsv1pmylkW7zA2XFs5IXGYBr0wCFvcIBKmOhkFd7SjHe1oRzva0Y52tKMd7WhHL0HVE+XP7aOs2G0r6QiMkilYgaYzmml4TaoOW/pC0WQ497x5ZVRgXR16JLO6hBwg5AosRUE5GZL4kT5tSA+XdiAYJ9dOUtQzSR2279nAJDm2rm+ajs0ZNyFxaB68EZNB1rDikyKmCN9H9zKSYYPWBSsHM77A18BVmqYPQGO47ChsB5jJBFiCmnPgOf1oMJiezMawhTl+Gvim12hNXbKCWoHN23RB1o0mAN9JNJ0hDr0jtu7abpaHsNg42cNWuYG5dmoiV+0R7p2gqjjRO4QcpVL1MlTHDlgFI9i4j6+uHH8YF6JIOHhgCnllCgUgXiLx0Ul2L3ZthKQiPXPh26LApgmVcExFAciUL+TrjmzTxonOhiMKbAKJ0bNT3WOhMUkwU3NSi2mIhn6qaG9sJjOOCerjUVOUgUJhixLAGje9rvA0icRyPDEjj6nhpJCUQWbTbYTEmQlPLKg25YySAs2x9I6W/l6AQyKyjJYgcJXiAksaiREC6S1EtTQSwwGZmcAykkRbmLEmYzvVMzJF1CgsLQCHZCxb6QbOMluy/UwhEdbuGGUhCUFy9ZxQgOWL65AL/EZmOeEN0DfT4hsTVjS523o4Yd8E0uJBCgldPhApC0lhni0zbaT0sUkJfI19RQsO2L75KVGgFAF5ZjAQBlS4XZAEPIXEKKcUIAvJUuoBYU6qApC0hOnyFWIdx0vsNFQT00t4WFlzbBpJmp6FBJc26fLiXF49yiK8XoOUfom4YtVztD7AOpA0UQd7eMVjYtsDTekIIAN75IkiKVPGdJZJL4/EILN6hJeetZ5h10ZzHka/xC+z0G/OXPvVj5WQFGrKuc5xyKTCN5ssp7ZNzBLyiMZLYOPp1m8oHHhMKyHpqkeogyeVSQHo7BbSd+JCTeA4OkvsNTJeEAreB6WglZB4GlnDk4rv62XLaIzJ3E7EK8sBQtWRqRN0lcOyCpKWrUEyGJvmchUWKN6bgjwib5Jdymr4NLA4UmhLXiTjgtskVA5trf7jSUXtqWMKvTm9OvESDptI7RkZFdNT1JkXiRBp+TksGX5FqyYWGLMpzwUqh9gaAgLFtFN7DBnlRmI/CwmWe183LUIx5WBRIwqHuDWmw2KCSnYH5UViF9ououY0j3SRmGPptM2oIbgAPaRbKZcvpnYXEG2BkXSmy7eKxvfGOiTQBSZQlPNZE9gxT22gcohx8SuWKcg0iitZYaBDUvMq2Mnwljm4mELPHx0xmsxNhUNMKJpRdckalZWQBBokPbSfKfQ0nWz5yBhxMvWDiIJzmulJTy0rIemRDZXLyAX2hDDK8jmZVACmnGkz9awYLkngZNiGNXiQULYw/yQSXh77VnzfEgiz4mijAPgaVvuUP7AGJD229YtkWpa4IFDfPXmLcMHOMwfRDIadUvqXR+ICpud4tlvmF0LnPxF0YOs1VuffEVUBySQm6OWRVHyujn3cy0t4GzvJ2QM5ningzUmUfBP5aGkr9xtI3GqWb9oXQ/fZcqelDFLd2slyiOXdmJhCiNhPPf0NJJmJoiYQ/cBoudNSychijjOsUkQjGIF6XpZ7ujqStpfV2XNHjsm8JVOyCzI8XzwFmcmCqWkQuULpuXF1JH07Y2csnLalqASnv7Ii9CMvY0qIMjwWy0zl/qB0ObNUqqOWF0myD9p2RiSFJjtZZnCk4qfiecvJTJcgA5ustuYkxxRqfEYaDXVZap0h0SqeVJPx3NBPh3hoeSCpiSRSSRbt2aaT4ZgceWkLAUdA7h04chmuA7bhmjCVTAsJqe6DtMA1HSc9EWLrn+zDgZc9z3Qy2IHuvmOK4omGJB2S4dyBWrysK1zGE/MBzS5ISb/VQ55Tqo0mcV9BKL6OrLOXMflPsMrbkgYh5XGciDcz9JLrGNPCSdenwYs9G/XKGTVHhX5g8wCnMeyGkIKaDxJzmNU5CWychjDHQS+K22iFLNTzwLCPt0Z3+jTOsIOTsgDPKkxqLFw3RwXOTRuVdkCAax20oPvsJ3qrhpdSKaHrjNDTF8vE8S9+lDjTwcuB+FAIbkN8HbEglhRXE5oyO/FyXKcGPAetuZqzMSqTSrB0CgnKSAcki0gkjKEl/RCPfVl+A28rlx4Iyt1uSWVFJWz2r3yaQxi2dLnIbSfLjaqdyH2V/wnPjna0ox3taEc72tGOdrSjHe1og2QlItj274WCkZwYbOEwGv4r5VimJLgmH+Gh1KTPaLjegbdxkrBKqhGjcKsc1ubzWSXOl0xBD7aEWsT/tqRtjuVuYz6v9AUuUIPCyXLKaPz7UE6yja6AbYNhMAdA2OJYDU1gAy8UE0xROIfPQJfW1ULftOKrGYXuGP4YxAm0dgh/LURRoQv4knEEgF0ZBhUAKgHa7y7kr1oAjMpVVOcVz1ZM0as8JzUNZ7CFqzgT5KbWLyYe7pvmTN4E5GUsyM6lL0G4vgmERYC5mJws0C89oGIztkxRJqtDVQrtJF6+GAK6+77ZsMWRqjmesIs7EJtD6dBEfr9sk6TzwJbSiw0/nYQNfClPj/Zpx82Gwtt9cdudyxho2fhPhw0GL3MFeCbVavhCj0RAzC0XpEynP3QS2fIy/ziKL67x1DJ2/CaQlG3PtLmsTuJjEGUgrS106c0kkJGE7Ll4ssMFTrzqDiVI2DvSERWj47nJtVeOpGWL65a5kKCcMOP/hC9CWZ4jZeTZt8emTRmJS+4HMu7Qixl0QUtY0JiKsn11hNfDM5EUbHGNOAeSDsCfnKF3PS61PTu9RCu9JqeqR/LXS5og1lAXuAXg+G32S4xkAPG1bLkijmQkrbvlQmLBfhl3k0hqjvKYQxKJ79hS1wrrTy7kd2QzTkQk/TlKgvvSV1g4ElM6JJATSdt06CJJiyFpA/m0hQZJaumx6/MhRUiMK58aMBGJgxq98qUlEIYkANJSTE4kWBg6EhL4JGvhahmSKkgcwjny+Ko7RmJB4z9JIKliCFAfxCUgaGh61U5v5snLenmR8EVGjmSaMvRKJGWQ2HTe97jQYCS4s8oykqCG9mdGciegmiqeYISeicQ4Iu+KY8LtaDSeNyA5J9JrCSSmPHP1Y+NFkKAi6CJG0uZH5UTVJud8RNuXF0mZ2pihh1Z5RT2JDb8bBZ7fmEpGWUYi2ipMR/FWVJd//RIZsBjJCZjiDbO9sXgcguqJmTA4z0ACBdkOYyRGwxHNOZzA5CXgBBIruQgLZ+gogcSA3VETkDhUkeDMJVgLiqSTMCHPQGK40NFpFTiSyVgU37YGCaxVXgP3HY9duqx3rYbjdTmSiEOHqOP+Z7Zr6EuLrwISfiR4GRK0DD0OuLQj8YryI4EWQjSmU2BzR7EZj44NW2BIunwCqor+QYciGUjtC0jij8klkLRiBqBj6sdD2hPHV4sEiY4wkw29+KjGNPZQq7AFykhbmPhMwTEqsO3yLSDumGzwU5MhZz+BRPwKbSBJbAg8PjmlkJSTSCwYUPAtCOJn7iD78XzR48dCA8E/HgrHF0fcVATA559js2w2Qq14ZXku74Wo2UK80PBFNYPubYMKcMFObLoZpXbhtGuAnQLoAXGrY2gL7ggM5hCSLgoCK9SvqKE4sYHUzArwdYWoHIzzTGx1CkMfPZ7VKjWfbUGrBrAKezykveeiW1DrsrEdjKVZoQnDv9pJuYNjRkGhm0EDNx7Ie0b6Y+CMCuX+HITxd6hDWBTMA46shpGQGJxIXZUugaPSbDWcsjcZYqsTiYvkNJZmcTyVXLqO3uINVxM7hwYnFQf2TGUiTSYurbmV2JphFWBpr3Ei+lHJxfs2kpj/A97SNqqOO/tOAAAAAElFTkSuQmCC"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - May 2024 ",
      desc: "Graduated with distinction and awarded the Golden Star Maverick Scholarship"
    },
    {
      schoolName: "REVA University",
      //logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Developed a strong foundation in programming languages and software development methodologies.",
  "Completed projects in web applications and cloud computing technologies.",
  "Participated in collaborative team projects, enhancing teamwork and communication skills."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
   {
      Stack: "DevOps/Cloud",
      progressPercentage: "80%"
   },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Engineer",
      company: "Cloud Innovators",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "March 2021 - December 2022",
      //desc: " Cloud Engineer.",
      descBullets: [
        "Designed and implemented a cost-effective cloud architecture for a high-traffic e-commerce website, and heathcare organizations resulting in a 30% reduction in infrastructure costs and a 20% increase in website speed.",
	      "Researched and recommended new cloud technologies and services, resulting in the adoption of a new cloud-based monitoring tool that improved infrastructure visibility by 40%.",
	      "Conducted security assessments and impemented measures, reducing security incidents by 15%.",
"Designed and implemented disaster recovery plans, resulting in a 90% reduction in downtime during a major system outage.",
"Collaborated with cross-functional teams to ensure alignment with project objectives,Agile best practices and security standards."
      ]
    },
    {
      role: "Cloud Engineer",
      company: "BVR Cloud",
     // companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2020 – January 2021",
      descBullets:[
	      "Designed, built, and maintained infrastructure and software platforms within cloud-based environments (AWS and Azure).",
      "Set up and configured cloud-based infrastructure using AWS services such as EC2, S3, RDS, and VPC, supporting the development and deployment of cloud-based applications.",
      "Troubleshot and resolved cloud-related issues, reducing downtime by 50% and improving system availability by 25%.",
      "Migrated existing on-premises services from physical data centers to cloud using cloud migration and automation tools.",
      "Created and maintained technical documentation, ensuring that all cloud-based infrastructure and applications were well-documented and easy to maintain."
  ]
    }
  ]
};
// Open Source 
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

//some projects
  const bigProjects = {
      title: "Projects",
      //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
      projects: [
        {
       //   image: require("./assets/images/saayaHealthLogo.webp"),
          projectName: "EcoTrack Real-Time Environmental Monitoring Application",
          descBullets:[
		  "Architected and implemented highly scalable AWS infrastructure utilizing serverless computing principles, resulting in a 25% reduction in infrastructure costs while ensuring seamless scalability to handle fluctuating workloads.",
    "Engineered Python-based data ingestion scripts to seamlessly integrate with various sensors and IoT devices, enabling real-time data collection and analysis.",
    "Designed and deployed RESTful APIs using Django and integrated AWS API Gateway for secure and efficient communication between the application frontend and backend services.",
    "Automated deployment pipelines using GitLab CI/CD, significantly reducing deployment time by 50% and enhancing overall deployment reliability.",
    "Developed an intuitive web interface with interactive data visualization features using HTML, CSS, and JavaScript, resulting in a 40% increase in user engagement and satisfaction."
      ],
		  footerLink: [
            {
              name: "Visit Website",
              url: "http://https://kxn9103.uta.cloud/"
            }
            //  you can add extra buttons here.
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Soil Classification and Crop Prediction using Machine Learning",
          DescBullets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          footerLink: [
            {
              name: "Visit Website",
              url: "http://https://kxn9103.uta.cloud/"
            }
          ]
        }
      ],
      display: true // Set false to hide this section, defaults to true
  };
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Recognized for demonstrating expertise in designing distributed applications and systems on the AWS platform.",
      image: require("./assets/images/codeInLogo.webp"), // Replace with the correct logo image path
      imageAlt: "AWS Solutions Architect Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
        }
      ]
    },
    {
      title: "AWS Certified Developer – Associate",
      subtitle: "Achieved this certification for proficiency in developing and maintaining applications on the AWS platform.",
      image: require("./assets/images/googleAssistantLogo.webp"), // Replace with the correct logo image path
      imageAlt: "AWS Developer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://aws.amazon.com/certification/certified-developer-associate/"
        }
      ]
    },
    {
      title: "AWS Certified SysOps Administrator – Associate",
      subtitle: "Recognized for demonstrating expertise in managing and operating systems on the AWS platform.",
      image: require("./assets/images/codeInLogo.webp"), // Replace with the correct logo image path
      imageAlt: "AWS SysOps Administrator Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://aws.amazon.com/certification/certified-sysops-administrator-associate/"
        }
      ]
    },
	  {
      title: "Graduated with Distinction",
      subtitle: "I am grateful to have been selected as a student who graduated with distinction. This honor recognizes my high academic performance, including maintaining a high GPA, excelling in coursework, and actively participating in extracurricular activities.",
      image: require("./assets/images/codeInLogo.webp"), // Replace with the correct logo image path
      imageAlt: "AWS SysOps Administrator Logo",
      footerLink: [
        {
          name: "Pictures",
          url: "https://aws.amazon.com/certification/certified-sysops-administrator-associate/"
        }
      ]
    },
	   {
      title: "Top 5 Finalist at Texas Hackathon",
      subtitle: " Recognized for innovation and leadership in university hackathon competition.",
      image: require("./assets/images/codeInLogo.webp"), // Replace with the correct logo image path
      imageAlt: "AWS SysOps Administrator Logo",
      footerLink: [
        {
          name: "Pictures",
          url: "https://aws.amazon.com/certification/certified-sysops-administrator-associate/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9452491968",
  email_address: "pavankumarinnamuri619@gmail.com"
};

// Twitter Section

//const twitterDetails = {
  //userName: "twitter", //Replace "twitter" with your twitter username without @
  //display: true // Set true to display this section, defaults to false
//};

//const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  resumeSection
};
