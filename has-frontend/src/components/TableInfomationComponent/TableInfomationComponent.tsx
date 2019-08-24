import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { HospitalService } from '../../services/HospitalService';

class TableInfomationComponent extends React.Component<any, any> {

  private hospitalsService: HospitalService;

  constructor(props: any) {
    super(props);
    this.state = {
      rows: [],
      useStyles: makeStyles(theme => ({
        root: {
          width: '100%',
          marginTop: theme.spacing(3),
          overflowX: 'auto',
        },
        table: {
          minWidth: 650,
        },
      }))

    };

    this.hospitalsService = new HospitalService();
    this.getInfoHospitals();
  }

  private getInfoHospitals() {
    fetch('/api/v1/hospitals/waitingtimes')
      .then(res => res.json())
      .then((data) => {
        this.setState({ rows: data })
      })
      .catch(console.log)
  }

  public render() {

    return (
      <Paper className={this.state.root}>
        <Table className={this.state.table}>
          <TableHead>
            <TableRow>
              <TableCell>Level of pain</TableCell>
              <TableCell align="right">Hospital</TableCell>
              <TableCell align="right">Avg process time</TableCell>
              <TableCell align="right">Patients at waiting list</TableCell>
              <TableCell align="right">Waiting time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">2</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
};

export default TableInfomationComponent;
