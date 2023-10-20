module.exports = {  
  content: ["./layouts/index.html", 
            "./layouts/_default/*.{html,js}",
            "./layouts/page/*.{html,js}",
            "./layouts/partials/*.{html,js}"
          ],  
  theme: {    
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Zilla Slab', 'serif'],
    },    
    extend: {          
      colors: {          
        blue: {
          200: "#2FF9FC",
          300: "#0D3542",
          400: "#0B2C3D",
          600: "#092432",
          900: "#041016",
        },
      },
      backgroundImage: {
        'hero': "url('/hero.webp')",
      },
      screens: {
        'xxs': '540px',
      },     
    }  
  },  
  plugins: [],
}