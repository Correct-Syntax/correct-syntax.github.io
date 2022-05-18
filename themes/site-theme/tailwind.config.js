module.exports = {  
    content: ["./layouts/*.{html,js}", 
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