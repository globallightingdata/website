---
title: Bollard Side
sidebar_label: Bollard Side
---

## Description

![Bollard Side](/img/docs/geometry/parametric/bollard-side.webp)

`BollardSide` is a cylinder-shaped bollard with luminous surfaces positioned around the model. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire head, not including the stand.

- `Height` Sets the height of the luminaire head.
- `TotalHeight` Defines the overall height of the entire model, including the stand. The stand height is calculated as `TotalHeight` minus `Height`. The stand is always centered within the luminaire.
- `Width` and `Length`: Determine the base dimensions of the bollard.
- `LuminousWidth` and `LuminousLength`: Define the size of the luminous surfaces.
- `LuminousHeight` or `ReflectorDepth`:
  - `LuminousHeight`: Describes how far the luminous part sticks out of the housing.
  - `ReflectorDepth`: Describes how far the luminous part is recessed into the housing.
- Optionally, a `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, a `FileName` can be provided.

## Parameters

| Parameter                           |  Type   | Explanation                                                                                           |
| ----------------------------------- | :-----: | -----------------------------------------------------------------------------------------------------: |
| **Width**                           | int     | Value in mm.                                                                                          |
| **Length**                          | int     | Value in mm.                                                                                          |
| **Height**                          | int     | Value in mm. Sets the height of the luminaire head.                                                   |
| **LuminousWidth**                   | int     | Value in mm. Defines the width of the luminous surfaces.                                              |
| **LuminousLength**                  | int     | Value in mm. Defines the length of the luminous surfaces.                                             |
| **LuminousHeight** / **ReflectorDepth** | int     | Value in mm. Choose one to define how the luminous part interacts with the housing.                     |
| **TotalHeight**                     | int     | Value in mm. Overall height including the stand.                                                      |
| **HousingColor**                    | string  | A 4-digit RAL color code matching the pattern `[1-9][0-9]{3}` (optional).                               |
| **FileName**                        | string  | Optional file name.                                                                                     |

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
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="[1-9][0-9]{3}"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="FileName" type="xs:string" minOccurs="0"/>
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
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </BollardSide>
</P3D>
```
