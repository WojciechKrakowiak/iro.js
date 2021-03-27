(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{236:function(e,t,a){"use strict";a.r(t);var r=a(28),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The Color API is used by color pickers to store the selected color and to handle conversions between different color models. It's also made accessible via "),a("code",[e._v("iro.Color")]),e._v(" so that it can be used as a general color utility library.")]),e._v(" "),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[e._v("#")]),e._v(" Constructor")]),e._v(" "),a("p",[a("strong",[e._v("Arguments:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{String | Object | Color}")]),e._v(" Initial color. This can be any "),a("a",{attrs:{href:"#supported-color-formats"}},[e._v("supported color format")]),e._v(", or another Color instance.")])]),e._v(" "),a("h2",{attrs:{id:"supported-color-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-color-formats"}},[e._v("#")]),e._v(" Supported Color Formats")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Hex string")]),e._v(": "),a("code",[e._v('"#ff0000"')])]),e._v(" "),a("li",[a("strong",[e._v("Hex alpha string")]),e._v(": "),a("code",[e._v('"#ff0000ff"')])]),e._v(" "),a("li",[a("strong",[e._v("Shorthand hex string")]),e._v(": "),a("code",[e._v('"#f00"')])]),e._v(" "),a("li",[a("strong",[e._v("Shorthand hex alpha string")]),e._v(": "),a("code",[e._v('"#f00f"')])]),e._v(" "),a("li",[a("strong",[e._v("RGB string")]),e._v(": "),a("code",[e._v('"rgb(255, 0, 0)"')])]),e._v(" "),a("li",[a("strong",[e._v("RGBA string")]),e._v(": "),a("code",[e._v('"rgba(255, 0, 0, 1)"')])]),e._v(" "),a("li",[a("strong",[e._v("Percentage RGB string")]),e._v(": "),a("code",[e._v('"rgb(100%, 0%, 0%)"')])]),e._v(" "),a("li",[a("strong",[e._v("Percentage RGBA string")]),e._v(": "),a("code",[e._v('"rgba(100%, 0%, 0%, 100%)"')])]),e._v(" "),a("li",[a("strong",[e._v("RGB object")]),e._v(": "),a("code",[e._v("{r: 255, g: 0, b: 0}")])]),e._v(" "),a("li",[a("strong",[e._v("RGBA object")]),e._v(": "),a("code",[e._v("{r: 255, g: 0, b: 0, a: 1}")])]),e._v(" "),a("li",[a("strong",[e._v("HSL string")]),e._v(": "),a("code",[e._v('"hsl(360, 50%, 100%)"')])]),e._v(" "),a("li",[a("strong",[e._v("HSLA string")]),e._v(": "),a("code",[e._v('"hsla(360, 50%, 100%, 1)"')])]),e._v(" "),a("li",[a("strong",[e._v("HSL object")]),e._v(": "),a("code",[e._v("{h: 360, s: 50, l: 100}")])]),e._v(" "),a("li",[a("strong",[e._v("HSLA object")]),e._v(": "),a("code",[e._v("{h: 360, s: 50, l: 100, a: 1}")])]),e._v(" "),a("li",[a("strong",[e._v("HSV object")]),e._v(": "),a("code",[e._v("{h: 360, s: 100, v: 50}")])]),e._v(" "),a("li",[a("strong",[e._v("HSVA object")]),e._v(": "),a("code",[e._v("{h: 360, s: 100, v: 50, a: 1}")])])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("p",[e._v('Color objects have several "magic" properties that reflect the value of the color in different formats. The magic is that they are readable as well as writable, so they can both '),a("strong",[e._v("get")]),e._v(" and "),a("strong",[e._v("set")]),e._v(" the color from that given format.")]),e._v(" "),a("h3",{attrs:{id:"red"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#red"}},[e._v("#")]),e._v(" "),a("code",[e._v("red")])]),e._v(" "),a("p",[e._v("The color's red channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("255")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"green"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#green"}},[e._v("#")]),e._v(" "),a("code",[e._v("green")])]),e._v(" "),a("p",[e._v("The color's green channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("255")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"blue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blue"}},[e._v("#")]),e._v(" "),a("code",[e._v("blue")])]),e._v(" "),a("p",[e._v("The color's blue channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("255")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"alpha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alpha"}},[e._v("#")]),e._v(" "),a("code",[e._v("alpha")])]),e._v(" "),a("p",[e._v("The color's value channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"hue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hue"}},[e._v("#")]),e._v(" "),a("code",[e._v("hue")])]),e._v(" "),a("p",[e._v("The color's hue channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("360")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"saturation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saturation"}},[e._v("#")]),e._v(" "),a("code",[e._v("saturation")])]),e._v(" "),a("p",[e._v("The color's saturation channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("100")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[e._v("#")]),e._v(" "),a("code",[e._v("value")])]),e._v(" "),a("p",[e._v("The color's value channel as a number between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("100")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"kelvin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kelvin"}},[e._v("#")]),e._v(" "),a("code",[e._v("kelvin")])]),e._v(" "),a("p",[e._v("The color's approximate kelvin temperature.")]),e._v(" "),a("h3",{attrs:{id:"rgb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgb"}},[e._v("#")]),e._v(" "),a("code",[e._v("rgb")])]),e._v(" "),a("p",[e._v("The color as an "),a("a",{attrs:{href:"https://www.wikiwand.com/en/RGB_color_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("RGB"),a("OutboundLink")],1),e._v(" object.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v("{r: 255, g: 0, b: 0}")])]),e._v(" "),a("h3",{attrs:{id:"rgba"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgba"}},[e._v("#")]),e._v(" "),a("code",[e._v("rgba")])]),e._v(" "),a("p",[e._v("The color as an "),a("a",{attrs:{href:"https://www.wikiwand.com/en/RGB_color_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("RGBA"),a("OutboundLink")],1),e._v(" object, where "),a("code",[e._v("a")]),e._v(" represents the color's transparency.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v("{r: 255, g: 0, b: 0, a: 1}")])]),e._v(" "),a("h3",{attrs:{id:"hsv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsv"}},[e._v("#")]),e._v(" "),a("code",[e._v("hsv")])]),e._v(" "),a("p",[e._v("The color as a "),a("a",{attrs:{href:"https://www.wikiwand.com/en/HSL_and_HSV",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSV"),a("OutboundLink")],1),e._v(" object.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v("{h: 360, s: 100, v: 50}")])]),e._v(" "),a("h3",{attrs:{id:"hsva"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsva"}},[e._v("#")]),e._v(" "),a("code",[e._v("hsva")])]),e._v(" "),a("p",[e._v("The color as a "),a("a",{attrs:{href:"https://www.wikiwand.com/en/HSL_and_HSV",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSVA"),a("OutboundLink")],1),e._v(" object, where "),a("code",[e._v("a")]),e._v(" represents the color's transparency.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v("{h: 360, s: 100, v: 50, a: 1}")])]),e._v(" "),a("h3",{attrs:{id:"hsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsl"}},[e._v("#")]),e._v(" "),a("code",[e._v("hsl")])]),e._v(" "),a("p",[e._v("The color as a "),a("a",{attrs:{href:"https://www.wikiwand.com/en/HSL_and_HSV",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSL"),a("OutboundLink")],1),e._v(" object.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v("{h: 360, s: 50, l: 100}")])]),e._v(" "),a("h3",{attrs:{id:"hsla"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsla"}},[e._v("#")]),e._v(" "),a("code",[e._v("hsla")])]),e._v(" "),a("p",[e._v("The color as a "),a("a",{attrs:{href:"https://www.wikiwand.com/en/HSL_and_HSV",target:"_blank",rel:"noopener noreferrer"}},[e._v("HSLA"),a("OutboundLink")],1),e._v(" object, where "),a("code",[e._v("a")]),e._v(" represents the color's transparency.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v("{h: 360, s: 50, l: 100, a: 1}")])]),e._v(" "),a("h3",{attrs:{id:"hexstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexstring"}},[e._v("#")]),e._v(" "),a("code",[e._v("hexString")])]),e._v(" "),a("p",[e._v("The color as a hex string. Shorthand hex input is also accepted.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v('"#ff0000"')]),e._v(" or "),a("code",[e._v('"#f00"')])]),e._v(" "),a("h3",{attrs:{id:"hex8string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hex8string"}},[e._v("#")]),e._v(" "),a("code",[e._v("hex8String")])]),e._v(" "),a("p",[e._v("The color as a hex alpha string. Shorthand hex input is also accepted.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v('"#ff0000ff"')]),e._v(" or "),a("code",[e._v('"#f00f"')])]),e._v(" "),a("h3",{attrs:{id:"rgbstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgbstring"}},[e._v("#")]),e._v(" "),a("code",[e._v("rgbString")])]),e._v(" "),a("p",[e._v("The color as an RGB string. Percentage-based RGB strings are also accepted as inputs.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v('"rgb(255, 0, 0)"')]),e._v(" or "),a("code",[e._v('"rgb(100%, 0%, 0%)"')])]),e._v(" "),a("h3",{attrs:{id:"rgbastring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgbastring"}},[e._v("#")]),e._v(" "),a("code",[e._v("rgbaString")])]),e._v(" "),a("p",[e._v("The color as an RGBA string. Percentage-based RGBA strings are also accepted as inputs.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v('"rgba(255, 0, 0, 1)"')]),e._v(" or "),a("code",[e._v('"rgba(100%, 0%, 0%, 100%)"')])]),e._v(" "),a("h3",{attrs:{id:"hslstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hslstring"}},[e._v("#")]),e._v(" "),a("code",[e._v("hslString")])]),e._v(" "),a("p",[e._v("The color as a percentage HSL string.")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v('"hsl(360, 100%, 50%)"')])]),e._v(" "),a("h3",{attrs:{id:"hslastring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hslastring"}},[e._v("#")]),e._v(" "),a("code",[e._v("hslaString")])]),e._v(" "),a("p",[e._v("The color as a percentage HSLA string")]),e._v(" "),a("p",[a("strong",[e._v("Example format")]),e._v(": "),a("code",[e._v('"hsl(360, 100%, 50%, 1)"')])]),e._v(" "),a("h3",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" "),a("code",[e._v("index")])]),e._v(" "),a("p",[e._v("The color's index.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" "),a("code",[e._v("set")])]),e._v(" "),a("p",[e._v("Set the color from any "),a("a",{attrs:{href:"#supported-color-formats"}},[e._v("supported color format")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Color}")])])]),e._v(" "),a("h3",{attrs:{id:"setchannel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setchannel"}},[e._v("#")]),e._v(" "),a("code",[e._v("setChannel")])]),e._v(" "),a("p",[e._v("Set a specific color channel to a new value. "),a("code",[e._v("format")]),e._v(" can be either "),a("code",[e._v("hsv")]),e._v(" or "),a("code",[e._v("rgb")]),e._v(", and "),a("code",[e._v("channel")]),e._v(" should be a single letter representing which channel from the format you wish to set.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{String}")]),e._v(" format")]),e._v(" "),a("li",[a("code",[e._v("{String}")]),e._v(" channel")]),e._v(" "),a("li",[a("code",[e._v("{Number}")]),e._v(" value")])]),e._v(" "),a("p",[a("strong",[e._v("Example")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// set the rgb red channel to 255:")]),e._v("\ncolor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'rgb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// set the hsv hue channel to 180:")]),e._v("\ncolor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'hsv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'h'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[e._v("#")]),e._v(" "),a("code",[e._v("clone")])]),e._v(" "),a("p",[e._v("Copy the color and return a new Color object with the same value.")]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Color}")])]),e._v(" "),a("h3",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[e._v("#")]),e._v(" "),a("code",[e._v("reset")])]),e._v(" "),a("p",[e._v("Resets the color back to the value initially passed to the "),a("code",[e._v("iro.Color")]),e._v(" constructor.")]),e._v(" "),a("h2",{attrs:{id:"static-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-methods"}},[e._v("#")]),e._v(" Static Methods")]),e._v(" "),a("h3",{attrs:{id:"hsvtorgb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsvtorgb"}},[e._v("#")]),e._v(" "),a("code",[e._v("hsvToRgb")])]),e._v(" "),a("p",[e._v("Convert a HSV object to an RGB object.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Object}")]),e._v(" HSV values, e.g "),a("code",[e._v("{h: 360, s: 100, v: 50}")])])]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Object}")]),e._v(" RGB values, e.g "),a("code",[e._v("{r: 255, g: 0, b: 0}")])]),e._v(" "),a("h3",{attrs:{id:"rgbtohsv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgbtohsv"}},[e._v("#")]),e._v(" "),a("code",[e._v("rgbToHsv")])]),e._v(" "),a("p",[e._v("Convert an RGB object to a HSV object.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Object}")]),e._v(" RGB values, e.g "),a("code",[e._v("{r: 255, g: 0, b: 0}")])])]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Object}")]),e._v(" HSV values, e.g "),a("code",[e._v("{h: 360, s: 100, v: 50}")])]),e._v(" "),a("h3",{attrs:{id:"hsvtohsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsvtohsl"}},[e._v("#")]),e._v(" "),a("code",[e._v("hsvToHsl")])]),e._v(" "),a("p",[e._v("Convert a HSV object to a HSL object.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Object}")]),e._v(" HSV values, e.g "),a("code",[e._v("{h: 360, s: 50, v: 100}")])])]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Object}")]),e._v(" HSL values, e.g "),a("code",[e._v("{h: 360, s: 100, l: 100}")])]),e._v(" "),a("h3",{attrs:{id:"hsltohsv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hsltohsv"}},[e._v("#")]),e._v(" "),a("code",[e._v("hslToHsv")])]),e._v(" "),a("p",[e._v("Convert a HSL object to a HSV object.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Object}")]),e._v(" HSL values, e.g "),a("code",[e._v("{h: 360, s: 100, l: 100}")])])]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Object}")]),e._v(" HSV values, e.g "),a("code",[e._v("{h: 360, s: 50, v: 100}")])]),e._v(" "),a("h3",{attrs:{id:"kelvintorgb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kelvintorgb"}},[e._v("#")]),e._v(" "),a("code",[e._v("kelvinToRgb")])]),e._v(" "),a("p",[e._v("Convert a kelvin temperature to an approximated RGB object.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Number}")]),e._v(" kelvin temperature")])]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Object}")]),e._v(" RGB values, e.g "),a("code",[e._v("{r: 255, g: 0, b: 0}")])]),e._v(" "),a("h3",{attrs:{id:"rgbtokelvin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgbtokelvin"}},[e._v("#")]),e._v(" "),a("code",[e._v("rgbToKelvin")])]),e._v(" "),a("p",[e._v("Convert an RGB object to an approximated kelvin temperature.")]),e._v(" "),a("p",[a("strong",[e._v("Arguments")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("{Object}")]),e._v(" RGB values, e.g "),a("code",[e._v("{r: 255, g: 0, b: 0}")])])]),e._v(" "),a("p",[a("strong",[e._v("Returns")]),e._v(": "),a("code",[e._v("{Number}")]),e._v(" kelvin temperature")])])}),[],!1,null,null,null);t.default=s.exports}}]);