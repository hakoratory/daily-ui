'use client'
import Image from "next/image";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const modalStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
  width: 600,
  height: 600,
  backgroundColor: "rgb(247,240,235, 0.5)",
  borderRadius: 5
}

const textStyle = {
  fontWeight: "bold"
}

const BlueLink = styled.a`
  color: dodgerblue;
`

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: "rgb(237,189,165)",
    },
    '&.Mui-focused fieldset': {
      borderColor: "rgb(237,189,165)",
    },
  },
});

export default function SignUp() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Image
          src="/static/images/01_background.jpg"
          alt="背景"
          fill
        />
      </div>
      <Paper
        sx={{...modalStyle}}
      >
        <Box
          margin="2rem auto 2rem"
          width="70%"
        >
          <Typography
            variant="h6"
            sx={{
              ...textStyle,
              color: "darkgray"
            }}
          >
            Get started for FREE
          </Typography>
          <Typography
            variant="h4"
            sx={{
              ...textStyle,
              marginTop: "1rem",
              color: "black"
            }}
          >
            Sign up to Explore <span style={{color: "rgb(237,189,165)"}}>Spring Streets</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ...textStyle,
              marginTop: "1rem",
              color: "darkgray"
            }}
          >
            Already a member? <Link href="/" passHref legacyBehavior><BlueLink>Sign in</BlueLink></Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ...textStyle,
              marginTop: "2rem",
              color: "dimgray"
            }}
          >
            Email
          </Typography>
          <CssTextField
            fullWidth
            size="small"
            placeholder="spring@sunset.com"
          />
          <Typography
            variant="h6"
            sx={{
              ...textStyle,
              marginTop: "2rem",
              color: "dimgray"
            }}
          >
            Password
          </Typography>
          <CssTextField
            type="password"
            fullWidth
            size="small"
            placeholder="Enter password"
          />
          <Box
            sx={{
              marginTop: "3rem"
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "none",
                backgroundColor: "#F0CAB7",
                '&:hover': {
                  backgroundColor: "rgb(237,189,165)",
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Paper>
    </main>
  )
}