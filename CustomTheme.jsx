import { createTheme } from "@mui/material";

const CustomTheme = createTheme({
    palette: {
        primary: {
            main: '#ff9800', // Used for headings, buttons, links
            dark: '#e68900', // Hover state for button
        },
        text: {
            primary: '#111827', // Card titles
            secondary: '#6b7280', // Card content, submenu items
        },
        success: {
            main: '#2e7d32',
        },
        error: {
            main: '#d32f2f',
        },
    },
    typography: {
        h2: {
            color: '#ff9800',
        },
        h3: {
            color: '#ff9800',
        },
    },

});
export default CustomTheme
