import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            contrastText: "##ffffff",
            dark: "#002f6c",
            light: "#4f83cc",
            main: "#01579b",
        },
        secondary: {
            contrastText: "#000000",
            dark: "#0086c3",
            light: "#73e8ff",
            main: "#29b6f6",
        },
    },
}));

export default theme;
