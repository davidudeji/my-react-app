import { Stack, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ScreenMode } from "../pages/SignInPage";


const SignUpForm = ({ onSwitchMode }) => {
      const theme = useTheme();
    return(
       <Stack
       spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        maxWidth: 420,
        p: 4,
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        color: theme.palette.grey[800],
      }}
    >
      <Stack spacing={5}>
        <Stack>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.grey[800]}
          >
           Create an accocunt
          </Typography>
          <Typography  color={theme.palette.grey[400]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, molestias illo at enim, totam quia.
         </Typography>
        </Stack>
        <Stack spacing={4}>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography color={theme.palette.grey[800]}>Name</Typography>
                     <TextField label="Name" fullWidth />
                </Stack>
                <Stack spacing={1}>
                    <Typography color={theme.palette.grey[800]}>Email</Typography>
                     <TextField label="Email" fullWidth />
                </Stack>
                <Stack spacing={1}>
                    <Typography color={theme.palette.grey[800]}>Password</Typography>
                     <TextField label="Password" type="password" fullWidth />
                </Stack>
            </Stack>
                <Button variant="contained"
                size="large"
                sx={{
                     mt: 2,
                     py: 1.4,
                     borderRadius: 2,
                     fontWeight: 600,
                     textTransform: "none",
                     bgcolor: theme.palette.grey[800], "&:hover":{
                        bgcolor: theme.palette.grey[600]
                    }
                }}
                >
                    SIGN IN
                </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
            <Typography>Already an account?</Typography>
            <Typography onClick={()=>{onSwitchMode(ScreenMode.SIGN_IN)}}
                fontWeight={600}
                sx={{
                    cursor: "pointer",
                    userSelect: "none"
                }}
                >Sign in</Typography>
        </Stack>
      </Stack>
    </Stack>
    );

}

export default SignUpForm;