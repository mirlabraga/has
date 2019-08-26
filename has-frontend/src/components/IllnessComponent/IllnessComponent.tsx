import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListOfIllnessComponent from '../ListOfIllnessComponent';
import ListOfPainComponent from '../ListOfPainComponent';
import ListOfHospitalsComponent from '../ListOfHospitalsComponent';

class IllnessComponent extends React.Component<any, any>  {

  constructor(props: any) {
    super(props);
    this.state = {
      useStyles: {},
      steps: [],
      activeStep: 0,
      completed: {},
      setCompleted: {}
    };

    this.getSteps = this.getSteps.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.allStepsCompleted = this.allStepsCompleted.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.isLastStep = this.isLastStep.bind(this);
    this.setSelectedPain = this.setSelectedPain.bind(this);


    // const [activeStep, setActiveStep] = React.useState(0);
    //const [completed, setCompleted] = React.useState({});
  }

  async componentDidMount() {
    this.loadStyle();
    this.setState({ steps: this.getSteps() })
    this.setState({ activeStep: 0 })

  }

  private async loadStyle() {
    const useStyles = makeStyles(theme => ({
      root: {
        width: '90%',
      },
      button: {
        marginRight: theme.spacing(1),
      },
      completed: {
        display: 'inline-block',
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      }
    }));
    this.setState({ useStyles: useStyles })
  }

  getSteps() {
    return ['Select an illness', 'Select severity level:', 'Our suggested Hospitals:'];
  }

  getStepContent(step: any) {
    switch (step) {
      case 0:
        return 'Step 1: Select an illness';
      case 1:
        return 'Step 2: What is a severity level?';
      case 2:
        return 'Step 3: Our suggested Hospitals!';
      default:
        return 'Unknown step';
    }
  }

  totalSteps() {
    return this.state.steps.length;
  }

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  handleNext() {
    const newActiveStep =
      this.isLastStep() && !this.allStepsCompleted()
        ?
        this.state.steps.findIndex((step: any, i: any) => !(i in this.state.completed))
        : this.state.activeStep + 1;
    this.setState({ activeStep: newActiveStep });
  }

  handleStep = (step: any) => () => {
    this.setState({ activeStep: step });
  };

  handleReset() {
    this.setState({ activeStep: 0 });
    this.setState({ completed: {} });
  }

  handleBack() {
    this.setState({ activeStep: this.state.activeStep - 1 });
  }

  handleComplete() {
    const newCompleted: any = this.state.completed;
    newCompleted[this.state.activeStep] = true;
    // this.setCompleted(newCompleted);
    this.handleNext();
  }

  setSelectedPain(pain: number) {
    this.setState({selectPains : pain})
  }

  public render() {
    //{this.getStepContent(this.state.activeStep)}
    let button;
    if (this.state.activeStep == 0) {
      button = <ListOfIllnessComponent />
    } else if (this.state.activeStep == 1) {
      button = <ListOfPainComponent onChangePain={this.setSelectedPain} />;
    } else if (this.state.activeStep == 2) {
      button = <ListOfHospitalsComponent levelOfPain={this.state.selectPains}/>
    }

    return (
      <p>
      <div className={this.state.useStyles.root}>
        <Stepper nonLinear activeStep={this.state.activeStep}>
          {this.getSteps().map((label, index) => (
            <Step key={label}>
              <StepButton onClick={this.handleStep(index)} >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.allStepsCompleted() ? (
            <div>
              <Typography className={this.state.useStyles.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={this.state.useStyles.instructions}>
                  <br/>
                  <main className={this.state.useStyles.content}>
                    <div className={this.state.useStyles.toolbar} />
                    <Typography paragraph>
                      {button}
                    </Typography>
                  </main>
                </Typography>
                {/*<div>
                  <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} className={this.state.useStyles.button}>
                    Back
                </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={this.state.useStyles.button}
                  >
                    Next
                </Button>
                  {this.state.activeStep !== this.state.steps.length &&
                    true ? (
                      <Typography variant="caption" className={this.state.useStyles.completed}>
                        Step {this.state.activeStep + 1} already completed
                    </Typography>
                    ) : (
                      <Button variant="contained" color="primary" onClick={this.state.handleComplete}>
                        {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                      </Button>
                    )}
                    </div>*/}
              </div>
            )}
        </div>
      </div>
      </p>
    );
  }
}

export default IllnessComponent;
