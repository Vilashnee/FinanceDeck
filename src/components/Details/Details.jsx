import React from 'react'
import {Card, CardHeader,CardContent,Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
import {Chart as ChartJs} from 'chart.js/auto'
import useTransactions from '../../useTransactions'

const Details = ({ title }) => {
  const classes = useStyles();
  const {total, chartData} = useTransactions(title);
  console.log({chartData});
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title= {title} />
      <CardContent>
        <Typography variant='h5'>&#8377; {total} </Typography>
         <Doughnut data = {chartData}/> 
      </CardContent>
    </Card>
  )
}

export default Details