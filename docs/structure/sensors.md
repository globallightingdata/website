---
title: Sensors
sidebar_label: Sensors
---
## Sensor Description

The sensors listed here are understood to be motion detectors, optimally with a measured detection range, for light control. Please visit the page of [**sensNorm**](https://www.sensnorm.com) for further information about measurement procedures and accurate planning data.

`Sensors` is the second child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of Sensors is **optional**.

`Sensors` are defined direct in GLDF. A single `Sensor` element references a [**File**](/docs/structure/files.md) element which describes  the location of the file which describes the detection range of the sensor. Furthermore, the `Sensor` element **can** contain various additional [**metadata**](#sensor-metadata) to complement the sensor file.

## Location in XSD

![Sensors in XSD](/img/docs/structure/sensors-hierarchy.webp)

## XSD description

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/sensor-xsd.webp" alt="Sensors in XSD" width="550" />

## XML example / Referencing a sensor

```xml {9,16} showLineNumbers
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
        <File id="sensorFile" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>
    </Files>
    <Sensors>
        <Sensor id="sensor1">
            <SensorFileReference fileId="sensorFile" />
        </Sensor>
    </Sensors>
    <Emitters>
        <Emitter id="emitter1">
            <SensorEmitter>
                <SensorReference sensorId="sensor1" />
            </SensorEmitter>
        </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

Once declared, all sensors can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

## Sensor MetaData

It is possible to **optionally** specify various metadata inside a sensor element to **complement** the content.
The information can also be found in the measurement file, but for easy direct access it can also be stored here.
**Important**: The information must be consistent with the file.

- **DetectorCharacteristic**  
  Sensing device detection area
  - `Round`
  - `Square`
  - `Other`
- **DetectionMethod**  
  Sensing device detection method technology
  - `Passive Infrared`
  - `High Frequency`
  - `Microwave`
  - `Ultrasonic`
  - `Camera`
  - `Other`
- **DetectorType**  
  Sensing device detection method technology
  - `Motion Detector`
  - `Presence Detector`
  - `Daylight Detector`
  - `Other`
