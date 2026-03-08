/**@type{import('tailwindcss').Config}  */
export default{
  content:["./index.html","./src/**/*.{js,jsx}"],
  theme:{
    extend:{
      colors:{
      'primary':"#FF5F6F",
    },
    gridTemplateColumns:{
      'auto':'repeat(auto-fit, minmax(200px, 1fr))'
    }
  },
  plugins:[],
}
}