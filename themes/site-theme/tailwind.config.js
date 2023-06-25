module.exports = {  
    content: ["./layouts/index.html", 
              "./layouts/_default/*.{html,js}",
              "./layouts/page/*.{html,js}",
              "./layouts/partials/*.{html,js}"
            ],  
    theme: {    
        fontFamily: {
          sans: ['Figtree', 'sans-serif'],
          serif: ['Lora', 'serif'],
        },    
        extend: {          
          colors: {          
            accent: "#2591AF",   
            accentdark: "#1C6E85",
            oiioaccent: "#0583D6",
            oiiodark: "#181E23",
            vlaccent: "#38A3D5",
            vldark: "#0b0d0d",    
            flameshotpurple: "#8800AA",
            opcblue: "#1EA09F",
            ffblue: "#5080d1",
          }        
        }  
    },  
    plugins: [],
  }