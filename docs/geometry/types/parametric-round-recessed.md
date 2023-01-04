---
title: Recessed Round
sidebar_label: Recessed Round
---

## Description

![Recessed Round](/img/docs/geometry/parametric/recessed-round.webp)

Round recessed luminaire.
The diameter indicates the widest part of the luminaire.
The height describes the total height, including the recessed and protruding parts of the luminaire.
Luminous diameter describes the diameter of the illuminated surface.
The top diameter is, by default, 80% of the total diameter and describes the diameter of the recessed part.
LuminousHeight describes how far the luminaire protrudes from the mounting surface.
The luminaire can be mounted on ceilings, walls, or floors.

| Parameter        | Type |      Explanation       |
| ---------------- | :--: | :--------------------: |
| Diameter         | int  |      value in mm       |
| Height           | int  |      value in mm       |
| LuminousDiameter | int  |      value in mm       |
| TopDiameter      | int  |      value in mm       |
| LuminousHeight   | int  |      value in mm       |
| Mounting         | int  | Ceiling, Wall or Floor |

## XSD

    <xs:element name="RecessedRound">
    	<xs:complexType>
    	    <xs:sequence>
    			<xs:element name="Diameter" type="xs:int"/>
    				<xs:element name="Height" type="xs:int"/>
    				<xs:element name="LuminousDiameter" type="xs:int"/>
    				<xs:element name="TopDiameter" type="xs:int" minOccurs="0">
    				<xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
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
        <RecessedRound>
            <Diameter>50</Diameter>
            <Height>50</Height>
            <LuminousDiameter>40</LuminousDiameter>
            <TopDiameter>40</TopDiameter>
            <LuminousHeight>10</LuminousHeight>
            <Mounting>Ceiling</Mounting>
        </RecessedRound>
    </P3D>

---
