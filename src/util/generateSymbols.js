import React from 'react'
import { makeSymbol, Text, View } from 'react-sketchapp'
import { BORDER_RADII, BORDER_WIDTH, ACTIVE_THEME } from '../theme/ids'

import theme from '../theme/app'
import { color } from '../theme/app/color'
import { toTitleCase } from './index'

const baseHeight = 80
const baseWidth = baseHeight

const baseStyle = {
    width: baseWidth,
    height: baseHeight,
    backgroundColor: '#fafafa',
}

const ViewBase = ({ style = {}, name = 'base', shadows }) => {
    return (
        <View
            style={{ ...baseStyle, ...style }}
            name={name}
            shadows={shadows ? shadows : null}
            resizingConstraint={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                fixedHeight: false,
                fixedWidth: false,
            }}
        />
    )
}

const TextBase = ({ style = {}, name = 'base', shadows }) => {
    return (
        <Text
            style={{ ...style }}
            name={name}
            shadows={shadows ? shadows : null}
            resizingConstraint={{
                top: false,
                right: true,
                bottom: false,
                left: true,
                fixedHeight: false,
                fixedWidth: false,
            }}
        >
            {name}
        </Text>
    )
}

const generateShadowSymbols = shadows => {
    Object.values(shadows).map((shadow, index) => {
        BORDER_RADII.map(radius => {
            makeSymbol(
                () => (
                    <ViewBase
                        shadows={shadow}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: radius.value,
                        }}
                    />
                ),
                `* / Shadow / Border ${toTitleCase(
                    radius.name
                )} / Elevation ${index}`
            )
        })
    })
}

const generateTypographySymbols = typography => {
    const typo = typography(ACTIVE_THEME)
    Object.keys(typo).map(key => {
        console.log(typo[key])
        const type = key.split('/')[1]
        const alignment = key.split('/')[0]
        const state = key.split('/')[2]
        makeSymbol(
            () => <TextBase style={typo[key]} name={type} />,
            `* / Typography / ${toTitleCase(type)} / ${state} / ${toTitleCase(
                alignment
            )}`
        )
    })
}

const generateColorSymbols = colors => {
    Object.keys(colors).map(colorGroup => {
        Object.keys(colors[colorGroup]).map(color => {
            const category = colorGroup
            const colorName = color
            const colorValue = colors[colorGroup][color][ACTIVE_THEME]
            const renderOutline = colors[colorGroup][color].outline

            makeSymbol(
                () => (
                    <ViewBase
                        name={`${category}-${colorName}`}
                        style={{
                            backgroundColor: colorValue,
                        }}
                    />
                ),
                `* / Fill / ${toTitleCase(category)} / ${toTitleCase(
                    colorName
                )}`
            )

            renderOutline &&
                BORDER_RADII.map(radius => {
                    makeSymbol(
                        () => (
                            <ViewBase
                                name={`${category}-${colorName}-outline-${radius.name.toLocaleLowerCase()}`}
                                style={{
                                    borderWidth: BORDER_WIDTH,
                                    borderStyle: 'solid',
                                    borderColor: colorValue,
                                    borderRadius: radius.value,
                                }}
                            />
                        ),
                        `* / Outline / Radius ${toTitleCase(
                            radius.name
                        )} / ${toTitleCase(category)} / ${toTitleCase(
                            colorName
                        )}`
                    )
                })
        })
    })
}

generateColorSymbols(color)
generateTypographySymbols(theme.typography)
generateShadowSymbols(theme.shadow)
