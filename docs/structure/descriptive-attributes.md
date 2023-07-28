---
title: Descriptive Attributes
sidebar_label: Descriptive Attributes
---

## Introduction

GLDF covers a lot of native data fields to carry information that is not only relevant for lighting and light planning purposes. We also included elements that enable you to describe your product for use cases other than light planning. These fields include but are not limited to information for electrical planning, logistics, warehouses, or sales purposes.

Even if you need to transport information that does not fit into a native field within GLDF, we've got you covered. For that purpose, we invented custom attributes. Custom attributes allow you to put virtually any information you can come up with into the GLDF and use it in your application or use case.

You can use Descriptive Properties in the meta section of the product or on a variant basis. Properties set in the meta section will apply to all variants. 

We split descriptive attributes into the following categories.

| Category | Description |
|----|----|
| Mechanical  | Describes the physical appearance and weight of a product |
| Electrical  |  Electrical properties of the product  |
| Emergency   |  Emergency characteristics of a product.  |
|  Marketing  |  Properties you would typically used for marketing purposes.  |
|  Operations and Maintenance  |  Properties affecting the operation and maintenance of the product, such as useful lifetime, etc.  |
|  Custom Properties  |  Any property you can describe that is not covered above.  |

<img src="/img/docs/structure/desciptiveattributes.webp" alt="Descriptive Attributes" width="561" />


## Mechanical

This XML schema describes the `Mechanical` element, which provides information about the mechanical attributes of a luminaire.

### Structure

<img src="/img/docs/structure/mechanical.webp" alt="Mechanical Attributes" width="435" />

### Example
```xml showLineNumbers
<Mechanical>
    <ProductSize>
        <Length>500</Length>
        <Width>200</Width>
        <Height>100</Height>
    </ProductSize>
    <ProductForm>Cuboid</ProductForm>
    <SealingMaterial>
        <Locale language="en">Polycarbonate</Locale>
        <Locale language="de">Polycarbonat</Locale>
    </SealingMaterial>
    <Adjustabilities>
        <Adjustability>Fixed</Adjustability>
        <Adjustability>Orientation</Adjustability>
    </Adjustabilities>
    <IKRating>IK08</IKRating>
    <ProtectiveAreas>
        <Area>Ball-impact proof</Area>
    </ProtectiveAreas>
    <Weight>3.5</Weight>
</Mechanical>
```

### ProductSize

The `ProductSize` element contains the dimensions of the luminaire in millimeters. It includes the following child elements:

- `Length` (type: `xs:int`): The length of the product along the C90/C270 axis.
- `Width` (type: `xs:int`): The width of the product along the C0/C180 axis.
- `Height` (type: `xs:int`): The height of the product.

### ProductForm

The `ProductForm` element describes the geometrical form of the luminaire. It has a string value, which can be one of the following enumeration values:

- Round
- Rounded
- Square
- Linear
- Areal
- Sphere
- Cuboid
- Cylinder
- Cone
- Special

### SealingMaterial

The `SealingMaterial` element represents the material of the luminaire's sealing (type: `Locale`).

### Adjustabilities

The `Adjustabilities` element contains a sequence of Adjustability elements, describing the possible `adjustabilities` of the luminaire's parts. The Adjustability element has a string value and can be one of the following enumeration values:

- Fixed
- Orientation
- Turn
- Tilt
- Cardanic
- Height adjustable
- User defined

### IKRating

The `IKRating` element describes the degree of protection provided by enclosures for electrical equipment against external mechanical impacts, according to IEC 62262:2002 and IEC 60068-2-75:1997. It has a string value and can be one of the following enumeration values:

- IK00
- IK01
- IK02
- IK03
- IK04
- IK05
- IK06
- IK07
- IK08
- IK09
- IK10
- IK10+

### ProtectiveAreas

The `ProtectiveAreas` element contains a sequence of Area elements, representing the possible usage of the luminaire in protection-relevant areas. The Area element has a string value and can be one of the following enumeration values:

- Cleanroom suitable
- Ball-impact proof
- Drive/Roll-over proof

### Weight

The `Weight` element describes the weight of the luminaire in kilograms, including the ballast but excluding the packaging (type: `xs:double`).


## Electrical 

The `Electrical` element, which provides information about the electrical attributes of a luminaire.

<img src="/img/docs/structure/electrical.webp" alt="Electrical Attributes" width="433" />

### Example
```xml showLineNumbers
<Electrical>
    <ClampingRange>
        <Lower>10.0</Lower>
        <Upper>25.0</Upper>
    </ClampingRange>
    <SwitchingCapacity>1E-1, W 1E0, unitless</SwitchingCapacity>
    <ElectricalSafetyClass>II</ElectricalSafetyClass>
    <IngressProtectionIPCode>IP67</IngressProtectionIPCode>
    <PowerFactor>0.95</PowerFactor>
    <ConstantLightOutput>true</ConstantLightOutput>
    <LightDistribution>Direct indirect</LightDistribution>
</Electrical>
```

### ClampingRange

The `ClampingRange` element contains the lower and upper limits of the clamping range in millimeters. It includes the following child elements:

- `Lower` (type: `xs:double`): The lower limit of the clamping range.
- `Upper` (type: `xs:double`): The upper limit of the clamping range.

### SwitchingCapacity

The `SwitchingCapacity` element describes the switching capacity of the sensor in terms of power and cos phi. It has a string value, for example: "1E-1, W 1E0, unitless" (type: xs:string).

### ElectricalSafetyClass

The `ElectricalSafetyClass` element indicates whether the electrical device has a protective earth connection or not. It has a string value, which can be one of the following enumeration values:

- 0
- I
- 0I
- II
- III

### IngressProtectionIPCode

The `IngressProtectionIPCode` element describes the degree of protection provided against intrusion, dust, accidental contact, and water by mechanical casings and electrical enclosures, according to IEC 60529:2014. It has a string value, which can be one of the following enumeration values:

- IP20
- IP21
- ...
- IP69
- IP69K

### PowerFactor

The `PowerFactor` element represents the ratio of the amount of active power to the apparent power at 100% load, according to IEC 80000-6:2008. It has a double value ranging from 0 to 1 (type: xs:double).

### ConstantLightOutput

The `ConstantLightOutpu` element determines whether the luminous flux stays constant over the declared lifetime. It has a boolean value (type: xs:boolean).

### LightDistribution

The `LightDistribution` element describes the projected pattern of the emitted light of the luminaire. It has a string value, which can be one of the following enumeration values:

- Laterally symmetrical narrow
- Laterally symmetrical medium
- Laterally symmetrical wide
- Symmetrical in each quadrant
- Symmetric about 0-180 plane
- Symmetric about 90-270 plane
- Asymmetrical
- Asymmetrical flood
- Asymmetrical wide flood
- Diffuse half spherical
- Diffuse full spherical
- Direct
- Indirect
- Direct indirect
- Other

## Emergency  

The `Emergency` element, which provides information about the emergency lighting attributes of a luminaire.

<img src="/img/docs/structure/emergency.webp" alt="Emergency Attributes" width="433" />

```xml showLineNumbers
<Emergency>
    <DurationTimeAndFlux>
        <Flux hours="1">500</Flux>
        <Flux hours="2">400</Flux>
        <Flux hours="3">300</Flux>
    </DurationTimeAndFlux>
    <DedicatedEmergencyLightingType>Exit Light</DedicatedEmergencyLightingType>
</Emergency>
```

### DurationTimeAndFlux

The `DurationTimeAndFlux` element represents the variation of emergency lighting output during usage time. It is presented as a table of emitted luminous flux during corresponding hours. This element contains the following child element:

- `Flux` (type: `xs:int`): The emitted luminous flux in lumens. This element can appear multiple times (maxOccurs="unbounded") and has an attribute hours (type: xs:int), which represents the duration time in hours.

### DedicatedEmergencyLightingType

The `DedicatedEmergencyLightingType` element describes the dedicated application field of the emergency lighting, which is meaningful for emergency luminaires only. It has a string value, which can be one of the following enumeration values:

- Exit Light
- Guide Light
- Evacuation Light
- Reference Light
- For Signage
- For Lighting

## Marketing 

The `Marketing` element contains descriptive attributes for marketing purposes.

<img src="/img/docs/structure/marketing.webp" alt="Marketing Attributes" width="407" />

### Example

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Marketing>
    <ListPrices>
        <ListPrice currency="USD">99.99</ListPrice>
        <ListPrice currency="EUR">89.99</ListPrice>
    </ListPrices>
    <HousingColors>
        <HousingColor ral="3016" lang="en">Coral Red</HousingColor>
        <HousingColor ral="1016" lang="en">Sulfur Yellow</HousingColor>
    </HousingColors>
    <Markets>
        <Region lang="en">North America</Region>
        <Region lang="en">Europe</Region>
    </Markets>
    <Hyperlinks>
        <Hyperlink lang="en" type="URL">https://www.example.com/product-info</Hyperlink>
    </Hyperlinks>
    <Designer>Jane Doe</Designer>
    <ApprovalMarks>
        <ApprovalMark>CE</ApprovalMark>
        <ApprovalMark>ENEC</ApprovalMark>
    </ApprovalMarks>
    <DesignAwards>
        <DesignAward>Red Dot Award</DesignAward>
        <DesignAward>iF Design Award</DesignAward>
    </DesignAwards>
    <Labels>
        <Label>CE</Label>
        <Label>GS</Label>
    </Labels>
    <Applications>
        <Application>Interior: Office</Application>
        <Application>Interior: Office: Group Offices</Application>
    </Applications>
</Marketing>
```

This XML example demonstrates the structure and various elements specified in the XSD, including list prices in different currencies, housing colors with RAL codes, target markets, hyperlinks, designer name, approval marks, design awards, labels, and fields of application.

### ListPrices

The `ListPrices` element is a container for a list of prices per unit.

- `ListPrice` (0 or more occurrences, `double`): List price with a maximum of 2 decimal places in a given currency.
  - currency (required, `xs:string`): Currency code according to ISO 4217, consisting of 3 characters (e.g., "USD").

### HousingColors

The `HousingColors` element contains housing colors of the luminaire.

- `HousingColor` (0 or more occurrences): The translatable name of the color of the housing and/or RAL number. Inherits from `Locale` for localized names.
    - `ral` (optional, int): RAL Classic color space system code, e.g., "RAL 3016" (coral-red). Must be a 4-digit number.

### Markets

The `Markets` element contains target markets.

 - `Region` (0 or more occurrences): The region can be defined by the user and should be translated to the applicable languages in the Locale element.
   - Inherits from `Locale` for localized names.

### Hyperlinks

The `Hyperlinks` element contains additional information online. Inherits from `Hyperlinks` type.

### Designer

`Designer` (optional, `xs:string`): Name of the designer of the luminaire.

### ApprovalMarks

The `ApprovalMarks` element contains approval marks of the product.

`ApprovalMark` (0 or more occurrences, `xs:string`): Approval marks of the product.

### DesignAwards

The `DesignAwards` element contains design awards of the product.

DesignAward (0 or more occurrences, `xs:string`): Luminaire design award, e.g., "Red Dot Award".

### Labels

The `Labels` element contains labels of the product.

`Label` (0 to 14 occurrences, `xs:string`): Label of the product. Must be one of the predefined enumeration values: 

- CE
- GS
- ENEC
- CCC
- VDE
- EAC
- D
- M
- MM
- F
- FF
- UL
- Handwarm
- IFS Food

### Applications

The `Applications` element contains fields of application for the luminaire.

`Application` (0 or more occurrences, `xs:string`): Field of application for the luminaire. Must be one of the predefined enumeration values.


## Operations and Maintenance 

This XML schema describes the `OperationsAndMaintenance` element, which provides information about the Operations and Maintenance attributes of a luminaire.

### Structure

<img src="/img/docs/structure/operationsandmaint.webp" alt="Operatoins and Maintenance Attributes" width="536" />

### Example

```xml showLineNumbers
<DescriptiveAttributes>
	<OperationsAndMaintenance>
		<UsefulLifeTimes>
			<UsefulLife>L00B00 5000h</UsefulLife>
		</UsefulLifeTimes>
		<MedianUsefulLifeTimes>
			<MedianUsefulLife>L00B00 5000h</MedianUsefulLife>
		</MedianUsefulLifeTimes>
		<OperatingTemperature>
			<Lower>-20</Lower>
			<Upper>40</Upper>
		</OperatingTemperature>
		<AmbientTemperature>
			<Lower>-20</Lower>
			<Upper>40</Upper>
		</AmbientTemperature>
		<RatedAmbientTemperature>25</RatedAmbientTemperature>
		<ATEX>
			<Directives>
				<Directive>ATEX</Directive>
			</Directives>
			<Classes>
				<Class>I</Class>
			</Classes>
			<Divisions>
				<Division>1</Division>
			</Divisions>
			<DivisionGroups/>
			<Zones>
				<Gas>
					<Zone>0</Zone>
				</Gas>
			</Zones>
			<ZoneGroups>
				<Gas>
					<Group>IIA</Group>
				</Gas>
			</ZoneGroups>
			<MaximumSurfaceTemperature>90°C</MaximumSurfaceTemperature>
			<TemperatureClasses>
				<TemperatureClass>T4</TemperatureClass>
			</TemperatureClasses>
			<ExCodes>
				<ExCode>eb</ExCode>
			</ExCodes>
			<EquipmentProtectionLevels>
				<EquipmentProtectionLevel>Gb</EquipmentProtectionLevel>
			</EquipmentProtectionLevels>
			<EquipmentGroups>
				<EquipmentGroup>II</EquipmentGroup>
			</EquipmentGroups>
			<EquipmentCategories>
				<EquipmentCategory>2G</EquipmentCategory>
			</EquipmentCategories>
			<Atmospheres>
				<Atmosphere>G</Atmosphere>
			</Atmospheres>
			<Groups>
				<Group>IIB</Group>
			</Groups>
		</ATEX>
		<AcousticAbsorptionRates>
			<AbsorptionRate hertz="1000">0.1</AbsorptionRate>
		</AcousticAbsorptionRates>
	</OperationsAndMaintenance>
</DescriptiveAttributes>
```

### UsefulLifeTimes
Useful lifetimes of the luminaire with declaration of Lx, By and ambient temperature. E.g. L80B50 50000h 25°C

- `UsefulLife` (1 or more occurrences, `xs:string`): Single useful lifetime of the luminaire with declaration of Lx, By and ambient temperature. E.g. L80B50 50000h 25°C

### MedianUsefulLifeTimes

`MedianUsefulLifeTimes`. Time during which 50% (B50) of a population of operating LED modules of the same type have parametrically failed to provide at least the percentage Lx of the initial luminous flux.
Recommend fixed time values are 35k, 50k, 75k or 100k hours (depending on application). E.g. L80B50 75000h 25°C It contains the following elements:

- `MedianUsefulLife` (1 or more occurrences, `xs:string`):
Single median useful lifetime during which 50% (B50) of a population of operating LED modules of the same type have parametrically failed to provide at least the percentage Lx of the initial luminous flux.
Recommend fixed time values are 35k, 50k, 75k or 100k hours (depending on application). E.g. L80B50 75000h 25°C

### OperatingTemperature
`OperatingTemperature` Operating range defined by a minimum and maximum temperature, at which the luminaire operates normally

#### TemperatureRange 
- `Lower` (`xs:int`): Lower inclusive limit of the temperature (Unit: celsius)
- `Upper` (`xs:int`): Upper inclusive limit of the temperature (Unit: celsius)

### AmbientTemperature
`AmbientTemperature` is the Recommended ambient temperature range

#### TemperatureRange
- `Lower` (`xs:int`): Lower inclusive limit of the temperature (Unit: celsius)
- `Upper` (`xs:int`): Upper inclusive limit of the temperature (Unit: celsius)

### RatedAmbientTemperature
`RatedAmbientTemperature` (1 occurrence `xs:int`): Rated ambient performance temperature. It's the highest ambient temperature around the luminaire related to a rated performance of the luminaire under normal operating conditions (Unit: celsius)

### ATEX
Specifies whether the fitting is intended for installation in an explosive environment. See ATEX directive 2014/34/EU


#### Directives
Hazardous area classification `directives`. E.g. European Union’s ATEX Directive, U.S. National Electrical Code (NEC) or Canadian Electrical Code (CEC).

The `Directives` element has a complex type that contains a sequence of one or more Directive elements.

It Contains `Directive` elements.
 - The maximum occurrence of Directive element is 4.
    Directive (`xs:string`) Hazardous area classification directive
    - The allowed values are "ATEX", "IECEx", "CEC", and "NEC".


#### Classes
  `Classes` Classification of substances. Gas, Dust or Fibers/Flyings
  Contains:
  - `Class` (`xs:string`) Posssible Enumerations:
    - I
    - II
    - III

#### Divisions
  `Divisions` Division classifications. Corresponds to zones as follows: Zone 0|1 > Division 1. Zone 2 > Division 2
  - Contains 1 or 2 `Division` Elements
  - Enumtetions (`xs:string`)
    - 1
    - 2

#### DivisionGroups

`DivisionGroups` Hazardous atmosphere category groups A-G

  Contains `Gas`: Gas, fog, steam zones contains:
  - `Group` (`xs:string`): Division group A,B,C,D
    - Enumeration values:
    - Value: A
    - Value: B
    - Value: C
    - Value: D

  `Dust`  Dust zones

  Contains `Group` (`xs:string`): Division group E,F,G
  
  Enumeration values:
  - Value: E
  - Value: F
  - Value: G

#### Zones
`Zones` Classification of possible hazardous zones contains

`Gas`: Gas, fog, steam zones Contains

`Zone` (`xs:string`): Zone 0, 1, 2
- Enumerations:
- 0
- 1
- 2

`Dust`: Dust zones contains
`Zone` (`xs:string`): Zone 20, 21, 22
- Enumerations:
- 20
- 21
- 22

#### ZoneGroups

`ZoneGroups` Classification of possible hazardous zone groups cotains

- `Gas`: Gas, fog, steam zones contins
  - Group: Group IIC, IIB + H2, IIB, IIA
   - Enumeration:
   - IIC
   - IIB + H2
   - IIB
   - IIA

- `Dust`: Dust zones
 - `Group`: Group IIIC, IIIB, IIIA
   - Enumeration:
   - IIIC
   - IIIB
   - IIIA

#### MaximumSurfaceTemperature 
`MaximumSurfaceTemperature` (`xs:string`): Maximum temperature of a surface that can be reached by the ex atmosphere

#### TemperatureClasses
`TemperatureClasses`: Temperature classifications. E.g. T3 lower/equal 300°C Contains
- `TemperatureClass`:  Temperature classification
  - Enumeration:
  - T1
  - T2
  - T2A
  - T2B
  - T2C
  - T2D
  - T3
  - T3A
  - T3B
  - T3C
  - T4
  - T4A
  - T5
  - T6

#### ExCodes
`xCodes`: Protection against the occurrence of an ignition source Contains
- `ExCode` (`xs:string`): Type of protection short code
  - Enumeration:
  - da
  - db
  - dc
  - eb
  - ec
  - ia
  - ib
  - ic
  - ma
  - mb
  - mc
  - nC
  - nR
  - ob
  - oc
  - op is
  - op pr
  - op sh
  - pxb
  - pyb
  - pyc
  - pzc
  - q
  - ta
  - tb
  - tc

#### EquipmentProtectionLevels
`EquipmentProtectionLevels`: Equipment Protection Level EPL. "M" Mining - "G" Gas - "D" Dust and respective protection level. Contains
 - `EquipmentProtectionLevel` (`xs:string`): Equipment protection level
  - Enumeration:
  - Ga
  - Gb
  - Gc
  - Da
  - Db
  - Dc
  - Ma
  - Mb

#### EquipmentGroups

`EquipmentGroups` Equipment Groups. Defines if the equipment can be used under ground (mining) or above ground explosive areas. Contains
 - `EquipmentGroup` (`xs:string`): Possible hazardous area
  - Enumeration:
  - I
  - II

#### EquipmentCategories
`EquipmentCategories` Defines in which zones the equipment can be used. With protection level from normal to high. Contsains:
- `EquipmentCategory` (`xs:string`): Possible equipment hazardous zone. Mining, Gas, Dust and corresponding protection level
  - Enumerations:
  - M1
  - M2
  - 1G
  - 2G
  - 3G
  - 1D
  - 2D
  - 3D

#### Atmospheres
`Atmospheres` Atmosphere classification. Contains:
`Atmosphere` (`xs:string`): Gas, Dust
 - Enumeration:
 - G
 - D

#### Groups
`Groups` (`xs:string`): Explosion groups (I Mining, II Gas, III Dust) and sub-group classification
Enumeration Values:
 - I
 - II
 - IIA
 - IIB
 - IIC
 - III
 - IIIA
 - IIIB
 - IIIC


### AcousticAbsorptionRates
`AcousticAbsorptionRates`: Sound absorption coefficient (ISO 354:2003), depending on frequencies in the human hearable range

Contains:

`AbsorptionRate` (`xs:double`): Documentation: Absorption coefficient. Must be a value between 0 (no absorption) and 1 (complete absorption)

- Attribute `hertz` (`xs:int`, required, MinInclusive: 0): Frequency (Unit: hertz)

## Custom Properties

<img src="/img/docs/structure/customproperties.webp" alt="Custom Properties Attributes" width="536" />   

### Example

```xml showLineNumbers
<CustomProperties>
	<Property id="p1">
		<Name>
			<Locale language="en">custom name</Locale>
		</Name>
		<PropertySource>source</PropertySource>
		<Value>5</Value>
	</Property>
	<Property id="p2">
		<Name>
			<Locale language="en">custom name 2</Locale>
		</Name>
		<PropertySource>source</PropertySource>
		<FileReference fileId="f1">file 1</FileReference>
	</Property>
</CustomProperties>
```

`CustomProperties`: can hold additional information that may be use-case-specific and will not be parsed by the Relux or DIAL parsers.

`CustomProperties` hold a list of the element `Property` with unlimited Elements.

`Property` Contains:

- Attribute `id` (`xs:string`). Id may refer to a customer based internal id system. If no Id is available, use a placeholder like a number
- `Name` Element holding a Sequence of type `Locale`: Meaningful name of the property
- `PropertySource` (`xs:string`, optional): Property source, e.g. standard name like ISO, CIE or DIN. Or Identity Server key
- Either 
  - `Value` (`xs:string`): Value of the property
  - FileReference
    - Attribute: fileId (`xs:NCName`): Id reference to a `File` element defined under GeneralDefinitions/Files