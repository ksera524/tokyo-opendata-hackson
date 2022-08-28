import { getServers } from 'dns';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Box, Grid, Typography } from '@mui/material';
import { InsertEmoticon } from '@mui/icons-material';

ChartJS.register(ArcElement, Tooltip, Legend);

type GraphDataType = {
    q5:{
        middle1: number;
        junour56: number;
        middle3: number;
        junour34: number;
        high1: number;
        high2: number;
        middle2: number;
        high3: number;
        junour12: number;
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
        const host = 'localhost:8080'
        const products = await fetch(`http://localhost:8080/getJson`)
            .then(data => data.json())
        
        const GraphData: GraphDataType = {
            q5:{
            middle1: products.q5.middle1,
            junour56: products.q5.junour56,
            middle3: products.q5.middle3,
            junour34: products.q5.junour34,
            high1: products.q5.high1,
            high2: products.q5.high2,
            middle2: products.q5.middle2,
            high3: products.q5.high3,
            junour12: products.q5.junour12
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

const GraphPage: NextPage<GraphDataType> = ( props: GraphDataType ) => {
    const keys = Object.keys(props.q5);
    const graphData = {
        labels: keys,
        datasets: [
            {
                label: "調査結果",
                data: [
                    props.q5.middle1, 
                    props.q5.junour56, 
                    props.q5.middle3, 
                    props.q5.junour34, 
                    props.q5.high1,
                    props.q5.high2, 
                    props.q5.middle2, 
                    props.q5.high3,
                    props.q5.junour12,
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
                  ],
                borderWidth: 1,
            }
        ]
    }
    const keys2 = Object.keys(props.q7);
    const graphData2 ={
        labels: keys2,
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
    const graphData3 ={
        labels: keys3,
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
        responsive: false
      };
    return (
      <Grid container alignItems='center' justifyContent='center' spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h3" textAlign='center' mt={5} mb={3}>
            質問のアンケート結果 
            </Typography>
        </Grid>
        <Grid item xs={4} textAlign='center'>
            <Pie data={graphData} /> 
        </Grid>
        <Grid item xs={4} textAlign='center'>
            <Pie data={graphData2} /> 
        </Grid>
        <Grid item xs={4} textAlign='center'>
            <Pie data={graphData3} /> 
        </Grid>
        <Typography variant="h5" gutterBottom mt={3}>
            スマホの悩みについてご相談したい方は
            <a href='https://www.tokyohelpdesk.metro.tokyo.lg.jp/'>
                こたエール
            </a>
            へ
        </Typography>
      </Grid>
    )
}





export default GraphPage;
