import chroma, { scale } from 'chroma-js';
const levels = [50,100,200,300,400,500,600,700,800,900];


/*
    passing old palette to the function to generate a new palette of colors with levels from 50 to 800
    black ------------- color ------------------ white
    0--------------------50------------------------100
    ------darkClrs-----colors-------lightClrs---------
*/

export default function generatePalette({paletteName,id,emoji,colors}){
    
    /*
    oldPaleteColors
        colors : [{ name: "red", color: "#F44336" },....,{ name: "bluegrey", color: "#607D8B" }]

    newPaletteColors
        colors:{
            50:[ 
                    {name:"red 50",id,hex,rgb,rgba},
                    .....,{name :'bluegrey 50',...   }
                ],
                .
                .
                .
            800:[
                    {name:"red 800",id,hex,rgb,rgba},
                    .....,{name :'bluegrey 800' ,...  }
                ]
        }
        
    */
    let newPalette = {
        paletteName,
        id,
        emoji,
        colors:{}
    }

    for(let level of levels){
        newPalette.colors[level] = []
    }

    for (let color of colors) {
        /*
            scale - [0,1,2,3,4,5,6,7,8,9] each index has a color ranging from a darker version to lighter version of the color

        */
        let scale = getScale(color.color, 10).reverse();
        
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name}-${levels[i]}`,
                id: color.name.toLowerCase(),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                .css()
                .replace("rgb", "rgba")
                .replace(")", ",1.0)")
            });
        }
    }

    return newPalette
}

function getRange(hexColor) {
    const end = "#fff"
    return [
        chroma(hexColor)
        .darken(1.4)
        .hex(),
        hexColor,
        end
    ]
}

function getScale(hexColor, numberOfColors){
    return chroma.scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors)
}