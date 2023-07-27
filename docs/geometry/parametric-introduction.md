---
title: Parametric Geometry Introduction
sidebar_label: Introduction
---

## Concept

Parametric Geometry is a concept that allows you to create basic rudimentary 3d models of generic luminaires without having to model them. You can generate models based on a few product dimension parameters.

Our parametric 3d model web service allows you to upload an input XML file and provides the download link after generating the new L3D file. You can then use the file within your GLDF file.

## Step by Step guide

This guide will walk you through the steps to create an example parametric l3d model and help you understand how the web service works.

The process outline is as follows:

- Create an input XML file according to our <a href="/xsd/p3d/p3d.xsd" target="_blank">XSD</a> file specification.
- Send the input XML file to our Web service.
- The web service will respond with an URL where you can download the generated l3d file.

In this example, we will create a BAT file and a sample source XML file to demonstrate and test the web service

The following is a windows platform-based example.

### Step 1

Open notepad.exe on your system.

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/opennotepad.webp)

### Step 2
Enter the following code, save the file and exit the editor.

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

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/notepad.webp)

### Step 3 
Click on Save As. Select All files as file type and save the file as example.bat

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/saveas.webp)

### Step 4
Open another instance of Notepad and paste the following text: 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<P3D>
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

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/xmlnotepad.webp)

### Step 5
Click Save as again and save the file as example-geometry.xml. You should now have two files in your directory.

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/files1.webp)

### Step 6
Double-click the bat file. Then a file selection dialog will appear. You can then select the source XML file, and the script will download the result l3d file to the location of your bat file. The result filename should start with StandCuboidSide... and end with .l3d. Your directory should look as in the image below.

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/result.webp)

### Step 7
Load up the <a href="https://l3d-editor.gldf.io" target="_blank">L3D Editor</a> and open your new file to see the result.

![Open notepad.exe on windows 11](/img/docs/geometry/screenshots/resulteditor.webp)
