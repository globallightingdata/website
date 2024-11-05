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
      <xs:element name="C0" type="xs:int" minOccurs="0"/>
      <xs:element name="C90" type="xs:int" minOccurs="0"/>
      <xs:element name="C180" type="xs:int" minOccurs="0"/>
      <xs:element name="C270" type="xs:int" minOccurs="0"/>
      <xs:element name="Type" minOccurs="0">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Direct"/>
            <xs:enumeration value="Indirect"/>
            <xs:enumeration value="DirectIndirect"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example with LuminousHeight and Type set to Direct

```xml
<P3D>
  <BollardSide>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <LuminousHeight>100</LuminousHeight>
    <TotalHeight>650</TotalHeight>
    <C0>20</C0>
    <Type>Direct</Type>
  </BollardSide>
</P3D>
```

### Example with ReflectorDepth and Type set to Indirect

```xml
<P3D>
  <BollardSide>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <ReflectorDepth>30</ReflectorDepth>
    <TotalHeight>650</TotalHeight>
    <C90>20</C90>
    <Type>Indirect</Type>
  </BollardSide>
</P3D>
```

### Example with LuminousHeight and Type set to DirectIndirect

```xml
<P3D>
  <BollardSide>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <LuminousHeight>100</LuminousHeight>
    <TotalHeight>650</TotalHeight>
    <C0>20</C0>
    <C90>20</C90>
    <C180>20</C180>
    <C270>20</C270>
    <Type>DirectIndirect</Type>
  </BollardSide>
</P3D>
```