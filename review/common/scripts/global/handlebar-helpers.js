import Handlebars from 'handlebars';

Handlebars.registerHelper("divide", function(divident, divisor) {
    return parseInt(divident) / parseInt(divisor) ;
});

Handlebars.registerHelper('checkval', function (v1, v2, options) {
    if (v1>v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
});

Handlebars.registerHelper('boldKey', function(argText, argKey) {
    return argText
    .split(' ')
    .map(t => {
        return t.toLowerCase().match(argKey.trim().toLowerCase()) ? '<strong>'+ t +'</strong>' : t
    })
    .join(' ');
})

Handlebars.registerHelper('prioritval', function (argsObj, argsPath) {
    let pathArr = argsPath.split('~');
    let primaryValue = argsObj[pathArr[0].split('/')[0]][pathArr[0].split('/')[1]];
    let secondaryValue = argsObj[pathArr[1].split('/')[0]][pathArr[1].split('/')[1]];

    if(primaryValue) {
        return primaryValue;
    }
    else if (secondaryValue) {
        return secondaryValue;
    }

});

Handlebars.registerHelper('modifyproducturl', function (argsUrl, argsObj, argsPath, argsId) {
    let pathArr = argsPath.split('~');
    let primaryValue = argsObj[pathArr[0].split('/')[0]][pathArr[0].split('/')[1]];
    let secondaryValue = argsObj[pathArr[1].split('/')[0]][pathArr[1].split('/')[1]];

    if(primaryValue){
        return decodeURIComponent(argsUrl).replace('{{product-name}}', primaryValue.toLowerCase().replace(/\s+/g, '_')).replace('{{product-id}}', argsId) ;
    }
    else if (secondaryValue){
        return decodeURIComponent(argsUrl).replace('{{product-name}}', secondaryValue.toLowerCase().replace(/\s+/g, '_')).replace('{{product-id}}', argsId) ;
    }

});
Handlebars.registerHelper('modifyasseturl', function (argsUrl, argsId) {
    if(argsId){
        return decodeURIComponent(argsUrl).replace('{{asset-id}}', argsId) ;
    }

});

Handlebars.registerHelper('trimText', function (argsText, argsChar) {
    let totalChar = 94;
    if(argsChar) {
        totalChar = argsChar;
    }
    if(argsText){
        return argsText.trim().substring(0, totalChar) ;
    }

});