module.exports = {  
    content: ["./layouts/index.html", 
              "./layouts/_default/*.{html,js}",
              "./layouts/page/*.{html,js}",
              "./layouts/partials/*.{html,js}"
            ],  
    theme: {    
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          serif: ['Aleo', 'serif']
        },    
        extend: {          
          colors: {          
            accent: "#2591AF",       
          }        
        }  
    },  
    plugins: [],
  }