const { AiTwotoneAccountBook } = require("react-icons/ai");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('/splash.png')",
        rec1: "url('/Rectangle7.png')",
        rec2: "url('/Rectangle6.png')",
        rec3: "url('/Rectangle8.png')",
        nearyou: "url('/nearyou.png')",
        amy: "url('/amy.svg')",
        david: "url('/david.svg')",
        matt: "url('/matt.svg')",
        one: "url('/1.svg')",
        two: "url('/2.svg')",
        three: "url('/3.svg')",
        four: "url('/4.svg')",
        five: "url('/5.svg')",
        onefive: "url('/15.svg')",
        twofive: "url('/25.svg')",
        threefive: "url('/35.svg')",
        fourfive: "url('/45.svg')",
        zerofive: "url('/05.svg')",
      },
      screens: {
        aboutmb: "767px",

        mobileabout: "1220px",

        about: "1550px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
};
