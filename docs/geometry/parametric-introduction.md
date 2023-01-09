---
title: Introduction
sidebar_label: Introduction
---

## Summary

Parametric Geometry is a concept that allows you to create basic rudimentary 3d models of generic luminaires without having to model them. You can generate models based on a few parameters describing the product's dimensions.

## Step by Step guide

Create your own paremtric l3d model.

The process outline is as follows:

Create an input XML file according to our <a href="/xsd/p3d/p3d.xsd" target="_blank">XSD</a> file specification.

Send the input XML file to our Web service.
The web service will respond with an URL where you can download the generated l3d file.

Sample
We created a BAT and a sample source file to demonstrate how the service works and make it easy for you to test it yourself.

The following is a windows platform-based example.

You can download our sample bat and XML source files or create them yourself, as described in the following steps.

- **Step 1:** Create the *.bat file on your system.
- **Step 2:** Open the file in a text editor such as notepad.exe
- **Step 3:** Enter the following code, save the file and exit the editor.

```
@Echo off
REM File Dialog
For /f "usebackqdelims=" %%A in (
  `powershell -Executionpolicy ByPass -Command "[void][System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms');$dlg = New-Object System.Windows.Forms.OpenFileDialog; if($dlg.ShowDialog() -eq 'OK'){return $dlg.FileNames}"`
) Do Set file=%%A

REM API Call
curl --request "PUT" --header "Content-Type:application/xml" "https://p3d.relux.com/l3d/" --data @%file% --output out.xml

REM get URL out of JSON
For /f "usebackqdelims=" %%A in (
  `Powershell -Executionpolicy Bypass -command "([xml](gc 'out.xml')).SelectSingleNode('//root').innerText"`
) Do Set url=%%A
echo %url%

REM Filename of URL
for /f "tokens=1,2,3,4 delims=/ " %%a in ("%url%") do set filename=%%d
echo %filename%

REM URL downlaod
powershell -Command "Invoke-WebRequest %url%" -OutFile %filename%.l3d"

REM clean up
del out.xml

pause
```

- **Step 4:** Create a *.xml file, and open it in a text editor such as notepad.exe.
- **Step 5:** copy and paste the XML code for a Luminaire of type Stand Cuboid Side: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<P3D xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="file:///C:/Users/Alex/Desktop/p3d/P3D/P3D.xsd">
    <StandCuboidSide>
	    <Width>30</Width>
	    <Length>60</Length>
	    <Height>15</Height>
	    <LuminousWidth>20</LuminousWidth>
	    <LuminousLength>20</LuminousLength>
	    <TotalHeight>120</TotalHeight>
    </StandCuboidSide>
</P3D>
```

- **Step 6:** Save the file and rename it to *.xml.

If you double-click the bat file, a file selection dialog will appear. You can then select the source XML file, and the script will download the result l3d file to the location of your bat file.

Open your file in the l3d editor to see the result.