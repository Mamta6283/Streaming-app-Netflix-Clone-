/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { //when we want our font style
    extend: {
      colors:{
        "primary":{
          "600":"#0f172a"
        }
      },
         fontFamily:{
          'display':["patua One","serif"],
          'body':["poppins","sans-serif"],
          'alernate':["Amita","serif"]
         }
    },
  },
  plugins: [],
}
//we can make our own class you can like bg-blue b
//color:{
// 'blue':{
//   "100":"colorname (blue)"
// }
// }