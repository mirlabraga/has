import * as React from 'react';
import { Button, Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HospitalService } from '../../services/HospitalService';
import { Hospital } from '../../services/Hospital';

export interface PropTypes {
  levelOfPain: number
}

class ListOfHospitalsComponent extends React.Component<PropTypes, any>  {

  private hospitalsService: HospitalService;

  constructor(props: PropTypes) {
    super(props)
    this.state = {
      classes: {},
      hospitals:[]
    };
    this.hospitalsService = new HospitalService();
    console.log(this.props.levelOfPain);
  }

  async componentDidMount() {
    this.loadStyle();
    this.loadHospitals();
  }

  private async loadHospitals() {
    console.log(this.props.levelOfPain);
    let hospitals: Hospital[] = await this.hospitalsService.getHospitalsByPain(this.props.levelOfPain) ;
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
          {hospital.name} - Wait time: {hospital.waitingList[0].waitingTime} min
          <Icon className={this.state.classes.rightIcon}></Icon>
        </Button><br /></>)
    })

    return (
      <p>
        <div>
            {hospitalComponent}
        </div>
      </p>
    );
  }
}

export default ListOfHospitalsComponent;
