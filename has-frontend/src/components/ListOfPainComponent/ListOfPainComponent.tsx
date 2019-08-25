import * as React from 'react';
import { Button, Icon } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { PainsService } from '../../services/PainService';

class ListOfPainComponent extends React.Component<any, any>  {

  private painsService: PainsService;

  constructor(props: any) {
    super(props)
    this.state = {
      classes: {},
      pains: []
    };
    this.painsService = new PainsService();
    this.selectPains = this.selectPains.bind(this);
  }

  async componentDidMount() {
    this.loadStyle();
    this.loadPains();
  }

  private async loadPains() {
    let pains: Number[] = await this.painsService.getPains();
    this.setState({ pains: pains })
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

  selectPains(pain: Number) {
    this.setState({ selectPains: pain });
  }

  public render() {

    let painComponent;
    painComponent = this.state.pains.map((pain: Number) => {
      return (<>
        <Button variant="contained" color="primary" onClick={() => this.selectPains(pain)} size="large"
          className={this.state.classes.button}>
          {pain}
          <Icon className={this.state.classes.rightIcon}></Icon>
        </Button><br /></>)
    })

    let painSelectComponent;
    if (this.state.selectPains) {
      painSelectComponent = <SnackbarContent className={this.state.classes.snackbar} message={`Level of Pain Select: ` + this.state.selectPains} />
    } else {
      painSelectComponent = <></>;
    }

    return (
      <div>
        {painSelectComponent}
        {painComponent}
      </div>
    );
  }
}

export default ListOfPainComponent;
