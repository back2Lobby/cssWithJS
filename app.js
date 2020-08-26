var styleElement = document.querySelector("#mystyle");
function getAllCss(styleElement) {
    styleElement = styleElement.innerHTML;
    var all = styleElement.match(/[\.|\#].+?{.*?}/gs);

    //save all these class/ids to a global object
    eval.call(this, 'var allcss = {data:[]}');
    1
    var name;
    var properties;
    var className_org;
    all.forEach(function (query) {
        name = query.match(/([.|#].+?){/gs);
        //get the query -> class/id name   
        name = name[0].replace(/\s*?{/, "");
        className_org = name;
        //remove starting dot or #
        if (!/[\.|\#]/.test(name)) {
            name = "tag_" + name;
        } else if (/\./.test(name)) {
            name = name.replace(/[.]/, "");
            name = "dot_" + name;
        } else if (/\#/.test(name)) {
            name = name.replace(/[#]/, "");
            name = "hash_" + name;
        }

        //get all the css properties
        fullProperties = query.match(/[a-z].*?;$/gm);
        propertiesNames = query.match(/[a-z].*?:/gm);
        propertiesValues = query.match(/:.*?;/gm);
        propertiesNames.forEach((item, index) => {
            propertiesNames[index] = item.replace(/\s*?:/, "");
        });
        propertiesValues.forEach((item, index) => {
            propertiesValues[index] = item.replace(/:\s*/gm, "");
        });
        propertiesValues.forEach((item, index) => {
            propertiesValues[index] = item.replace(/;/gm, "");
        });
        //create dynamic object of css classes/ids
        eval.call(this, 'var ' + name + ' = {className:' + '"' + className_org + '"' + ',fullProperties:fullProperties,propertiesNames:propertiesNames,propertiesValues:propertiesValues,total:propertiesNames.length,property:function(name,value){if(this.propertiesNames.indexOf(name) == -1){return null;}else{this.propertiesValues[this.propertiesNames.indexOf(name)] = value;allcss.updateCss.update();}}}');
        //also store all objects create in allcss global object's data property
        function updateCss() {
            var modified_query = "";
            allcss.data.forEach(item => {
                var single_query = item.className + "{\n";
                item.propertiesNames.forEach((p, index) => {
                    single_query += p + ":" + item.propertiesValues[index] + ";\n";
                })
                single_query += "}\n";
                modified_query += single_query;
            });
            document.querySelector('#mystyle').innerHTML = modified_query;
        }
        var updater = {
            update: function () {
                var modified_query = "";
                allcss.data.forEach(item => {
                    var single_query = item.className + "{\n";
                    item.propertiesNames.forEach((p, index) => {
                        single_query += p + ":" + item.propertiesValues[index] + ";\n";
                    })
                    single_query += "}\n";
                    modified_query += single_query;
                });
                document.querySelector('#mystyle').innerHTML = modified_query;
            }
        }
        eval('allcss.data.push(' + name + ')');
        eval('allcss.updateCss = updater');
    });
}
getAllCss(styleElement);
////////////////////////////////////////////////////////////////////