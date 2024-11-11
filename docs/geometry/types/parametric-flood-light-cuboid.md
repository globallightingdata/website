---
title: Floodlight Cuboid
sidebar_label: Floodlight Cuboid
---

## Description

![Floodlight Cuboid](/img/docs/geometry/parametric/flood-light-cuboid.webp)

A spotlight with a cuboid-shaped luminous head mounted on a bracket attached to a cubic base plate.

- **Dimensions**: Adjust the size of the luminaire by setting the `Width`, `Length`, and `Height`.
- **Luminous Features**:
  - **LuminousWidth** and **LuminousLength**: Define the size of the main luminous surfaces.
  - **LuminousHeight** or **ReflectorDepth** *(optional)*:
    - **LuminousHeight**: Describes how far the luminous part protrudes from the housing.
    - **ReflectorDepth**: Describes how far the luminous part is recessed into the housing.
- **Bracket Connection**:
  - The distance from the connector of the bracket to the luminaire is equal to the `Height` of the luminaire head.
  - The length of the connection from the base surface to the bracket is 10% of the `Height`.
- **Base Dimensions** *(optional)*: Modify the size of the base plate using `BaseWidth`, `BaseLength`, and `BaseHeight`.
  - **BaseWidth** and **BaseLength**: Determine the footprint of the base plate.
  - **BaseHeight**: Sets the height of the base plate.

**Note**: The pole itself is **not modeled** within this luminaire configuration.

## Parameters

| Parameter        | Type   | Explanation                                                                                     |
| ---------------- | :----: | :---------------------------------------------------------------------------------------------: |
| Width            | int    | Base width of the luminaire in millimeters (mm).                                                |
| Length           | int    | Base length of the luminaire in millimeters (mm).                                               |
| Height           | int    | Height of the luminaire head in millimeters (mm).                                               |
| LuminousWidth    | int    | Width of the luminous surfaces in millimeters (mm).                                              |
| LuminousLength   | int    | Length of the luminous surfaces in millimeters (mm).                                             |
| LuminousHeight   | int    | Extent to which the luminous part protrudes from the housing *(optional)* (mm).                  |
| ReflectorDepth   | int    | Extent to which the luminous part is recessed into the housing *(optional)* (mm).                |
| TotalHeight      | int    | Overall height of the luminaire including the bracket in millimeters (mm) *(optional)*.         |
| BaseWidth        | int    | Width of the base plate in millimeters (mm) *(optional)*.                                       |
| BaseLength       | int    | Length of the base plate in millimeters (mm) *(optional)*.                                      |
| BaseHeight       | int    | Height of the base plate in millimeters (mm) *(optional)*.                                      |

## XSD

```xml
<xs:element name="FloodLightCuboid">
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
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D>
  <FloodLightCuboid>
    <Width>400</Width>
    <Length>300</Length>
    <Height>80</Height>
    <LuminousWidth>380</LuminousWidth>
    <LuminousLength>280</LuminousLength>
    <LuminousHeight>30</LuminousHeight>
    <TotalHeight>150</TotalHeight>
  </FloodLightCuboid>
</P3D>
```