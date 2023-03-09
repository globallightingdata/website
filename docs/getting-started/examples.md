---
title: GLDF Examples
sidebar_label: Examples
---

In this section, we will be showcasing example GLDF files. They represent real GLDFs that you can use for orientation purposes. All samples are available for download from the <a href="https://github.com/globallightingdata/examples" target="_bkank">GLDF Examples GitHub repository</a>.

The following examples will be covered.

- <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo" target="_blank">Minimal Geo.gldf</a>
- <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>
- <a href="https://github.com/globallightingdata/examples/tree/master/Philips%20SP542P" target="_blank">Philips SP542P</a>
- <a href="https://github.com/globallightingdata/examples/tree/master/SLV%20-%20Tria%202%20with%20sensor" target="_blank">SLV - Tria 2 with sensor</a>
- <a href="https://github.com/globallightingdata/examples/tree/master/Trilux%20Belviso%20S%20CDP" target="_blank">Trilux Belviso S CDP</a>
- <a href="https://github.com/globallightingdata/examples/tree/master/Zumtobel%20P-EVO%20R100L" target="_blank">Zumtobel P-EVO R100L</a>


## Minimal Geo

This example demonstrates very simple minimal GLDF file implementation with no complexity. 

Download the example here: <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo" target="_blank">Minimal Geo.gldf</a>

### Explanation

The setup of the file is very straightforward. It contains a simple 3d geometry, light emitter, and light source in the general definitions section with a minimum amount of meta information.

The file is referenced in line 16.

It also references a basic L3D file in the file definitions. The screenshot below shows that the 3d file contains only one light-emitting object named LEO, which we will reference later in the Geomtry part of the product.xml file.

<img src="/img/docs/getting-started/minimalgeor3d.webp" alt="Minimal Geo r3d model in editor" width="800" />

The following XML code references the single light-emitting object of the 3d file. See line 68.

### product.xml

```xml {16,68} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Philips Lighting</Manufacturer>
		<CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication>N/A</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
		<LicenseKeys>
			<LicenseKey application="RELUX">LicenseKey</LicenseKey>
		</LicenseKeys>
		<ReluxMemberId>LicenseKey</ReluxMemberId>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
			<File id="geometryFile" contentType="geo/l3d" type="localFileName">SP542P_SRD_L1480_U3_1_xLED66S_940_OC.l3d</File>
		</Files>
		<Photometries>
			<Photometry id="photometry01">
				<PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="lightSource01">
				<Name>
					<Locale language="de">LED</Locale>
				</Name>
				<RatedInputPower>47.5</RatedInputPower>
			</FixedLightSource>
		</LightSources>
		<Emitters>
			<Emitter id="emitter01">
				<FixedLightEmitter>
					<PhotometryReference photometryId="photometry01"/>
					<LightSourceReference fixedLightSourceId="lightSource01"/>
					<RatedLuminousFlux>6600</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
		</Emitters>
		<Geometries>
			<ModelGeometry id="geometry01">
				<GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>
			</ModelGeometry>
		</Geometries>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="de">SP542P</Locale>
			</ProductNumber>
			<Name>
				<Locale language="de">Pendelleuchten SP542P LED66S/940</Locale>
			</Name>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1">
				<Name>
					<Locale language="en">Variant 1</Locale>
				</Name>
				<Mountings>
					<Ceiling>
						<SurfaceMounted/>
					</Ceiling>				
				</Mountings>
				<Geometry>
					<ModelGeometryReference geometryId="geometry01">
					<EmitterReference emitterId="emitter01">
						<EmitterObjectExternalName>LEO</EmitterObjectExternalName>
					</EmitterReference>
				</ModelGeometryReference>
				</Geometry>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20Geo" target="_blank">Minimal Geo.gldf</a>

## Minimal LDC

This example demonstrates very simple minimal GLDF file implementation with no 3d geometry. The only file reference is the light distribution curve.

Download the example here: <a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>

### Explanation

The setup of the file is very straightforward. It contains no 3d geometry and only a simple light distribution curve.

There is only one file reference called ldtFile reference by one photometry called photometry01. 

There is one light source and one emitter. The emitter references the light source and the photometry.

The geometry has the simplest possible structure. It only contains the reference to the light emitter (line 55).

Because no geometry is defined, Relux and Dialux will use the LDT file to determine the geometry for their respective applications.

### product.xml

```xml {14-38,55} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Philips Lighting</Manufacturer>
		<CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication>N/A</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
		<LicenseKeys>
			<LicenseKey application="RELUX">LicenseKey</LicenseKey>
		</LicenseKeys>
		<ReluxMemberId>ReluxMemberId</ReluxMemberId>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
		</Files>
		<Photometries>
			<Photometry id="photometry01">
				<PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="lightSource01">
				<Name>
					<Locale language="de">LED</Locale>
				</Name>
				<RatedInputPower>47.5</RatedInputPower>
			</FixedLightSource>
		</LightSources>
		<Emitters>
			<Emitter id="emitter01">
				<FixedLightEmitter>
					<PhotometryReference photometryId="photometry01"/>
					<LightSourceReference fixedLightSourceId="lightSource01"/>
					<RatedLuminousFlux>6600</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
		</Emitters>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="de">SP542P</Locale>
			</ProductNumber>
			<Name>
				<Locale language="de">Pendelleuchten SP542P LED66S/940</Locale>
			</Name>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1">
				<Name>
					<Locale language="en">Variant 1</Locale>
				</Name>
				<Geometry>
					<EmitterReference emitterId="emitter01"></EmitterReference>
				</Geometry>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Minimal%20LDC" target="_blank">Minimal LDC.gldf</a>

## Philips SP542P

### Explanation

This example demonstrates a simple minimal GLDF implementation of the Philips SP542P product. It uses l3d geometry.

<img src="/img/docs/getting-started/sp542pproductimage.webp" alt="Philips SP542 Product Image"/>

<img src="/img/docs/getting-started/philips.webp" alt="Philips SP542 Relux Screenshot"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Philips</Manufacturer>
		<CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication>N/A</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">SP542P SRD L1480 U3 1 xLED66S_940 OC.ldt</File>
			<File id="geometryFile" contentType="geo/l3d" type="localFileName">SP542P_SRD_L1480_U3_1_xLED66S_940_OC.l3d</File>
			<File id="productImage" contentType="image/jpg" type="localFileName">910505100471_EU.de_DE.jpg</File>
		</Files>
		<Photometries>
			<Photometry id="photometry01">
				<PhotometryFileReference fileId="ldtFile"></PhotometryFileReference>
				<DescriptivePhotometry>
					<HalfPeakDivergence>
							<C0-C180>100</C0-C180>
							<C90-C270>100</C90-C270>
					</HalfPeakDivergence>
				</DescriptivePhotometry>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="lightSource01">
				<Name>
					<Locale language="de">LED</Locale>
				</Name>
				<RatedInputPower>47.5</RatedInputPower>
				<ColorInformation>
					<ColorRenderingIndex>90</ColorRenderingIndex>
					<CorrelatedColorTemperature>940</CorrelatedColorTemperature>
				</ColorInformation>
			</FixedLightSource>
		</LightSources>
		<ControlGears>
			<ControlGear id="controlGear01">
				<Name>
					<Locale language="de">Betriebsgerät 01</Locale>
				</Name>
				<Description>
					<Locale language="de">PSD [Elektronisches Betriebsgerät, DALI-regelbar]</Locale>
				</Description>
			</ControlGear>
		</ControlGears>
		<Emitters>
			<Emitter id="emitter01">
				<FixedLightEmitter>
					<PhotometryReference photometryId="photometry01"/>
					<LightSourceReference fixedLightSourceId="lightSource01"/>
					<RatedLuminousFlux>6600</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
		</Emitters>
		<Geometries>
			<ModelGeometry id="geometry01">
				<GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>
			</ModelGeometry>
		</Geometries>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="de">SP542P LED66S/940 PSD ACL SMT L1480 WH</Locale>
			</ProductNumber>
			<Name>
				<Locale language="de">TrueLevel, Pendelleuchten SP542P LED66S/940 PSD ACL SMT L1480 WH</Locale>
			</Name>
			<Description>
				<Locale language="de">Die Leuchten von heute müssen mit mehr glänzen als nur mit Licht. In Büroräumen
					muss die ideale Leuchte Energieeinsparungen mit sich bringen und auch in Zukunft
					verwendbar ein. Außerdem muss es möglich sein, sie mit Lichtregelsystemen zu
					verbinden. Natürlich sollte sie sich auch nahtlos in die Einrichtung der Büros
					einfügen. Philips TrueLevel erfüllt all diese Anforderungen und hat noch mehr zu
					bieten. TrueLevel basiert auf der überlegenen Lichttechnik der Philips TrueLine
					Produktserie für Büroräume und überzeugt mit hoher Effizienz, der besten
					normgerechten Bürobeleuchtung und der Möglichkeit der Einbindung in
					Lichtsysteme. Nicht zuletzt fügen sich die edlen TrueLevel Leuchten mit ihrem
					minimalistischen Design harmonisch in die Inneneinrichtung ein und werten diese als
					eigenes Designelement auf.</Locale>
				<Locale language="en">No translation available</Locale>
			</Description>
			<ProductSeries>
				<ProductSerie>
					<Name>
						<Locale language="en">Family 01</Locale>
						<Locale language="de">Familie 01</Locale>
					</Name>
				</ProductSerie>
				<ProductSerie>
					<Name>
						<Locale language="en">E2</Locale>
						<Locale language="de">D2</Locale>
					</Name>
				</ProductSerie>
			</ProductSeries>
			<Pictures>
				<Image imageType="Product Picture" fileId="productImage" />
			</Pictures>
			<DescriptiveAttributes>
				<Mechanical>
					<IKRating>IK01</IKRating>
				</Mechanical>
				<Electrical>
					<IngressProtectionIPCode>IP40</IngressProtectionIPCode>
					<PowerFactor>0.9</PowerFactor>
					<ConstantLightOutput>false</ConstantLightOutput>
				</Electrical>
			</DescriptiveAttributes>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1">
				<ProductNumber>
					<Locale language="de">Variant: SP542P LED66S/940 PSD ACL SMT L1480 WH</Locale>
				</ProductNumber>
				<Name>
					<Locale language="de">Variante 1</Locale>
					<Locale language="en">Variant 1</Locale>
				</Name>
				<Description>
					<Locale language="de">Keine Variantenbeschreibung vorhanden</Locale>
					<Locale language="en">No variant description available</Locale>
				</Description>
				<GTIN>11111111</GTIN>
				<Mountings>
					<Ceiling>
						<Pendant pendantLength="500"/>
					</Ceiling>				
				</Mountings>
				<Geometry>
					<ModelGeometryReference geometryId="geometry01">
					<EmitterReference emitterId="emitter01">
						<EmitterObjectExternalName>LEO</EmitterObjectExternalName>
					</EmitterReference>
				</ModelGeometryReference>
				</Geometry>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Philips%20SP542P" target="_blank">Philips SP542P</a>


## SLV - Tria 2 with sensor

### Explanation

This example demonstrates a GLDF file with an l3d model, two light outputs, and an integrated sensor. Everything is put together via the geometry node.

<img src="/img/docs/getting-started/slvprod.webp" alt="SLV NEW TRIA 2"/>

<img src="/img/docs/getting-started/slv3d.webp" alt="SLV NEW TRIA 2"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>SLV</Manufacturer>
		<CreationTimeCode>2021-05-25T14:40:00Z</CreationTimeCode>
		<CreatedWithApplication>Keyboard</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtnarrow" contentType="ldc/eulumdat" type="localFileName">narrow.ldt</File>
			<File id="ldtmiddle" contentType="ldc/eulumdat" type="localFileName">middle.ldt</File>
			<File id="ldtwide" contentType="ldc/eulumdat" type="localFileName">wide.ldt</File>
			<File id="geometryFile" contentType="geo/l3d" type="localFileName">example_007.l3d</File>
			<File id="productImage" contentType="image/png" type="localFileName">NEW TRIA 2.png</File>
			<File id="sensor" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>
		</Files>
		<Sensors>
			<Sensor id="sensor1">
				<SensorFileReference fileId="sensor"/>
			</Sensor>
		</Sensors>
		<Photometries>
			<Photometry id="LightEmitterNarrow">
				<PhotometryFileReference fileId="ldtnarrow"/>
				<DescriptivePhotometry>
					<LuminousEfficacy>89</LuminousEfficacy>
					<CIE-FluxCode>98 100 100 100 100</CIE-FluxCode>
				</DescriptivePhotometry>
			</Photometry>
			<Photometry id="LightEmitterMiddle">
				<PhotometryFileReference fileId="ldtmiddle"/>
				<DescriptivePhotometry>
					<LuminousEfficacy>96</LuminousEfficacy>
					<CIE-FluxCode>93 98 99 100 100</CIE-FluxCode>
				</DescriptivePhotometry>
			</Photometry>
			<Photometry id="LightEmitterWide">
				<PhotometryFileReference fileId="ldtwide"/>
				<DescriptivePhotometry>
					<LuminousEfficacy>96</LuminousEfficacy>
					<CIE-FluxCode>69 95 99 100 100</CIE-FluxCode>
				</DescriptivePhotometry>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="LightSource1">
				<Name>
					<Locale language="en">LED</Locale>
				</Name>
				<Description>
					<Locale language="en">LED module</Locale>
				</Description>
				<RatedInputPower>18</RatedInputPower>
				<ColorInformation>
					<ColorRenderingIndex>80</ColorRenderingIndex>
					<CorrelatedColorTemperature>4000</CorrelatedColorTemperature>
					<InitialColorTolerance>3 SDCM</InitialColorTolerance>
				</ColorInformation>
			</FixedLightSource>
			<FixedLightSource id="LightSource2">
				<Name>
					<Locale language="en">LED</Locale>
				</Name>
				<Description>
					<Locale language="en">LED module</Locale>
				</Description>
				<RatedInputPower>81</RatedInputPower>
				<ColorInformation>
					<ColorRenderingIndex>80</ColorRenderingIndex>
					<CorrelatedColorTemperature>5000</CorrelatedColorTemperature>
					<InitialColorTolerance>3 SDCM</InitialColorTolerance>
				</ColorInformation>
			</FixedLightSource>
			<FixedLightSource id="LightSource3">
				<Name>
					<Locale language="en">LED</Locale>
				</Name>
				<Description>
					<Locale language="en">LED module</Locale>
				</Description>
				<RatedInputPower>81</RatedInputPower>
				<ColorInformation>
					<ColorRenderingIndex>80</ColorRenderingIndex>
					<CorrelatedColorTemperature>3000</CorrelatedColorTemperature>
					<InitialColorTolerance>3 SDCM</InitialColorTolerance>
				</ColorInformation>
			</FixedLightSource>
		</LightSources>
		<ControlGears>
			<ControlGear id="ControlGear1">
				<Name>
					<Locale language="en">Control Gear1 1</Locale>
				</Name>
				<Description>
					<Locale language="en">Control Gear1 1</Locale>
				</Description>
			</ControlGear>
		</ControlGears>
		<!--<Equipments>
			<Equipment id="Equipment_narrow">
				<LightSourceReference lightSourceId="LightSource1"/>
				<ControlGearReference controlGearId="ControlGear1"/>
				<RatedInputPower>18</RatedInputPower>
				<RatedLuminousFlux>1600</RatedLuminousFlux>
			</Equipment>
			<Equipment id="Equipment_middle">
				<LightSourceReference lightSourceId="LightSource2"/>
				<ControlGearReference controlGearId="ControlGear1"/>
				<RatedInputPower>81</RatedInputPower>
				<RatedLuminousFlux>7800</RatedLuminousFlux>
			</Equipment>
			<Equipment id="Equipment_wide">
				<LightSourceReference lightSourceId="LightSource3"/>
				<ControlGearReference controlGearId="ControlGear1"/>
				<RatedInputPower>81</RatedInputPower>
				<RatedLuminousFlux>7800</RatedLuminousFlux>
			</Equipment>
			<Equipment id="Equipment_wide_emergency_combined">
				<LightSourceReference lightSourceId="LightSource3"/>
				<ControlGearReference controlGearId="ControlGear1"/>
				<RatedInputPower>81</RatedInputPower>
				<RatedLuminousFlux>7800</RatedLuminousFlux>
				<EmergencyRatedLuminousFlux>100</EmergencyRatedLuminousFlux>
			</Equipment>
			<Equipment id="Equipment_wide_emergency_only">
				<LightSourceReference lightSourceId="LightSource3"/>
				<ControlGearReference controlGearId="ControlGear1"/>
				<RatedInputPower>81</RatedInputPower>
				<RatedLuminousFlux>100</RatedLuminousFlux>
			</Equipment>
		</Equipments>-->
		<Emitters>
			<Emitter id="em-n-n">
				<FixedLightEmitter emergencyBehaviour="None">
					<PhotometryReference photometryId="LightEmitterNarrow"/>
					<LightSourceReference fixedLightSourceId="LightSource1"/>
					<RatedLuminousFlux>1600</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
			<Emitter id="em-m-n">
				<FixedLightEmitter emergencyBehaviour="None">
					<PhotometryReference photometryId="LightEmitterMiddle"/>
					<LightSourceReference fixedLightSourceId="LightSource2"/>
					<RatedLuminousFlux>7800</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
			<Emitter id="em-w-n">
				<FixedLightEmitter emergencyBehaviour="None">
					<PhotometryReference photometryId="LightEmitterWide"/>
					<LightSourceReference fixedLightSourceId="LightSource3"/>
					<RatedLuminousFlux>7800</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
			<Emitter id="em-w-c">
				<FixedLightEmitter emergencyBehaviour="Combined">
					<PhotometryReference photometryId="LightEmitterWide"/>
					<LightSourceReference fixedLightSourceId="LightSource3"/>
					<RatedLuminousFlux>7800</RatedLuminousFlux>
					<EmergencyRatedLuminousFlux>100</EmergencyRatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
			<Emitter id="em-w-o">
				<FixedLightEmitter emergencyBehaviour="EmergencyOnly">
					<PhotometryReference photometryId="LightEmitterWide"></PhotometryReference>
					<LightSourceReference fixedLightSourceId="LightSource3"></LightSourceReference>
					<RatedLuminousFlux>100</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
			<Emitter id="em-s">
				<Sensor sensorId="sensor1"/>
			</Emitter>
		</Emitters>
		<Geometries>
			<ModelGeometry id="ModelGeometry">
				<GeometryFileReference fileId="geometryFile" levelOfDetail="Medium"/>
			</ModelGeometry>
		</Geometries>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="en">111352</Locale>
			</ProductNumber>
			<Name>
				<Locale language="en">NEW TRIA 2</Locale>
			</Name>
			<Description>
				<Locale language="de">Einbauleuchte, zweiflammig, QR-C51, rechteckig, aluminium	gebürstet, max. 100W, inkl. Clipfedern</Locale>
				<Locale language="en">Recessed luminaire, two.....</Locale>
			</Description>
			<ProductSeries>
				<ProductSerie>
					<Name>
						<Locale language="en">TRIA</Locale>
					</Name>
					<Hyperlinks>
						<Hyperlink href="https://slv.com">Manufacturer URL</Hyperlink>
					</Hyperlinks>
				</ProductSerie>
			</ProductSeries>
			<Pictures>
				<Image fileId="productImage" imageType="Product Picture"/>
			</Pictures>
			<DescriptiveAttributes>
				<Electrical>
					<ElectricalSafetyClass>III</ElectricalSafetyClass>
					<IngressProtectionIPCode>IP20</IngressProtectionIPCode>
				</Electrical>
				<OperationsAndMaintenance>
					<MedianUsefulLifeTimes>
						<MedianUsefulLife>L80B50 70000h 25°C</MedianUsefulLife>
					</MedianUsefulLifeTimes>
				</OperationsAndMaintenance>
			</DescriptiveAttributes>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1_Combined_Emergency_and_no_emergency_and_no_sensor">
				<Name>
					<Locale language="en">comb Em / no Em / -</Locale>
				</Name>
				<Description>
					<Locale language="en">1st emitter combined emergency, 2nd emitter no emergency, no 3rd emitter</Locale>
				</Description>
				<Mountings>
					<Ceiling>
						<Recessed recessedDepth="11"/>
					</Ceiling>
				</Mountings>
				<Geometry>
					<ModelGeometryReference geometryId="ModelGeometry">
						<EmitterReference emitterId="em-n-n">
							<EmitterObjectExternalName>LEO0</EmitterObjectExternalName>
						</EmitterReference>
						<EmitterReference emitterId="em-w-c">
							<EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
						</EmitterReference>
					</ModelGeometryReference>
				</Geometry>
				<DescriptiveAttributes>
					<Mechanical>
						<Weight>0.379</Weight>
					</Mechanical>
				</DescriptiveAttributes>
			</Variant>
			<Variant id="variant2_no_Emergency_and_only_emergency_and_sensor">
				<Name>
					<Locale language="en">no Em / only Em / sens</Locale>
				</Name>
				<Description>
					<Locale language="en">1st emitter no emergency, 2nd emitter only emergency, 3rd emitter is a sensor</Locale>
				</Description>
				<Mountings>
					<Ceiling>
						<Recessed recessedDepth="11"/>
					</Ceiling>
				</Mountings>
				<Geometry>
					<ModelGeometryReference geometryId="ModelGeometry">
						<EmitterReference emitterId="em-m-n">
							<EmitterObjectExternalName>LEO0</EmitterObjectExternalName>
						</EmitterReference>
						<EmitterReference emitterId="em-w-o">
							<EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
						</EmitterReference>
						<EmitterReference emitterId="em-s">
							<EmitterObjectExternalName>Sensor</EmitterObjectExternalName>
						</EmitterReference>
					</ModelGeometryReference>
				</Geometry>
				<DescriptiveAttributes>
					<Mechanical>
						<Weight>0.479</Weight>
					</Mechanical>
				</DescriptiveAttributes>
			</Variant>
			<Variant id="variant2_no_Emergency_and_no_emergency_and_sensor">
				<Name>
					<Locale language="en">no Em / no Em / sens</Locale>
				</Name>
				<Description>
					<Locale language="en">1st emitter no emergency, 2nd emitter no emergency, 3rd emitter is a sensor</Locale>
				</Description>
				<Mountings>
					<Ceiling>
						<Recessed recessedDepth="11"/>
					</Ceiling>
				</Mountings>
				<Geometry>
					<ModelGeometryReference geometryId="ModelGeometry">
						<EmitterReference emitterId="em-m-n">
							<EmitterObjectExternalName>LEO0</EmitterObjectExternalName>
						</EmitterReference>
						<EmitterReference emitterId="em-w-n">
						<EmitterObjectExternalName>LEO1</EmitterObjectExternalName>
					</EmitterReference>
					<EmitterReference emitterId="em-s">
						<EmitterObjectExternalName>Sensor</EmitterObjectExternalName>
					</EmitterReference>
					</ModelGeometryReference>
				</Geometry>
				<DescriptiveAttributes>
					<Mechanical>
						<Weight>0.479</Weight>
					</Mechanical>
				</DescriptiveAttributes>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/SLV%20-%20Tria%202%20with%20sensor" target="_blank">SLV - Tria 2 with sensor</a>

## Trilux Belviso S CDP

### Explanation

Trilux Belviso is an example of a standing luminaire with two individual heads. The secondary light emitter can be adjusted by rotating it. Each light emitter has a different ldt file connected via the geometry node.

<img src="/img/docs/getting-started/triluxprod.webp" alt="Trilux Belviso S CDP Product Picture"/>

<img src="/img/docs/getting-started/triluxcad.webp" alt="Trilux Belviso S CDP Technical sketch"/>

<img src="/img/docs/getting-started/trilux3d.webp" alt="Trilux Belviso S CDP Relux Screenshot"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>TRILUX</Manufacturer>
		<CreationTimeCode>2021-01-25T14:40:00Z</CreationTimeCode>
		<CreatedWithApplication>Altova XMLSpy</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="ldtmain" contentType="ldc/eulumdat" type="localFileName">TX054020.ldt</File>
			<File id="ldtindirect" contentType="ldc/eulumdat" type="localFileName">TX054019.ldt</File>
			<File id="geometryFile" contentType="geo/l3d" type="localFileName">Belviso_S_CDP_LED9400nw_ETD_03_TOC_6437657_10123990_de.l3d</File>
			<File id="productImage" contentType="image/jpg" type="localFileName">Belviso_S_CDP_LED_03_AP_WEB.jpg</File>
		</Files>
		<Photometries>
			<Photometry id="PhotometryMain">
				<PhotometryFileReference fileId="ldtmain"></PhotometryFileReference>
				<DescriptivePhotometry>
					<CIE-FluxCode>64 89 97 100 100</CIE-FluxCode>
				</DescriptivePhotometry>
			</Photometry>
			<Photometry id="PhotometryIndirect">
				<PhotometryFileReference fileId="ldtindirect"></PhotometryFileReference>
				<DescriptivePhotometry>
					<CIE-FluxCode>0 0 0 0 100</CIE-FluxCode>
				</DescriptivePhotometry>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="LightSource">
				<Name>
					<Locale language="de">LED</Locale>
				</Name>
				<RatedInputPower>18</RatedInputPower>
				<ColorInformation>
					<ColorRenderingIndex>80</ColorRenderingIndex>
					<CorrelatedColorTemperature>4000</CorrelatedColorTemperature>
					<InitialColorTolerance>3 SDCM</InitialColorTolerance>
				</ColorInformation>
			</FixedLightSource>
		</LightSources>
		<ControlGears>
			<ControlGear id="ControlGear1">
				<Name>
					<Locale language="de">Betriebsgerät 1</Locale>
				</Name>
				<Description>
					<Locale language="de">Mit Betriebsgeräten, getrennt dimmbar 1..10 V.</Locale>
				</Description>
			</ControlGear>
		</ControlGears>
		<!--<Equipments>
			<Equipment id="Equipment_indirect">
				<LightSourceReference lightSourceId="LightSource" />
				<ControlGearReference controlGearId="ControlGear1" />
				<RatedInputPower>18</RatedInputPower>
				<RatedLuminousFlux>1600</RatedLuminousFlux>
			</Equipment>
			<Equipment id="Equipment_main">
				<LightSourceReference lightSourceId="LightSource" />
				<ControlGearReference controlGearId="ControlGear1" />
				<RatedInputPower>81</RatedInputPower>
				<RatedLuminousFlux>7800</RatedLuminousFlux>
			</Equipment>
		</Equipments>-->
		<Emitters>
			<Emitter id="LightEmitterMain">
				<FixedLightEmitter emergencyBehaviour="Combined">
					<PhotometryReference photometryId="PhotometryMain"/>
					<LightSourceReference fixedLightSourceId="LightSource"/>
					<RatedLuminousFlux>7800</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
			<Emitter id="LightEmitterIndirect">
				<FixedLightEmitter emergencyBehaviour="None">
					<PhotometryReference photometryId="PhotometryIndirect"/>
					<LightSourceReference fixedLightSourceId="LightSource"/>
					<RatedLuminousFlux>1600</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
		</Emitters>
		<Geometries>
			<ModelGeometry id="Geometry1">
				<GeometryFileReference fileId="geometryFile" levelOfDetail="Medium" />
			</ModelGeometry>
		</Geometries>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="de">TOC: 6437657</Locale>
			</ProductNumber>
			<Name>
				<Locale language="de">Belviso S CDP LED9400nw ETD 03</Locale>
			</Name>
			<Description>
				<Locale language="de">LED-Standleuchte mit separat ausgeführtem schwenkbarem Indirektstrahler. Mit mikroprismatischer Abdeckung für den Direktanteil. Mit umlaufender, exklusiver Lichtrahmung. Standleuchte mit individuellem Raumlicht. Mit hocheffizienter Mikroprismatik CDP. Direkt-indirekt strahlend. Blendungsbewertung nach UGR-Einstufung (EN 12464-1) 19. Bildschirmarbeitsplatzgerecht gemäß EN 12464-1. Bemessungslichtstrom 9400 lm, Bemessungsleistung 99,00 W, Leuchten-Lichtausbeute 94 lm/W. Lichtfarbe neutralweiß, ähnlichste Farbtemperatur (CCT) 4000 K, allgemeiner Farbwiedergabeindex (CRI) R a > 80. Mittlere Bemessungslebensdauer L 80 (t q 25 °C) = 70.000 h, mittlere Bemessungslebensdauer L 85 (t q 25 °C) = 50.000 h. Leuchtenkörper aus Aluminium-Druckguss. Standrohr aus Aluminium-Strangpressprofil, Leuchtenfuß aus Stahl. (RAL 9006). Mit am Leuchtenständer befestigten Positionierungsrollen. LED-Strahler für indirekten Lichtanteil um 30° schwenkbar. Schutzklasse (EN 61140): I, Schutzart (DIN EN 60529): IP20, Stoßfestigkeitsgrad nach IEC 62262: IK02, Prüftemperatur Glühdrahttest gemäß IEC 60695-2-11: 650 °C. Mit Betriebsgeräten, getrennt dimmbar 1..10 V. Das Produkt erfüllt die grundlegenden Anforderungen der anwendbaren EU-Richtlinien und des Produktsicherheitsgesetzes und trägt die CE-Kennzeichnung.</Locale>
				<Locale language="en">Belviso S CDP LED9400nw ETD 03Free-standing LED luminaire with separately tiltable indirect spot. With microprismatic cover for direct component. With all-round, exclusive light frame. Free-standing luminaire with individual room light. With highly efficient CDP microprism. Direct-indirect distribution. Glare evaluation (EN 12464-1) according to UGR  19. VDU workstation-compliant in accordance with 12464-1. Luminaire luminous flux 9400 lm, connected load 99,00 W, luminous efficiency of luminaire 94 lm/W. Light colour neutral white, correlated colour temperature (CCT) 4000 K, general colour rendering index (CRI) Ra > 80. Mean rated service life L80(tq 25 °C) = 70,000 h, mean rated service life L85(tq 25 °C) = 50,000 h. Luminaire body of die-cast aluminium. Supporting column of extruded aluminium section, Luminaire base of steel. (RAL 9006). With positioning casters fixed to supporting column. LED spot for indirect light component can be swivelled through 30°. Safety class (EN 61140): I, protection rating (DIN EN 60529): IP20, impact resistance level in accordance with IEC 62262: IK02, testing temperature of wire glow test in accordance with IEC 60695-2-11: 650 °C. With electronic transformers, separately dimmable 1..10 V. The luminaire complies with fundamental requirements of applicable EU regulations and product safety legislation and bears the CE symbol. TRILUX Order code 6437657</Locale>
			</Description>
			<Pictures>
				<Image fileId="productImage" imageType="Product Picture" />
			</Pictures>
			<DescriptiveAttributes>
				<Mechanical>
					<IKRating>IK02</IKRating>
				</Mechanical>
				<Electrical>
					<ElectricalSafetyClass>I</ElectricalSafetyClass>
					<IngressProtectionIPCode>IP20</IngressProtectionIPCode>
				</Electrical>
				<OperationsAndMaintenance>
					<MedianUsefulLifeTimes>
						<MedianUsefulLife>L80B50 70000h 25°C</MedianUsefulLife>
					</MedianUsefulLifeTimes>
				</OperationsAndMaintenance>
				<CustomProperties>
					<Property id="ID1PL17P9t53oexZksoRkx7Y">
						<Name>
							<Locale language="en">photobiology class</Locale>
						</Name>
						<PropertySource>CEN/TS17623</PropertySource>
						<Value>0</Value>
					</Property>
					<Property id="ID1LrBLaYtnCARKperF_2Ykh">
						<Name>
							<Locale language="en">glow wire resistance</Locale>
						</Name>
						<PropertySource>CEN/TS17623</PropertySource>
						<Value>650°C</Value>
					</Property>
				</CustomProperties>
			</DescriptiveAttributes>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1">
				<ProductNumber>
					<Locale language="de">TOC: 6437657</Locale>
				</ProductNumber>
				<Name>
					<Locale language="de">Belviso S CDP LED9400nw ETD 03</Locale>
				</Name>
				<Mountings>
					<Ground>
						<FreeStanding></FreeStanding>
					</Ground>
				</Mountings>
					<Geometry>
						<ModelGeometryReference geometryId="Geometry1">
							<EmitterReference emitterId="LightEmitterMain">
								<EmitterObjectExternalName>fixed_leo</EmitterObjectExternalName>
							</EmitterReference>
							<EmitterReference emitterId="LightEmitterIndirect">
								<EmitterObjectExternalName>rotatable_leo</EmitterObjectExternalName>
							</EmitterReference>
						</ModelGeometryReference>
					</Geometry>
				<DescriptiveAttributes>
					<Mechanical>
						<Weight>14.5</Weight>
					</Mechanical>
				</DescriptiveAttributes>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download 

<a href="https://github.com/globallightingdata/examples/tree/master/Trilux%20Belviso%20S%20CDP" target="_blank">Trilux Belviso S CDP</a>


## Zumtobel P-EVO R100L

### Explanation

Zumtobel P-EVO R100L ist a simple recessed luminaire using an l3d model.

<img src="/img/docs/getting-started/zumtobelprod.webp" alt="SLV NEW TRIA 2"/>

<img src="/img/docs/getting-started/zumtobel3d.webp" alt="SLV NEW TRIA 2"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
	<Header>
		<Manufacturer>Zumtobel</Manufacturer>
		<CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
		<CreatedWithApplication>n/a</CreatedWithApplication>
		<FormatVersion>1.0.0-rc.1</FormatVersion>
	</Header>
	<GeneralDefinitions>
		<Files>
			<File id="imageFile" contentType="image/jpg" type="localFileName">ZS_PAI_F_R100_LG_Rahmen.jpg</File>
			<File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">60819021_(STD_LEO).LDT</File>
			<File id="geoFile" contentType="geo/l3d" type="localFileName">P-EVO_R100L_LED2500-830_BC_AL_WH.l3d</File>
		</Files>
		<Photometries>
			<Photometry id="Photometry01">
				<PhotometryFileReference fileId="ldtFile"/>
			</Photometry>
		</Photometries>
		<LightSources>
			<FixedLightSource id="lightSource">
				<Name>
					<Locale language="de">LED</Locale>
				</Name>
				<Description>
					<Locale language="de">LED Beschreibung</Locale>
				</Description>
				<RatedInputPower>18</RatedInputPower>
			</FixedLightSource>
		</LightSources>
		<Emitters>
			<Emitter id="Emitter01">
				<FixedLightEmitter>
					<PhotometryReference photometryId="Photometry01"/>
					<LightSourceReference fixedLightSourceId="lightSource"/>
					<RatedLuminousFlux>2400</RatedLuminousFlux>
				</FixedLightEmitter>
			</Emitter>
		</Emitters>
		<Geometries>
			<ModelGeometry id="Geometry01">
				<GeometryFileReference fileId="geoFile"/>
			</ModelGeometry>
		</Geometries>
	</GeneralDefinitions>
	<ProductDefinitions>
		<ProductMetaData>
			<ProductNumber>
				<Locale language="de">60819021</Locale>
			</ProductNumber>
			<Name>
				<Locale language="de">P-EVO R100L LED2500-830 BC AL WH [STD]</Locale>
			</Name>
			<Description>
				<Locale language="de">LED-Decken-Einbauleuchte (Komplettleuchte), "Stable White"; Abblendwinkel 60°; Bestückung: LED2500-830; 50 °; Farbwiedergabe Ra &gt; 80, Farbtemperatur 3000 K (warm weiß); Farborttoleranz (initial MacAdam): 2; Leuchten Lichtstrom: 2400 lm, Leuchten Lichtausbeute: 126 lm/W; Lebensdauer: 50000h bei 85% Lichtstrom; mit Vorschaltgeräte-Einheit, Drahtlose Verbindung via App mit Bluetooth® 4.x - basicDim Wireless; modulare, hochwertige optische Einheit aus Reflektor und LED-Lichtkammer, intergriert im optimierten Wärmemanagement aus Aluminiumdruckguss; glatter Reflektor aluminiumbesputtert, hochglänzend, irisierungsfrei; Reflektor/Abdeckring aus hochwertigem, UV-beständigem Polycarbonat (PC); Abdeckring weiß; Einbauring aus Polycarbonat glasfaserverstärkt (PC), grau; werkzeuglose Schnellmontage der Leuchteneinheit mittels Bajonettverschluss; IP44_IP20; Leuchte halogenfrei verdrahtet; Anschluss: 2-polige Klemme; Netzspannung: 220-240V / 50-60Hz; Montage: werkzeuglose Schnellmontage mittels Anti-Rutsch-Haltefedern für Deckenstärken von 1-40mm; Deckenausschnitt: 100mm, Einbautiefe: 110mm (Deckenstärken 1-15mm); Gewicht: 0,43 kg;
Hinweis: UGR&lt;19 für Office Anwendungen gemäß EN12464 (abhängig von der Leuchtentype); 
Hinweis Bluetooth®: Funk Definition:  basicDIM Wireless - Bluetooth® 4.x, Funk Frequenz:  2,4...2,483 GHz, Funk Sendeleistung:  +4dBm; Einbau in Metall-/ und Betondecken nicht erlaubt; Leuchtenanordnung: Mobile-Steuerung zu Leuchte max. 6m, von Leuchte zu Leuchte max. 4m!</Locale>
			</Description>
			<ProductSeries>
				<ProductSerie>
					<Name>
						<Locale language="de">Deckeneinbau</Locale>
					</Name>
				</ProductSerie>
			</ProductSeries>
			<Pictures>
				<Image imageType="Product Picture" fileId="imageFile" />
			</Pictures>
			<DescriptiveAttributes>
				<Electrical>
					<PowerFactor>1</PowerFactor>
				</Electrical>
			</DescriptiveAttributes>
		</ProductMetaData>
		<Variants>
			<Variant id="variant1">
				<Name>
					<Locale language="de">P-EVO R100L LED2500-830 BC AL WH [STD]</Locale>
				</Name>
				<Mountings>
					<Ceiling>
						<Recessed recessedDepth="90"></Recessed>
					</Ceiling>
				</Mountings>
				<Geometry>
					<ModelGeometryReference geometryId="Geometry01">
						<EmitterReference emitterId="Emitter01">
							<EmitterObjectExternalName>LEO</EmitterObjectExternalName>
						</EmitterReference>
					</ModelGeometryReference>
				</Geometry>
			</Variant>
		</Variants>
	</ProductDefinitions>
</Root>
```

### Download 

<a href="https://github.com/globallightingdata/examples/tree/master/Zumtobel%20P-EVO%20R100L" target="_blank">Zumtobel P-EVO R100L</a>