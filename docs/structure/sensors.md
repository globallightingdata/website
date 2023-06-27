---
title: Sensors
sidebar_label: Sensors
---
## Description

`Sensors` is the second child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of Sensors is **optional**.

`Sensors` are defined direct in GLDF.

A single `Sensor` element references a [**File**](/docs/structure/files.md) element which describes the location of the file which descripes the detection range of the sensor. Furthermore, the `Sensor` element **can** contain various additional [**metadata**](#sensor-metadata) to complement the sensor file.

Please visit the page of [**sensNorm**](https://www.sensnorm.com) for further information about measurement procedures and accurate planning data.



## Location in XSD

![Sensors in XSD](/img/docs/structure/sensors-hierarchy.webp)


## XSD description

<!-- markdownlint-disable-next-line -->
<img src="/img/docs/structure/sensor-xsd.webp" alt="Sensors in XSD" width="750" />


## XML example

```xml {8-12} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
        <File id="sensor" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>
    </Files>
    <Sensors>
        <Sensor id="sensor1">
            <SensorFileReference fileId="sensor" />
        </Sensor>
    </Sensors>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```
## Referencing a sensor

Once declared, all sensors can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

```xml  {9,20} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
        <File id="sensor" contentType="sensor/sensldt" type="localFileName">sensor.ldt</File>
    </Files>
    <Sensors>
        <Sensor id="sensor1">
            <SensorFileReference fileId="sensor" />
        </Sensor>
    </Sensors>
    <Emitters>
        <Emitter id="em-s">
            <SensorEmitter>
                <SensorReference sensorId="sensor1" />
            </SensorEmitter>
        </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```


## Sensor MetaData

It is possible to **optionally** specify various metadata inside a sensor element to **complement** the content. 


- **DetectorCharacteristic**  
  Sensing device detection area shapes
- **DetectionMethod**  
  Sensing device detection method technology
- **DetectorType**  
  Sensing device detection method technology
- 