---
title: Example Trilux Belviso S CDP
sidebar_label: Trilux Belviso S CDP
---

### Introduction

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