---
title: Equipments
sidebar_label: Equipments
---

## Description

`Eqipments` is the seventh child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire).

Equipments primarily usage is to depict **luminaires with classic lamps** (i.e. not LEDs). They combine a classic lamp and optionally a control gear together with the required input power into one single unit. Which can be referenced later on:

### XSD description

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/equipments-xsd.webp" alt="Equipment in XSD" width="540" />

In addition to the mandatory `id` attribute for later reference, `Equipment`s **can** contain some additional [**metadata**](#equipment-metadata). However, the whole definition of equipments is **optional**. If no `lightSourceCount` or `controlGearCount` is provided, the value "1" is assumed for both.

Once definied, equipments can be [referenced in `Emitters`](/docs/structure/emitters.md). There their usage is to define **further details for a changeable light emitter**, which otherwise would consist of a photometry only instead:

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/equipments-use-in-emitters.webp" alt="Use in Emitter" width="800" />

## Location in XSD

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/equipments-hierarchy.webp" alt="Equipments in XSD" width="550" />

## XML example

Below you can find an example definition of an equipment:

```xml {18-24} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!-- Content skipped for clarity -->
  </Header>
  <GeneralDefinitions>
    <LightSources>
      <ChangeableLightSource id="lightSource1">
        <!-- Content skipped for clarity -->
      </ChangeableLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="controlGear1">
        <!-- Optional, content skipped for clarity -->
      </ControlGear>
    </ControlGears>
    <Equipments>
      <Equipment id="equipment1">
        <LightSourceReference changeableLightSourceId="lightSource1" />
        <ControlGearReference controlGearId="controlGear1" />
        <RatedInputPower>100</RatedInputPower>
      </Equipment>
    </Equipments>
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Content skipped for clarity -->
  </ProductDefinitions>
</Root>
```

Each `Equipment` element must contain the **mandatory** `id` attribute, a `LightSourceReference` and a `RatedInputPower` element. This `Equipment`

- can be **referenced** in subsequent elements via *equipment1* (`id` attribute, line 18)
- provide no optional **metadata** (see below)

## Referencing an equipment

Once declared, all equipments can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

```xml  {19,28} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!-- Content skipped for clarity -->
  </Header>
  <GeneralDefinitions>
    <LightSources>
      <ChangeableLightSource id="lightSource1">
        <!-- Content skipped for clarity -->
      </ChangeableLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="controlGear1">
        <!-- Content skipped for clarity -->
      </ControlGear>
    </ControlGears>
    <Equipments>
      <Equipment id="equipment1">
        <LightSourceReference changeableLightSourceId="lightSource1" />
        <ControlGearReference controlGearId="controlGear1" />
        <RatedInputPower>100</RatedInputPower>
      </Equipment>
    </Equipments>
    <Emitters>
      <Emitter id="emitter1">
        <ChangeableLightEmitter>
          <EquipmentReference equipmentId="equipment1" />
          <!-- Further content skipped for clarity -->
        </ChangeableLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Content skipped for clarity -->
  </ProductDefinitions>
</Root>
```

In the example above, the `Equipment` with `id` *equipment11* (line 18) is **referenced** once inside the element `Emitter` and defines the **luminaire's set of lamp and control gear inside a light emitter** (line 27).

## Equipment MetaData

It is possible to **optionally** specify some metadata inside equipment to **complement** its description with further details:

```xml {19-24} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!-- Content skipped for clarity -->
  </Header>
  <GeneralDefinitions>
    <LightSources>
      <ChangeableLightSource id="lightSource1">
        <!-- Content skipped for clarity -->
      </ChangeableLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="controlGear1">
        <!-- Content skipped for clarity -->
      </ControlGear>
    </ControlGears>
    <Equipments>
      <Equipment id="equipment1">
        <LightSourceReference changeableLightSourceId="lightSource1" />
        <ControlGearReference controlGearId="controlGear1" />
        <RatedInputPower>100</RatedInputPower>
        <EmergencyBallastLumenFactor>0.1</EmergencyBallastLumenFactor>
      </Equipment>
    </Equipments>
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Content skipped for clarity -->
  </ProductDefinitions>
</Root>
```

Alternatively, the luminous flux in emergency lighting scenarios can also be specified as an absolute value:

```xml {6} showLineNumbers
<Equipments>
  <Equipment id="equipment1">
    <LightSourceReference changeableLightSourceId="lightSource1" />
    <ControlGearReference controlGearId="controlGear1" />
    <RatedInputPower>100</RatedInputPower>
    <EmergencyRatedLuminousFlux>8</EmergencyRatedLuminousFlux>
  </Equipment>
</Equipments>
```

- **ControlGearReference**  
  Reference to a `ControlGear` element defined under GeneralDefinitions/ControlGears
- **EmergencyBallastLumenFactor**  
  Ratio of the emergency luminous flux of the referenced light source (supplied by the referenced control gear) to the luminous flux of the same light source.
- **EmergencyRatedLuminousFlux**  
  Emergency luminous flux of the referenced light source. Supplied by the referenced control gear (Unit: lumen)
