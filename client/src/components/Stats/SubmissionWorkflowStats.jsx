import React, { Component } from 'react';
import { ResponsiveContainer, Label, ComposedChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Brush, LineChart } from 'recharts';
import {  HTTPErrorNormalizer} from '../common';
import request from 'superagent';
import lodash from 'lodash';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class SubmissionWorkflowStats extends Component {
  constructor(){
    super();
    this.state = {
      unauthorized: false,
      error: undefined,
      workflowColln :[],
      graphDataColln:[],
      chartData:[]
    };

    this.style = {
      legend:{
        right: 0,
        lineHeight: '30px',
        fontSize: '15px',
        margin: '20px auto auto auto'
      },
      tooltip:{
        width: 'auto',
        borderRadius: 3,
        backgroundColor: '#f5f5f5',
        border: '1px solid #d5d5d5'
      }
    }
  }

  componentDidMount () {
    // getting stats data from api
    request
    .get(`/api/v1/evaluations/stats`)
    .end((err, res) => {
      if(err) {
        let {msg, unauthorized} = HTTPErrorNormalizer.normalizeError(err, res);
        this.setState({
          unauthorized: unauthorized,
          error: msg
        });
      } else {
        const stats = res.body.stats;

        // getting the stats into a collection
        let uniqueWorkflowData = lodash.uniqBy(stats, 'workflow');
        let transformedStats = this.transformStatsData(stats);

        // getting the distinct list of workflows into a collection and setting the state
        this.setState({workflowColln: uniqueWorkflowData, graphDataColln: stats, chartData: transformedStats});
      };
    })
  }

  // color codes for each line given dynamically
  hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB = (i) =>{
    let c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
    return "#"+"00000".substring(0, 6 - c.length) + c;
  }
  // transforming data to required format
  transformStatsData = (dataColln) => {
    // sorting the dates from first date until now
    dataColln.sort(function(dateOne, dateTwo) {
      let sortedDate = new Date(dateOne.submittedOn) - new Date(dateTwo.submittedOn);
      return sortedDate;
    });

    let map = new Map();
    let result;

    dataColln.forEach(({ submittedOn, workflow, submissions }) =>
    // using Object.assign to assign the values to the new objects
    map.set(submittedOn, Object.assign(map.get(submittedOn) || { submittedOn }, { [workflow]: submissions }))
  );

  // using spread syntax for For array literals or strings.
  result = [...map.values()];
  return result;
}

// changing the coordinates of the Xaxis dataKeys
handleXaxisCoordinates = (coordinates) => {
  let {x, y, payload} = coordinates;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={5} textAnchor="end" fill="#666" transform="rotate(-15)">
        {payload.value}
      </text>
    </g>
  );
}

// getting the graph line block
getLineBlock = () => {
  let line = this.state.workflowColln.map((element, index) => {
    return(
      <Line
        key={index}
        connectNulls={true}
        dataKey={element.workflow}
        opacity={element.opacity}
        stroke={this.intToRGB(this.hashCode(element.workflow))}
        strokeWidth={1.2}
        activeDot={{r: 6}}
        dot={true}
        type='monotone'>
      </Line>
    )
  })
  return line;
}

render () {
  return (
    <Grid fluid >
      <h2>Submission Against TimeLine</h2>
      <Row center="xs">
        <Col xs={12}>
          <div>
            <ResponsiveContainer width={"90%"} height={600}>
              <ComposedChart width={900} height={600} data={this.state.chartData}
                margin={{ top: 10, right: 50, bottom: 5, left: 10 }}>
                <XAxis
                  height={70}
                  dataKey="submittedOn"
                  label={{ value: 'Submission Date', position: 'insideBottom' }}
                  padding={{ left: 10 }}
                  tick={this.handleXaxisCoordinates.bind(this)}/>
                <YAxis width={120}>
                  <Label angle={-90} position="center" value="Number of daily submissions"/>
                </YAxis>
                <Legend iconType='square' wrapperStyle={this.style.legend} layout="horizontal"/>
                <Tooltip
                  wrapperStyle={this.style.tooltip}
                  itemStyle={{textAlign:"left"}}
                  cursor={{ stroke: '#08FD04'}}
                  animationEasing="linear"/>
                <CartesianGrid strokeDasharray="1 1" stroke="#109B8D"/>
                {this.getLineBlock()}
                <Brush dataKey="submittedOn" stroke="#fffff">
                  <LineChart>
                    {this.getLineBlock()}
                  </LineChart>
                </Brush>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
}
