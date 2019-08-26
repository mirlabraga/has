import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { HospitalService } from '../../services/HospitalService';
import { Hospital } from '../../services/Hospital';

interface HospitalExtendedField {
  name: string;
  patientCount: number;
  levelOfPain: number;
  averageProcessTime: number;
  waitingTime: number;
}

class TableInfomationComponent extends React.Component<any, any> {

  private hospitalsService: HospitalService;

  constructor(props: any) {
    super(props);
    this.state = {
      rows: [],
      useStyles: {}

    };
    this.hospitalsService = new HospitalService();
  }

  async componentDidMount() {
    this.loadHospitals();
    this.loadStyle();
  }

  private async loadHospitals() {
    const hospitals: Hospital[] = await this.hospitalsService.getHospitals();
    let hospitalExtendedField: any[] = [];
    hospitals.forEach(hospital => {
      hospital.waitingList.forEach (waitingList => {
        hospitalExtendedField.push([waitingList.levelOfPain, hospital.name,
          waitingList.averageProcessTime, waitingList.patientCount, waitingList.waitingTime]);
      });
    });
    this.setState({rows: hospitalExtendedField})
  }

  private async loadStyle() {
    const style = makeStyles(theme => ({
      root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
        minWidth: 650,
      },
    }))
    this.setState({useStyles: style})
  }

  public render() {

    return (
      <Paper className={this.state.root}>
        <Table className={this.state.table}>
          <TableHead>
            <TableRow>
              <TableCell>Level of pain</TableCell>
              <TableCell align="right">Hospital</TableCell>
              <TableCell align="right">Avg process time (min)</TableCell>
              <TableCell align="right">Patients at waiting list</TableCell>
              <TableCell align="right">Waiting time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                {row[0]}
                </TableCell>
                <TableCell align="right">{row[1]}</TableCell>
                <TableCell align="right">{row[2]}</TableCell>
                <TableCell align="right">{row[3]}</TableCell>
                <TableCell align="right">{row[4]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
};

export default TableInfomationComponent;
