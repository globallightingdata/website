---
title: Wall Triangular
sidebar_label: Wall Triangular
---

## Description

![Wall Triangular](/img/docs/geometry/parametric/wall-triangular.webp)

Triangular-shaped wall-mounted luminaire. It can be direct, indirect, or direct and indirect. Width, Length, and Height will set the dimensions of the bounding box. Luminous Width, LuminousLength, and LuminousHeight set the dimensions of the main luminous output.

Both sides have the same length. Lumious surfaces have the same size.

| Parameter      | Type |           Explanation            |
| -------------- | :--: | :------------------------------: |
| Width          | int  |           value in mm            |
| Length         | int  |           value in mm            |
| Height         | int  |           value in mm            |
| LuminousWidth  | int  |           value in mm            |
| LuminousLength | int  |           value in mm            |
| LuminousHeight | int  |           value in mm            |
| Type           | int  | Direct, Indirect, DirectIndirect |

## XSD

    <xs:element name="WallTriangular">
    <xs:complexType>
    	<xs:sequence>
    	<xs:element name="Width" type="xs:int"/>
    	<xs:element name="Length" type="xs:int"/>
    	<xs:element name="Height" type="xs:int"/>
    	<xs:element name="LuminousWidth" type="xs:int"/>
    	<xs:element name="LuminousLength" type="xs:int"/>
    	<xs:element name="LuminousHeight" type="xs:int"/>
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

## XML

    <P3D>
    	<WallTriangular>
    		<Width>300</Width>
    		<Length>200</Length>
    		<Height>200</Height>
    		<LuminousWidth>50</LuminousWidth>
    		<LuminousLength>50</LuminousLength>
    		<LuminousHeight>20</LuminousHeight>
    	</WallTriangular>
    </P3D>
