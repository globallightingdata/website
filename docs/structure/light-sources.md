---
title: Light Sources
sidebar_label: Light Sources
---
`LightSources` is the fifth child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of LightSources is **optional**.

`LightSources` are defined direct in GLDF. A distinction is made between two fundamentally different variants. 
A `LightSource` in the GLDF can be defined in two ways

1. `ChangeableLightSource`Represents a classic user-replaceable light source. Typically, such a lamp determines the light colour, the nominal luminous flux and the nominal power of the light source.
2. `FixedLightSource` The light source is permanently installed and the end user no longer has any influence on light colour, rated luminous flux and rated power.

Basic data used for both types are combined in a common basic element `LightSourceBase`.

## Location in XSD

![LightSources in XSD](/img/docs/structure/lightsources-hierarchy.webp)

## Optional type
![Optional light source types](/img/docs/structure/lightsources-optionaltype.webp)


## XSD description LightSourceBase
![LightSourceBase](/img/docs/structure/lightsources-base.webp)



## XSD description changeable light sources
![Changeable light sources](/img/docs/structure/lightsources-changeable.webp)

## XSD description fixed light sources
![Changeable light sources](/img/docs/structure/lightsources-fixed.webp)



