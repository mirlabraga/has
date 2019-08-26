import * as React from 'react';
import { Button, Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IllenesseService } from '../../services/IllenesseService';
import { Illnesse } from '../../services/Illnesse';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class ListOfIllnessComponent extends React.Component<any, any>  {

  private illnessService: IllenesseService;

  constructor(props: any) {
    super(props)
    this.state = {
      classes: {},
      illnesses: []
    };
    this.illnessService = new IllenesseService();
    this.selectIllness = this.selectIllness.bind(this);
  }

  async componentDidMount() {
    this.loadStyle();
    this.loadIllnesses();
  }

  private async loadIllnesses() {
    let illnesses: Illnesse[] = await this.illnessService.getIllenesses();
    this.setState({ illnesses: illnesses })
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

  selectIllness(illness: Illnesse) {
    this.setState({ selectIllnesses: illness });
  }

  public render() {

    let illnessComponent;
    illnessComponent = this.state.illnesses.map((illness: Illnesse) => {
      return (<>
        <Button variant="contained" color="primary" onClick={() => this.selectIllness(illness)} size="large"
          className={this.state.classes.button}>
          {illness.name}
          <Icon className={this.state.classes.rightIcon}></Icon>
        </Button><br /></>)
    })

    let illnessSelectComponent;
    if (this.state.selectIllnesses) {
      illnessSelectComponent = <SnackbarContent className={this.state.classes.snackbar} message={`Illnesse Select: ` + this.state.selectIllnesses.name} />
    } else {
      illnessSelectComponent = <></>;
    }

    return (
      <p>
        <div>
          {illnessSelectComponent}
          {illnessComponent}
        </div>
      </p>
    );
  }
}

export default ListOfIllnessComponent;
