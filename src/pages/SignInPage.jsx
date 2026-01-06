import Grid from "@mui/material/Grid"
import { useState } from "react";
import assets from "../assets"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"
import { useTheme } from "@mui/material/styles";
import {  Box } from "@mui/material";

export const ScreenMode ={
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP"
}

const SignInPage = () => {

    const theme = useTheme();

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState("unset");
    const [width, setWidth] = useState(0);


    const [backgroundImage, setBackgroundImage] = useState(assets.images.signinBg);
    const [currMode, setCurrMode] = useState(ScreenMode.SIGN_IN);

    const onSwitchMode = (mode) => {
         setWidth(100)
        
        const timeout1 = setTimeout(()=>{
            setCurrMode(mode);
        setBackgroundImage(mode === ScreenMode.SIGN_IN ? assets.images.signinBg : assets.images.signupBg)

       
        },900)

         const timeout2 = setTimeout(()=>{
         setLeft("unset")
         setRight(0)
         setWidth(0)
        },1100)

         const timeout3 = setTimeout(()=>{
         setRight("unset")
         setLeft(0)
        
        },2100)

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            clearTimeout(timeout3)
        }
    }

    return(
        <Grid container minHeight="100vh"  width="100vw">
            <Grid size={5} display="flex" justifyContent="center" alignItems="center"  xs={12}
    md={5} sx={{position: "relative", padding:3}}>
            {
                currMode === ScreenMode.SIGN_IN ? (<SignInForm onSwitchMode={onSwitchMode}/>): (<SignUpForm onSwitchMode={onSwitchMode}/>)
            }
             <Box
            sx={{
                position:"absolute",
                top:0,
                left:left,
                right:right,
                width: `${width}%`,
                height:"100%",
               bgcolor: theme.palette.grey[800],
                transition: "all 1s ease-in-out"
            }}
            />
            </Grid>
           

            <Grid size={6} xs={12}
    md={7} sx={{
                position: "relative",
                minHeight:"100vh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
             "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))"
  }
            }}>
                
            <Box
            sx={{
                position:"absolute",
                top:0,
                left:left,
                right:right,
                width: `${width}%`,
                height:"100%",
               bgcolor: "white",
                transition: "all 1s ease-in-out"
            }}
            />

           

            </Grid>


        </Grid>
    );

}

export default SignInPage;