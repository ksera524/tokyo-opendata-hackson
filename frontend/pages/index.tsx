import type { NextPage } from 'next'
import { Button } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const clickButton = () => {
    router.push({
        pathname:"/questionnaire",   //URL
      });
  }

  return (
    <Grid container alignItems='center' justifyContent='center' spacing={2}>
      <Grid item xs={12}>
          <Typography variant="h4" textAlign='center' mt={9}>
            このサイトは子供にスマホを持たせようと考えている方へのデータ提供サイトです。
          </Typography>
          <Typography variant="h4" textAlign='center'>
            いくつかの質問に答えていただき、そのアンケート結果を提供します。
          </Typography>
      </Grid>
      <Grid item xs={12} textAlign='center'>
        <Button onClick={clickButton} variant="contained" size="large">
            始める
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home