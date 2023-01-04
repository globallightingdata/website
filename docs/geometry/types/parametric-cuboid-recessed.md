---
title: Recessed Cuboid
sidebar_label: Recessed Cuboid
---

## Description

![Recessed Cuboid](/img/docs/geometry/parametric/recessed-cuboid.webp)

The Recessed Cuboid is a cube-shaped recessed luminaire.
Width, length, and height describe the total size of the entire luminaire.
Luminous width, length, and height describe the dimensions of the luminous surfaces. The height describes how far the luminous part sticks out of the mounting surface. Top dimensions are by default 80% of the lower dimensions.

| Parameter      | Type |      Explanation       |
| -------------- | :--: | :--------------------: |
| Width          | int  |      value in mm       |
| Length         | int  |      value in mm       |
| Height         | int  |      value in mm       |
| LuminousWidth  | int  |      value in mm       |
| LuminousLength | int  |      value in mm       |
| LuminousHeight | int  |      value in mm       |
| TopWidth       | int  |      value in mm       |
| TopLength      | int  |      value in mm       |
| Mounting       | int  | Ceiling, Wall or Floor |

## XSD

    <xs:element name="RecessedCuboid">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="Width" type="xs:int"/>
          <xs:element name="Length" type="xs:int"/>
          <xs:element name="Height" type="xs:int"/>
          <xs:element name="LuminousWidth" type="xs:int"/>
          <xs:element name="LuminousLength" type="xs:int"/>
          <xs:element name="LuminousHeight" type="xs:int"/>
          <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>
          <xs:element name="TopLength" type="xs:int" minOccurs="0"/>
          <xs:element name="Mounting">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:enumeration value="Ceiling"/>
                <xs:enumeration value="Wall"/>
                <xs:enumeration value="Floor"/>
              </xs:restriction>
            </xs:simpleType>
          </xs:element>
        </xs:sequence>
      </xs:complexType>
    </xs:element>

## XML

    <P3D>
      <RecessedCuboid>
        <Width>80</Width>
        <Length>80</Length>
        <Height>80</Height>
        <LuminousWidth>70</LuminousWidth>
        <LuminousLength>70</LuminousLength>
        <LuminousHeight>70</LuminousHeight>
        <Mounting>Ceiling</Mounting>
      </RecessedCuboid>
    </P3D>
