import * as React from 'react';
import { Button, Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HospitalService } from '../../services/HospitalService';
import { Hospital } from '../../services/Hospital';

class ListOfHospitalsComponent extends React.Component<any, any>  {

  private hospitalsService: HospitalService;

  constructor(props: any) {
    super(props)
    this.state = {
      classes: {},
      hospitals:[]
    };
    this.hospitalsService = new HospitalService();
  }

  async componentDidMount() {
    this.loadStyle();
    this.loadHospitals();
  }

  private async loadHospitals() {
    let hospitals: Hospital[] = await this.hospitalsService.getHospitalsByPain(2) ;
    this.setState({ hospitals: hospitals })
  }

  private async loadStyle() {
    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        button: {
          margin: theme.spacing(1)
        },
        leftIcon: {
          marginRight: theme.spacing(1),
        },
        rightIcon: {
          marginLeft: theme.spacing(1),
        },
        iconSmall: {
          fontSize: 20,
        },
        snackbar: {
          margin: theme.spacing(1),
        }
      }),
    );
    this.setState({ classes: useStyles })
  }

  public render() {

    let hospitalComponent;
    hospitalComponent = this.state.hospitals.map((hospital: Hospital) => {
      return (<>
        <Button variant="contained" color="primary" size="large"
          className={this.state.classes.button}>
          {hospital.name}
          <Icon className={this.state.classes.rightIcon}></Icon>
        </Button><br /></>)
    })

    return (
      <div>
        {hospitalComponent}
      </div>
    );
  }
}

export default ListOfHospitalsComponent;
