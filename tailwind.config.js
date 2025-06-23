import darkMode from './src/Components/Navbar/DarkMode';

/**@type{import
 * ('tailwindcss').config
} */
export default{
    content:['./index.html',"./src/**/*.{js,ts,jsx,tsx"],
    theme:{
        extend:{
            colors:{
                primary:"#4263eb",
                secondary:"#63e6be"
            },
            container:{
                center:true,
                padding:{
                    default:"1rem",
                    sm:"3rem"
                },
            },
        },
    },
    darkMode: "selector",
    plugins: [],
};