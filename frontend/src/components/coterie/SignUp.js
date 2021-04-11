import React, {Component} from "react";
import {
    Box,
    Button,
    Container,
    CssBaseline, FormControl,
    Grid, Input, InputLabel, Link, MenuItem,
    TextField, Typography, withStyles
} from "@material-ui/core";
import {
    borders,
    flexbox,
    palette,
    positions,
    sizing,
    width
} from '@material-ui/system';
import './SignUp.scss';

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        // marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textFieldDate: {
        width: '20%',
    },
    textFieldMonth: {
        width: '40%',
    },
    textFieldYear: {
        width: '30%',
    },
    div: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: '#8a4997',
        maxWidth: false,
        width: '100%'
    },
    box: {
        backgroundColor: '#fff',
    }
});

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            month: '',
            year: '',
            name: '',
            email: '',
            username: '',
            password: '',
        }
    }
    render() {
        const {classes} = this.props;
        const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        years = [2020, 2021];
        const handleChange = (event) => {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            console.log("Updates", this.state)


            this.setState((state, props) => {
                return {
                    [name]: value
                }
            }, () => {
                console.log("Updates", this.state)
                if (name === 'date' || name === 'month' || name === 'year') {
                    const d = this.state.date + ' ' + months.indexOf(this.state.month) + ' ' + this.state.year,
                        dw = new Date().setFullYear(this.state.year, months.indexOf(this.state.month), this.state.date);

                    console.log(d, dw);
                }
            });
        };

        const validate = () => {
            const lengthVal = this.state.name.length * this.state.email.length * this.state.username.length;
            const password = this.state.password;
            const lowerCaseLetters = /[a-z]/g,
                upperCaseLetters = /[A-Z]/g,
                numbers = /[0-9]/g;
            if (
                lengthVal &&
                password.length > 8 &&
                password.match(numbers) &&
                password.match(lowerCaseLetters) &&
                password.match(upperCaseLetters)
            ) {
                console.log("fine")
            } else {
                console.log("Not fine")
            }
        }

        const CustomContainer = withStyles((theme) => ({
            root: {
                '& .MuiContainer-maxWidthLg': {
                  width: '100%',
                }
              },
        }))(Container)

        const CssTextField = withStyles({
            root: {
              '& label.Mui-focused': {
                color: '#8a4997',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#8a4997',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset error': {
                  borderColor: 'red',
                },
                '&:hover fieldset': {
                  borderColor: '#8a4997',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#8a4997',
                },
              },
            },
        })(TextField);

        const ColorButton = withStyles((theme) => ({
            root: {
                color: theme.palette.getContrastText('#8a4997'),
                backgroundColor: '#8a4997',
                '&:hover': {
                backgroundColor: '#8a4997',
                },
            },
        }))(Button);

        return (
            <Box
                className={classes.box}
                height="75%"
                m={1}
                maxWidth="md"
                p={2}
                width="30%"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                >
                    <h1 className={classes.heading}>
                        Create New Account
                    </h1>
                </Box>

                <form className={classes.form}>
                    <div>
                        <CssTextField
                            fullWidth
                            required
                            id="name"
                            label="Name"
                            margin="normal"
                            name="name"
                            onChange={handleChange}
                            size="small"
                            type="text"
                            // value={this.state.name}
                            variant="outlined"
                        />
                        <CssTextField
                            fullWidth
                            required
                            id="username"
                            label="User Name"
                            margin="normal"
                            name="username"
                            // onChange={handleChange}
                            size="small"
                            type="text"
                            // value={this.state.username}
                            variant="outlined"
                        />
                        <CssTextField
                            fullWidth
                            required
                            id="email"
                            label="Email Address"
                            margin="normal"
                            name="email"
                            // onChange={handleChange}
                            onBlur={handleChange}
                            size="small"
                            type="email"
                            value={this.state.email}
                            variant="outlined"
                        />
                        <CssTextField
                            fullWidth
                            required
                            id="password"
                            label="Password"
                            margin="normal"
                            name="password"
                            // onChange={handleChange}
                            size="small"
                            type="password"
                            // value={this.state.password}
                            variant="outlined"
                        />
                    </div>
                    <div>Date of Birth</div>
                    <div className={classes.div}>
                        <CssTextField
                            select
                            className={classes.textFieldDate}
                            id="date"
                            label="Date"
                            margin="normal"
                            name="date"
                            onChange={handleChange}
                            size="small"
                            value={this.state.date}
                            variant="outlined"
                        >
                            {dates.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </CssTextField>
                        <CssTextField
                            select
                            className={classes.textFieldMonth}
                            id="month"
                            label="Month"
                            margin="normal"
                            name="month"
                            onChange={handleChange}
                            size="small"
                            value={this.state.month}
                            variant="outlined"
                        >
                            {months.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </CssTextField>
                        <CssTextField
                            select
                            className={classes.textFieldYear}
                            id="year"
                            label="Year"
                            margin="normal"
                            name="year"
                            onChange={handleChange}
                            size="small"
                            value={this.state.year}
                            variant="outlined"
                        >
                            {years.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </CssTextField>
                    </div>
                </form>

                <Box
                    display="flex"
                    justifyContent="center"
                    m={2}
                >
                    <ColorButton variant="contained" onClick={validate}>
                        Continue
                    </ColorButton>
                </Box>
            </Box>
        )
    };
}

export default withStyles(useStyles)(SignUp)