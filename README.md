# cssWithJS

Css Magic With JavaScript.

![Alt Text](https://i.ibb.co/LYLkyPr/ezgif-com-video-to-gif.gif)

### Important:
It only works with the internal CSS (css in style tag). Just put the css that you want to change with JavaScript in a style tag, give it an ID and that's it. No other css including inline, internal or external will be affected. So, it is recommended to put only those classes/ids etc in the target style tag that you want to update with Javascript.

## Features:

- You can update any property in the target style tag.
- You can now change the 'display' property with js also.
- Access the package throught cdn.

## CDN:
`https://cdn.jsdelivr.net/gh/Tayyab1101/cssWithJS@1.0/cssWithJS.js`

## Demo:
In this demo, we are accessing it through cdn.
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdulhadi</title>

<style id="mystyle">
    body {
        background-color: lightgreen;
    }
    h1{
      color:coral;
    }
</style>

</head>

<body>

    <h1>Hello World</h1>

    <script src="https://cdn.jsdelivr.net/gh/Tayyab1101/cssWithJS@1.0/cssWithJS.js"></script>
    <script>
        cssWithJS('#mystyle');
        updateCss.magic('body', 'background-color', 'lightblue');
    </script>
</body>

</html>
```
#### Output in the gif at the top


