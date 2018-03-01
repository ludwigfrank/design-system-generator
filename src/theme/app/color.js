import chroma from 'chroma-js'
import { DARK_THEME, LIGHT_THEME } from '../ids'

const UI_BASE_DARK = '#232326'
const UI_BASE_LIGHT = '#FDFDFD'

const light = {

    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: '#1B2733',
        secondary: '#464F56',
        hint: '#697279',
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: '#1E47FB',
        danger: '#ff3d80'
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        separator: chroma(UI_BASE_LIGHT).darken(1).hex(),
        textInput: chroma(UI_BASE_LIGHT).darken(0.4).hex(),

        /* Slider */
        sliderKnob: chroma(UI_BASE_LIGHT).brighten(4.5).hex(),
        sliderBackground: chroma(UI_BASE_LIGHT).darken(0.6).hex() ,

        /* NavigationBar */
        navigationBar: chroma(UI_BASE_LIGHT).darken(0.4).hex(),

        /* ToolBar */
        toolBar: UI_BASE_LIGHT,

        /* Canvas */
        canvas: chroma(UI_BASE_LIGHT).darken(1).hex()
    }
}

const dark = {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: '#fffdfd',
        secondary: '#dedfe0',
        hint: '#a9b0b4'
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: '#1E47FB',
        danger: '#ff3d80'
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        separator: chroma(UI_BASE_DARK).darken(1).hex(),
        textInput: chroma(UI_BASE_DARK).brighten(0.5).hex(),

        /* Slider */
        sliderKnob: chroma(UI_BASE_DARK).brighten(4.5).hex(),
        sliderBackground: chroma(UI_BASE_DARK).darken(0.6).hex() ,

        /* NavigationBar */
        navigationBar: chroma(UI_BASE_DARK).darken(0.4).hex(),

        /* ToolBar */
        toolBar: UI_BASE_DARK,

        /* Canvas */
        canvas: chroma(UI_BASE_DARK).darken(0.8).hex()
    }
}

export const _color = {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: {
            [DARK_THEME]: '#fffdfd',
            [LIGHT_THEME]: '#1B2733',
        },

        secondary: {
            [DARK_THEME]: '#dedfe0',
            [LIGHT_THEME]: '#464F56',
        },

        hint: {
            [DARK_THEME]: '#a9b0b4',
            [LIGHT_THEME]: '#697279',
        },
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: {
            [DARK_THEME]: '#1E47FB',
            [LIGHT_THEME]: '#1E47FB',
            outline: true
        },

        danger: {
            [DARK_THEME]: '#ff3d80',
            [LIGHT_THEME]: '#ff3d80',
            outline: true
        },
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        // Used to clearly separate two ui components or make edges appear harder.
        separator: {
            [DARK_THEME]: chroma(UI_BASE_DARK).darken(1).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(1).hex(),
        },

        // The line under the text input.
        textInput: {
            [DARK_THEME]: chroma(UI_BASE_DARK).brighten(0.4).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).darken(0.4).hex(),

            // Outline is used for box styled inputs and buttons
            outline: true
        },

        /* Slider */
        sliderKnob: {
            [DARK_THEME]: chroma(UI_BASE_DARK).brighten(4.5).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(4.5).hex(),
        },

        sliderBackground: {
            [DARK_THEME]: chroma(UI_BASE_DARK).darken(0.6).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).darken(1.5).hex(),
        },

        /* NavigationBar */
        navigationBar: {
            [DARK_THEME]: chroma(UI_BASE_DARK).darken(0.4).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).darken(0.4).hex(),
        },

        /* ToolBar */
        toolBar: {
            [DARK_THEME]: UI_BASE_DARK,
            [LIGHT_THEME]: UI_BASE_LIGHT,
        },

        /* Canvas */
        canvas: {
            [DARK_THEME]: UI_BASE_DARK,
            [LIGHT_THEME]: UI_BASE_LIGHT,
        },
    }
}


const color = {
    [DARK_THEME]: dark,
    [LIGHT_THEME]: light
}

export default color