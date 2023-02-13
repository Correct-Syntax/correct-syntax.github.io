module.exports = {  
    content: ["./layouts/index.html", 
              "./layouts/_default/*.{html,js}",
              "./layouts/page/*.{html,js}",
              "./layouts/partials/*.{html,js}"
            ],  
    theme: {    
        fontFamily: {
          sans: ['Figtree', 'sans-serif'],
          serif: ['Merriweather', 'serif']
        },    
        extend: {          
          colors: {          
            accent: "#2591AF",   
            oiioaccent: "#0583D6",
            oiiodark: "#181E23",
            vlaccent: "#38A3D5",
            vldark: "#0D0E11",    
            flameshotpurple: "#8800AA",
            opcblue: "#1EA09F",
          }        
        }  
    },  
    plugins: [],
  }