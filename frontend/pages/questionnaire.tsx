import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useRouter } from 'next/router';
import { css } from "@emotion/react";
import { useState } from "react";

const styles = {
  content: css({
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
  }),
  stepperBox: css({}),
  questionContainer: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "64px",
  }),
  questionTitle: css({
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    marginTop: "32px",
    fontWeight: "800",
    fontSize: "32px",
    lineHeight: "32px",
  }),
  questionBox: css({
    width: "640px",
    backgroundColor: "#ebf0eb",
    borderRadius: "8px",
    marginTop: "16px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "32px",
    marginBottom: "32px",
  }),
  question: css({
    marginTop: "32px",
  }),
  radioGroup: css({
    display: "flex",
    flexDirection: "column",
  }),
};

export default function Questionnaire() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [value1, setValue1] = useState("子供にせがまれた");
  const [value2, setValue2] = useState("未就学児");
  const [value3, setValue3] = useState("友達等とトラブル");
  const stepLabels = ["質問１", "質問２", "質問３"];
  const question1 = {
    questionLabel: "お子さんに携帯電話を持たせようと思った理由は何ですか?",
    valueLabels: [
      "子供にせがまれたため",
      "子供の所在地がわかるようにするため",
      "仲間外れにされないか心配なため",
      "メディアリテラシーがつくと思ったため",
      "その他",
    ],
  };
  const question2 = {
    questionLabel: "お子さんの年齢は？",
    valueLabels: [
      "未就学児",
      "小学1～2年生",
      "小学3～4年生",
      "小学5～6年生",
      "中学1年生",
      "中学2年生",
      "中学3年生",
      "高校1年生",
      "高校2年生",
      "高校3年生",
    ],
  };
  const question3 = {
    questionLabel: "どのようなトラブルを想定していますか？",
    valueLabels: [
      "アプリで友達等とトラブル",
      "身に覚えのない料金請求",
      "誹謗中傷などの書き込み",
      "ネット上で知り合った人と会う",
    ],
  };

  const clickButton = () => {

    router.push({
        pathname:"/graph/graphPage",   //URL
        query: {step : step,
                value1: value1,
                value2: value2,
                value3: value3,
              } 
      });
  }

  return (
    <div css={styles.content}>
      <Box sx={{ width: "100%" }} css={styles.stepperBox}>
        <Stepper activeStep={step} alternativeLabel>
          {stepLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div css={styles.questionContainer}>
        <p css={styles.questionTitle}>あなたについてお聞かせください</p>
        <div css={styles.questionBox}>
          <FormControl>
            <div css={styles.question}>
              <FormLabel>{question1.questionLabel}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={question1.valueLabels[0]}
                name="radio-buttons-group"
                value={value1}
                css={styles.radioGroup}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStep(1);
                  setValue1((event.target as HTMLInputElement).value);
                }}
              >
                {question1.valueLabels.map((valueItem, valueIndex) => (
                  <FormControlLabel
                    key={valueIndex}
                    value={valueItem}
                    control={<Radio />}
                    label={valueItem}
                  />
                ))}
              </RadioGroup>
            </div>
            <div css={styles.question}>
              <FormLabel>{question2.questionLabel}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={question2.valueLabels[0]}
                name="radio-buttons-group"
                value={value2}
                css={styles.radioGroup}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStep(2);
                  setValue2((event.target as HTMLInputElement).value);
                }}
              >
                {question2.valueLabels.map((valueItem, valueIndex) => (
                  <FormControlLabel
                    key={valueIndex}
                    value={valueItem}
                    control={<Radio />}
                    label={valueItem}
                  />
                ))}
              </RadioGroup>
            </div>
            <div css={styles.question}>
              <FormLabel>{question3.questionLabel}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={question3.valueLabels[0]}
                name="radio-buttons-group"
                value={value3}
                css={styles.radioGroup}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStep(3);
                  setValue3((event.target as HTMLInputElement).value);
                }}
              >
                {question3.valueLabels.map((valueItem, valueIndex) => (
                  <FormControlLabel
                    key={valueIndex}
                    value={valueItem}
                    control={<Radio />}
                    label={valueItem}
                  />
                ))}
              </RadioGroup>
            </div>
          </FormControl>
        </div>
        <Button onClick={clickButton} variant="contained" size="large">
          結果を見る
        </Button>
      </div>
    </div>
  );
}
