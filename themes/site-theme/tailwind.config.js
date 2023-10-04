module.exports = {  
    content: ["./layouts/index.html", 
              "./layouts/_default/*.{html,js}",
              "./layouts/page/*.{html,js}",
              "./layouts/partials/*.{html,js}"
            ],  
    theme: {    
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          serif: ['Lora', 'serif'],
        },    
        extend: {          
          colors: {          
            accent: "#2591AF",   
            accentdark: "#1C6E85",
            ozarksolarblue: "#419EC7",
            ozaeksolargrey: "#F2F2F2",
            oiioaccent: "#0583D6",
            oiiodark: "#181E23",
            vlaccent: "#38A3D5",
            vldark: "#0b0d0d",    
            flameshotpurple: "#8800AA",
            opcblue: "#1EA09F",
            ffblue: "#5080d1",
            p23pblue: "#1b2332",
          },
          backgroundImage: {
            'fine-art': "url('/img/fine-art-sketchbook.webp')",
            'flowers-closeup': "url('/img/flowers-closeup.webp')",
            'code': "url('/img/code.webp')",
            'web-design': "url('/img/web-design.webp')",
          },
          screens: {
            'xxs': '540px',
          },     
        }  
    },  
    plugins: [],
  }