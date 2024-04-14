'use client'
import {
  AppBar,
  Box, Button, Checkbox, Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps, StepLabel,
  Stepper,
  styled, TextField,
  Typography
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HelpIcon from '@mui/icons-material/Help';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#9c99e9',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#9c99e9',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#9c99e9',
    }),
    '& .QontoStepIcon-circle': {
      width: 16,
      height: 16,
      border: '2px solid #9c99e9',
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    '& .QontoStepIcon-circle-active': {
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '$ .MuiInputBase-input': {
      borderTop: 'none',
      borderRight: 'none',
    },
    '&:hover fieldset': {
      borderColor: "rgb(237,189,165)",
    },
    '&.Mui-focused fieldset': {
      borderColor: "rgb(237,189,165)",
    },
  },
});

const textStyle = {
  fontWeight: "bold"
}

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {active ? (
        <div className="QontoStepIcon-circle-active" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ['商品情報', 'お客様情報', 'お支払情報', '注文内容確認'];

export default function CreditCartCheckout() {
  return (
    <main>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(to right, #9c99e9, #f0c7d6)'
        }}
      >
        <Box m="1rem">
          <ArrowBackIosIcon/>
        </Box>
      </AppBar>
      <Box
        margin="2rem auto 2rem"
        width="60%"
      >
        <Box my="3rem">
          <Stepper alternativeLabel activeStep={2} connector={<QontoConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box
          margin="2rem auto 2rem"
          width="70%"
        >
          <Box my="4rem">
            <Typography
              variant="h6"
              sx={{
                ...textStyle,
                color: "dimgray"
              }}
            >
              カード名義
            </Typography>
            <TextField
              variant="standard"
              color="primary"
              fullWidth
              size="small"
              placeholder="YAMADA HANAKO"
            />
          </Box>
          <Box mb="4rem">
            <Typography
              variant="h6"
              sx={{
                ...textStyle,
                color: "dimgray"
              }}
            >
              カード番号
            </Typography>
            <TextField
              variant="standard"
              color="primary"
              fullWidth
              size="small"
              placeholder="1234 - 5678 - 9098 - 7654"
            />
          </Box>
          <Box
            display="flex"
            mb="3rem"
          >
            <Box width="50%" pr={3}>
              <Typography
                variant="h6"
                sx={{
                  ...textStyle,
                  color: "dimgray"
                }}
              >
                有効期限
              </Typography>
              <TextField
                variant="standard"
                color="primary"
                fullWidth
                size="small"
                placeholder="MM/YY"
              />
            </Box>
            <Box width="50%">
              <Typography
                variant="h6"
                sx={{
                  ...textStyle,
                  color: "dimgray"
                }}
              >
                セキュリティコード
                <span style={{
                  color: '#9c99e9',
                  lineHeight: '32px',
                  verticalAlign: 'top',
                  fontSize: '32px'
                }}>
                  <HelpIcon/>
                </span>
              </Typography>
              <TextField
                variant="standard"
                color="primary"
                fullWidth
                size="small"
              />
            </Box>
          </Box>
          <Box>
            <Checkbox
              defaultChecked
              sx={{
                color: "#ADABEC",
                '&.Mui-checked': {
                  color: "#9c99e9",
                },
              }}
            />
            カード情報を保存する
          </Box>
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
                backgroundColor: "#9c99e9",
                '&:hover': {
                  backgroundColor: "#ADABEC",
                },
              }}
            >
              ご注文内容を確認する
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  )
}