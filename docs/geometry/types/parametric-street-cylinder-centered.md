---
title: Street Cylinder Centered
sidebar_label: Street Cylinder Centered
---

## Description

![Street Cylinder Centered](/img/docs/geometry/parametric/street-cylinder-centered.webp)

A classic street light featuring a cylinder-shaped luminous head centered on the pole.

- `Diameter` and `Height`: Define the overall dimensions of the luminaire's housing.
- `TopDiameter`: Allows for skewing the cylinder by adjusting the diameter at the top.
- `LuminousDiameter`: Sets the size of the main luminous surface.
- `TopLuminousDiameter` (optional): Defines the size of the luminous surface at the top, allowing for additional design flexibility.
- `LuminousHeight` or `ReflectorDepth` (optional):
  - `LuminousHeight`: Describes how far the luminous part sticks out from the housing.
  - `ReflectorDepth`: Describes how far the luminous part is recessed into the housing.
- `Height` (optional): Sets the height of the luminaire head separately from the overall model.

**Note**: The pole itself is not modeled within this luminaire configuration.

## Parameters

| Parameter           | Type   | Explanation                                                       |
| ------------------- | :----: | :----------------------------------------------------------------: |
| Diameter            | int    | Base diameter of the luminaire in millimeters (mm).               |
| TopDiameter         | int    | Diameter at the top of the luminaire, allowing for skewing.       |
| LuminousDiameter    | int    | Diameter of the main luminous surface in millimeters (mm).        |
| TopLuminousDiameter | int    | Diameter of the luminous surface at the top (optional).           |
| LuminousHeight      | int    | Extent to which the luminous part protrudes from the housing (mm).|
| ReflectorDepth      | int    | Extent to which the luminous part is recessed into the housing (mm).|
| Height              | int    | Height of the luminaire head in millimeters (mm) (optional).      |
| TotalHeight         | int    | Overall height of the luminaire including the stand (mm) (optional).|
| HousingColor        | string | 4 digit RAL color code                                            |

## XSD

```xml
<xs:element name="StreetCylinderCentered">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TopLuminousDiameter" type="xs:int" minOccurs="0"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
      </xs:choice>
      <xs:element name="Height" type="xs:int" minOccurs="0"/>
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
<P3D filename="StreetCylinderCentered">
  <StreetCylinderCentered>
    <Diameter>80</Diameter>
    <TopDiameter>700</TopDiameter>
    <LuminousDiameter>80</LuminousDiameter>
    <TopLuminousDiameter>600</TopLuminousDiameter>
    <LuminousHeight>400</LuminousHeight>
    <Height>500</Height>
    <HousingColor ral="9005"/> 
  </StreetCylinderCentered>
</P3D>
```