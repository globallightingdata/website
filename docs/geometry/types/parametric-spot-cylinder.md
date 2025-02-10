---
title: Spot Cylinder
sidebar_label: Spot Cylinder
---

## Description

![Spot Cylinder](/img/docs/geometry/parametric/spot-cylinder.webp)

A spotlight in cylinder shape mounted on a bracket attached to a plate.

- `Diameter` and `Height`: Adjust the dimensions of the luminaire.
- `LuminousDiameter`: Defines the diameter of the illuminated surface.
- `TotalHeight`: Affects the size of the bracket.
- `BaseDiameter`: Changes the size of the plate *(optional)*.
- `BaseHeight`: Changes the height of the plate *(optional)*.
- The distance from the connector of the bracket to the luminaire is equal to the `Height`.
- The length of the connection from the base surface to the bracket is half of the `Height`.
- Optionally, `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, `FileName` can be provided (without an extension).

## Parameters

| Parameter         | Type   | Explanation                                                    |
| ----------------- | :----: | -------------------------------------------------------------- |
| Diameter          | int    | Value in mm                                                    |
| Height            | int    | Value in mm                                                    |
| LuminousDiameter  | int    | Value in mm                                                    |
| TotalHeight       | int    | Value in mm                                                    |
| BaseDiameter      | int    | Value in mm *(optional)*                                       |
| BaseHeight        | int    | Value in mm *(optional)*                                       |
| HousingColor      | string | 4 digit RAL color code *(optional)*                            |
| FileName          | string | Optional file name (without an extension) *(optional)*         |

## XSD

```xml
<xs:element name="SpotCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TotalHeight" type="xs:int"/>
      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>
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
<P3D filename="SpotCylinder">
  <SpotCylinder>
    <Diameter>80</Diameter>
    <Height>100</Height>
    <LuminousDiameter>70</LuminousDiameter>
    <TotalHeight>140</TotalHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </SpotCylinder>
</P3D>
```
