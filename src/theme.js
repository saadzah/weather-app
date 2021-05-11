import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
    {
        palette: {
            type: 'dark',
            background: {
                paper: "#333333",
                default: "#212121"
            },
            secondary: {
                main: "#8884d8",
                dark: "#8884d8"
            }
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    }
)

export default theme;