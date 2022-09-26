/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        button: "#f3603c;",
        hover: "#f98f75",
        modal: "#fff",
        item: " #fff0ec;",
        said: "#fafafa",
        footer: "#1d1e25;"
      },
      colors: {
        title: "#242D52;",
        btn: "#fff",
        work: "#f3603c",
        workhover : "#f98f75",
        placeholder: "#8d8d8d"
      },
      fontSize: {
        size : "40px",
        about: "30px",
        said: "32px",
        text: "14px",
        footer: "15px",
      },
      lineHeight: {
        line : "50px",
        lg: "60px",
        footer: "22px"
      },
      maxWidth: {
        container : "1110px",
        list: "445px",
        item: "350px",
        said: "540px",
        article: "490px",
        input: "240px",
      },
      boxShadow : {
        button: "0px 15px 15px -10px #DB5943",
      }
    },
  },
  plugins: [],
}
