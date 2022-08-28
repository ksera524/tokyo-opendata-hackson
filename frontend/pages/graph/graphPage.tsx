import { getServers } from 'dns';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Box, Button, Grid, Typography } from '@mui/material';
import { InsertEmoticon } from '@mui/icons-material';
import getQuestionList from '../../src/getQuestionList';
import { useRouter } from 'next/router';

ChartJS.register(ArcElement, Tooltip, Legend);

type GraphDataType = {
    q5:{
        preschooler: number;
        junour12: number;
        junour34: number;
        junour56: number;
        middle1: number;
        middle2: number;
        middle3: number;
        high1: number;
        high2: number;
        high3: number;
    },
    q7:{
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
    },
    q14:{
        aa: number;
        bb: number;
        cc: number;
        dd: number;
        ee: number;
        ff: number;
        gg: number;
        hh: number;
        ii: number;
        jj: number;
        kk: number;
        ll: number;
        mm: number;
    }

};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const host = 'http://34.82.211.141:8080/'
        const products = await fetch(`http://34.82.211.141:8080/getJson`)
            .then(data => data.json())
        
        const GraphData: GraphDataType = {
            q5:{
                preschooler: products.q5.preschooler,
                junour12: products.q5.junour12,
                junour34: products.q5.junour34,
                junour56: products.q5.junour56,
                middle1: products.q5.middle1,
                middle2: products.q5.middle2,
                middle3: products.q5.middle3,
                high1: products.q5.high1,
                high2: products.q5.high2,
                high3: products.q5.high3
            },
            q7:{
                a: products.q7.a,
                b: products.q7.b,
                c: products.q7.c,
                d: products.q7.d,
                e: products.q7.e,
                f: products.q7.f,
                g: products.q7.g,
                h: products.q7.h,
                i: products.q7.i,
                j: products.q7.j,
                k: products.q7.k,
                l: products.q7.l,
                m: products.q7.m,
                n: products.q7.n
            },
            q14:{
                aa: products.q14.aa,
                bb: products.q14.bb,
                cc: products.q14.cc,
                dd: products.q14.dd,
                ee: products.q14.ee,
                ff: products.q14.ff,
                gg: products.q14.gg,
                hh: products.q14.hh,
                ii: products.q14.ii,
                jj: products.q14.jj,
                kk: products.q14.kk,
                ll: products.q14.ll,
                mm: products.q14.mm
            }
        } 
        return {
            props:  GraphData
        }
    } catch (e) {
        console.log(e);
        return {
            props: []
        }
    }
}

function matchingData(word: any , keyData: string[], valueData: number[]) {
    for(let i = 0; i < keyData.length; i++)  {
        if (keyData[i].indexOf(word) > -1) {
            return valueData[i];
            break
        }
    }
}




const GraphPage: NextPage<GraphDataType> = ( props: GraphDataType ) => {
    const router = useRouter();
    const keys = Object.keys(props.q5);
    const values2 = Object.values(props.q5);
    const keysJa = getQuestionList(keys);
    const value2 = matchingData(router.query.value2,keysJa,values2);
    const graphData = {
        labels: keysJa,
        datasets: [
            {
                label: "調査結果",
                data: [
                    props.q5.preschooler,
                    props.q5.junour12,
                    props.q5.junour34, 
                    props.q5.junour56,
                    props.q5.middle1,
                    props.q5.middle2,
                    props.q5.middle3, 
                    props.q5.high1,
                    props.q5.high2, 
                    props.q5.high3
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',
                    'rgb(90, 90, 243)',                  
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',
                    'rgb(90, 90, 243)',  
                  ],
                borderWidth: 1,
            }
        ]
    }
    const keys2 = Object.keys(props.q7);
    const keysJa2 = getQuestionList(keys2);
    const values1 = Object.values(props.q7);
    const value1 = matchingData(router.query.value1,keysJa2,values1);
    const graphData2 ={
        labels: keysJa2,
        datasets: [
            {
                label: "調査結果2",
                data: [
                    props.q7.a, 
                    props.q7.b, 
                    props.q7.c, 
                    props.q7.d, 
                    props.q7.e,
                    props.q7.f, 
                    props.q7.g, 
                    props.q7.h,
                    props.q7.i,
                    props.q7.j, 
                    props.q7.k,
                    props.q7.l,
                    props.q7.m, 
                    props.q7.n,
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',
                    'rgb(225, 115, 144)',
                    'rgb(24, 221, 234)',
                    'rgb(63, 172, 96)',
                    'rgb(222, 83, 115)',
                    'rgb(85, 32, 211)',                 
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',
                    'rgb(225, 115, 144)',
                    'rgb(24, 221, 234)',
                    'rgb(63, 172, 96)',
                    'rgb(222, 83, 115)',
                    'rgb(85, 32, 211)', 
                  ],
                borderWidth: 1,
            }
        ]
    }

    const keys3 = Object.keys(props.q14);
    const keysJa3 = getQuestionList(keys3);
    const values3 = Object.values(props.q14);
    const value3 = matchingData(router.query.value3,keysJa3,values3);
    const graphData3 ={
        labels: keysJa3,
        datasets: [
            {
                label: "調査結果2",
                data: [
                    props.q14.aa, 
                    props.q14.bb, 
                    props.q14.cc, 
                    props.q14.dd, 
                    props.q14.ee,
                    props.q14.ff, 
                    props.q14.gg, 
                    props.q14.hh,
                    props.q14.ii,
                    props.q14.jj, 
                    props.q14.kk,
                    props.q14.ll,
                    props.q14.mm, 
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',
                    'rgb(225, 115, 144)',
                    'rgb(24, 221, 234)',
                    'rgb(63, 172, 96)',
                    'rgb(222, 83, 115)',              
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',
                    'rgb(225, 115, 144)',
                    'rgb(24, 221, 234)',
                    'rgb(63, 172, 96)',
                    'rgb(222, 83, 115)',
                  ],
                borderWidth: 1,
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
    };

    const clickButton = () => {
        router.push({
            pathname:"/",   //URL
          });
    }

    return (
      <Grid container alignItems='center' justifyContent='center' spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h3" textAlign='center' mt={5} mb={3}>
            質問のアンケート結果 
            </Typography>
        </Grid>
        <Grid item xs={4} textAlign='center' mb={3} style= {{height: "20%"}}>
            <h1>{router.query.value2}という理由でスマホを持たせた親は{value2}%です。</h1> 
        </Grid>
        <Grid item xs={8} textAlign='center' mb={3} style= {{height: "20%"}}>
            <Pie data={graphData} 
                 options={options}
                 width={400}
                 height={400} /> 
        </Grid>
        <Grid item xs={4} textAlign='center' mb={3} style= {{height: "20%"}}>
            <h1>{router.query.value1}という理由でスマホを持たせた親は{value1}%です。</h1>  
        </Grid>
        <Grid item xs={8} textAlign='center' mb={3} style= {{height: "20%"}}>
            <Pie data={graphData2} 
                 options={options}
                 width={400}
                 height={400} /> 
        </Grid>
        <Grid item xs={4} textAlign='center' mb={3} style= {{height: "20%"}}>
        <h1>{router.query.value3}という理由でスマホを持たせた親は{value3}%です。</h1> 
        </Grid>
        <Grid item xs={8} textAlign='center' mb={3} style= {{height: "20%"}}>
            <Pie data={graphData3} 
                 options={options}
                 width={400}
                 height={400} /> 
        </Grid>
        <Typography variant="h5" gutterBottom mt={3}>
            スマホの悩みについてご相談したい方は
            <a href='https://www.tokyohelpdesk.metro.tokyo.lg.jp/'>
                こたエール
            </a>
            へ
        </Typography>
        <Grid item xs={12} textAlign='center'>
            <Button onClick={clickButton} variant="contained" size="large">
                戻る
            </Button>
        </Grid>
      </Grid>
    )
}





export default GraphPage;
