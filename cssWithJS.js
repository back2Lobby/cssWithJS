function cssWithJS(styleElemID) {
    var styleElemID = styleElemID;
    var styleElement = document.querySelector(styleElemID).innerHTML;
    var all = styleElement.match(/[^\n].*?{.*?}/gms);
    //save all these class/ids to a global object
    eval.call(this, 'var updateCss = {queries:[],data:[],magic: function(query,name,value){if(this.queries.indexOf(query) == -1){return -1;}else{if(this.data[this.queries.indexOf(query)].propertiesNames.indexOf(name) == -1){return null;}else{this.data[this.queries.indexOf(query)].propertiesValues[this.data[this.queries.indexOf(query)].propertiesNames.indexOf(name)] = value;this.updateCss.update();}}}}');
    var name;
    var properties;
    var className_org;
    all.forEach(function (query, index) {
        //get the query line
        var queryNamePattern = /([^\}]*?){/gms;
        name = queryNamePattern.exec(query);
        name = name[1].trim();
        //push names in global object
        updateCss.queries.push(name);
        //get all the css properties
        var propertiesNames = query.match(/[a-z].*?:/gm);
        var propertiesValues = query.match(/:.*?;/gm);
        propertiesNames.forEach((item, index) => {
            propertiesNames[index] = item.replace(/\s*?:/, "");
        });
        propertiesValues.forEach((item, index) => {
            propertiesValues[index] = item.replace(/:\s*/gm, "");
        });
        propertiesValues.forEach((item, index) => {
            propertiesValues[index] = item.replace(/;/gm, "");
        });

        var single_query = {
            name: name,
            propertiesNames: propertiesNames,
            propertiesValues: propertiesValues
        }

        updateCss.data.push(single_query);
        var updater = {
            update: function () {
                var modified_query = "";
                updateCss.data.forEach(item => {
                    var single_query = item.name + "{\n";
                    item.propertiesNames.forEach((p, index) => {
                        single_query += p + ":" + item.propertiesValues[index] + ";\n";
                    })
                    single_query += "}\n";
                    modified_query += single_query;
                });
                document.querySelector(styleElemID).innerHTML = modified_query;
            }
        }
        eval('updateCss.updateCss = updater');
    });
}
eval.call('window.cssObject = cssWithJS()');