---
title: Bollard Side
sidebar_label: Bollard Side
---

## Description

![Bollard Side](/img/docs/geometry/parametric/bollard-side.webp)

`BollardSide` is a cylinder-shaped bollard with luminous surfaces positioned around the model. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire head, not including the stand.

- **Height**: Sets the height of the luminaire head.
- **TotalHeight**: Defines the overall height of the entire model, including the stand. The stand height is calculated as `TotalHeight` minus the luminaire `Height`. The stand is always centered within the luminaire.
- **Width** and **Length**: Determine the base dimensions of the bollard.
- **LuminousWidth** and **LuminousLength**: Define the size of the luminous surfaces.
- **LuminousHeight** or **ReflectorDepth**:
  - **LuminousHeight**: Describes how far the luminous part sticks out of the housing.
  - **ReflectorDepth**: Describes how far the luminous part is recessed into the housing.
- **C0**, **C90**, **C180**, **C270**:
  - These parameters define the placement of luminous surfaces around the bollard.
  - A value greater than zero indicates the presence of a luminous surface in that direction.
  - The distance of the luminous surface from the main dimension is 2% of the corresponding measurement.
- **Type**: Defines the placement and growth direction of light emitters:
  - **Direct**: LEO and LES are placed at the bottom center of the luminaire. All four sides grow upwards with `LuminousHeight`.
  - **Indirect**: LEO and LES are placed at the top center of the luminaire. All four sides grow downwards with `LuminousHeight`.
  - **DirectIndirect**: LEO is placed in the center of the luminaire. LES are centered on the top and bottom surfaces. If `LuminousHeight` > 0, LES are present on all four surfaces.

## Parameters

| Parameter        | Type    | Explanation                                                                                      |
| ---------------- | :-----: | :------------------------------------------------------------------------------------------------: |
| Width            | int     | Value in mm                                                                                      |
| Length           | int     | Value in mm                                                                                      |
| Height           | int     | Value in mm                                                                                      |
| LuminousWidth    | int     | Value in mm                                                                                      |
| LuminousLength   | int     | Value in mm                                                                                      |
| LuminousHeight   | int     | Value in mm (describes how far the luminous part sticks out of the housing)                       |
| ReflectorDepth   | int     | Value in mm (describes how far the luminous part is recessed into the housing)                     |
| TotalHeight      | int     | Value in mm                                                                                      |
| C0               | int     | Value in mm (0 means no luminous surface at C0 direction)                                         |
| C90              | int     | Value in mm (0 means no luminous surface at C90 direction)                                        |
| C180             | int     | Value in mm (0 means no luminous surface at C180 direction)                                       |
| C270             | int     | Value in mm (0 means no luminous surface at C270 direction)                                       |
| Type             | string  | Direct, Indirect, DirectIndirect                                                                  |
| HousingColor     | string  | 4 digit RAL color code                                                                            |

## XSD

```xml
<xs:element name="BollardSide">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:choice>
        <xs:element name="LuminousHeight" type="xs:int"/>
        <xs:element name="ReflectorDepth" type="xs:int"/>
      </xs:choice>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="HousingColor" minOccurs="0">
        <xs:complexType>
          <xs:attribute name="ral">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:pattern value="[1-9][0-9]{3}"/>
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D filename="BollardSide">
  <BollardSide>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>30</LuminousLength>
    <LuminousHeight>100</LuminousHeight>
    <TotalHeight>650</TotalHeight>
    <HousingColor ral="9005"/> 
  </BollardSide>
</P3D>
```
