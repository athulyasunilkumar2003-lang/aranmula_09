var wms_layers = [];

var format_AranmulaWardBoundaryshp_0 = new ol.format.GeoJSON();
var features_AranmulaWardBoundaryshp_0 = format_AranmulaWardBoundaryshp_0.readFeatures(json_AranmulaWardBoundaryshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaWardBoundaryshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaWardBoundaryshp_0.addFeatures(features_AranmulaWardBoundaryshp_0);
var lyr_AranmulaWardBoundaryshp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaWardBoundaryshp_0, 
                style: style_AranmulaWardBoundaryshp_0,
                popuplayertitle: 'Aranmula/WardBoundary.shp',
                interactive: true,
    title: 'Aranmula/WardBoundary.shp<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_0.png" /> ARANMULA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_3.png" /> EDASSERIMALA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_4.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_5.png" /> ERUMAKKADU<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_6.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_7.png" /> KALARIKKODU<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_8.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_9.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_10.png" /> KOTTA EAST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_11.png" /> KOTTA WEST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_12.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_13.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_14.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_15.png" /> MALAKKARA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_16.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_17.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_18.png" /> VALLANA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_19.png" /> <br />' });
var format_AranmulaLocationshp_1 = new ol.format.GeoJSON();
var features_AranmulaLocationshp_1 = format_AranmulaLocationshp_1.readFeatures(json_AranmulaLocationshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaLocationshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaLocationshp_1.addFeatures(features_AranmulaLocationshp_1);
var lyr_AranmulaLocationshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaLocationshp_1, 
                style: style_AranmulaLocationshp_1,
                popuplayertitle: 'Aranmula/Location.shp',
                interactive: true,
                title: '<img src="styles/legend/AranmulaLocationshp_1.png" /> Aranmula/Location.shp'
            });
var format_AranmulaAnganawadi01shp_2 = new ol.format.GeoJSON();
var features_AranmulaAnganawadi01shp_2 = format_AranmulaAnganawadi01shp_2.readFeatures(json_AranmulaAnganawadi01shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaAnganawadi01shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaAnganawadi01shp_2.addFeatures(features_AranmulaAnganawadi01shp_2);
var lyr_AranmulaAnganawadi01shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaAnganawadi01shp_2, 
                style: style_AranmulaAnganawadi01shp_2,
                popuplayertitle: 'Aranmula/Anganawadi01.shp',
                interactive: true,
                title: '<img src="styles/legend/AranmulaAnganawadi01shp_2.png" /> Aranmula/Anganawadi01.shp'
            });
var format_AranmulaRationShopshp_3 = new ol.format.GeoJSON();
var features_AranmulaRationShopshp_3 = format_AranmulaRationShopshp_3.readFeatures(json_AranmulaRationShopshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaRationShopshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaRationShopshp_3.addFeatures(features_AranmulaRationShopshp_3);
var lyr_AranmulaRationShopshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaRationShopshp_3, 
                style: style_AranmulaRationShopshp_3,
                popuplayertitle: 'Aranmula/RationShop.shp',
                interactive: true,
                title: '<img src="styles/legend/AranmulaRationShopshp_3.png" /> Aranmula/RationShop.shp'
            });
var format_AranmulaRoad01shp_4 = new ol.format.GeoJSON();
var features_AranmulaRoad01shp_4 = format_AranmulaRoad01shp_4.readFeatures(json_AranmulaRoad01shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaRoad01shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaRoad01shp_4.addFeatures(features_AranmulaRoad01shp_4);
var lyr_AranmulaRoad01shp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaRoad01shp_4, 
                style: style_AranmulaRoad01shp_4,
                popuplayertitle: 'Aranmula/Road01.shp',
                interactive: true,
                title: '<img src="styles/legend/AranmulaRoad01shp_4.png" /> Aranmula/Road01.shp'
            });
var format_AranmulaTransformer1shp_5 = new ol.format.GeoJSON();
var features_AranmulaTransformer1shp_5 = format_AranmulaTransformer1shp_5.readFeatures(json_AranmulaTransformer1shp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaTransformer1shp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaTransformer1shp_5.addFeatures(features_AranmulaTransformer1shp_5);
var lyr_AranmulaTransformer1shp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaTransformer1shp_5, 
                style: style_AranmulaTransformer1shp_5,
                popuplayertitle: 'Aranmula/Transformer1.shp',
                interactive: true,
                title: '<img src="styles/legend/AranmulaTransformer1shp_5.png" /> Aranmula/Transformer1.shp'
            });

lyr_AranmulaWardBoundaryshp_0.setVisible(true);lyr_AranmulaLocationshp_1.setVisible(true);lyr_AranmulaAnganawadi01shp_2.setVisible(true);lyr_AranmulaRationShopshp_3.setVisible(true);lyr_AranmulaRoad01shp_4.setVisible(true);lyr_AranmulaTransformer1shp_5.setVisible(true);
var layersList = [lyr_AranmulaWardBoundaryshp_0,lyr_AranmulaLocationshp_1,lyr_AranmulaAnganawadi01shp_2,lyr_AranmulaRationShopshp_3,lyr_AranmulaRoad01shp_4,lyr_AranmulaTransformer1shp_5];
lyr_AranmulaWardBoundaryshp_0.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_AranmulaLocationshp_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_AranmulaAnganawadi01shp_2.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_AranmulaRationShopshp_3.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_AranmulaRoad01shp_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_AranmulaTransformer1shp_5.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_AranmulaWardBoundaryshp_0.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_AranmulaLocationshp_1.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_AranmulaAnganawadi01shp_2.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AranmulaRationShopshp_3.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AranmulaRoad01shp_4.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_AranmulaTransformer1shp_5.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AranmulaWardBoundaryshp_0.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_AranmulaLocationshp_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_AranmulaAnganawadi01shp_2.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AranmulaRationShopshp_3.set('fieldLabels', {'id': 'inline label - always visible', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'no label', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AranmulaRoad01shp_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_AranmulaTransformer1shp_5.set('fieldLabels', {'id': 'inline label - always visible', 'AssetName': 'inline label - always visible', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'inline label - always visible', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AranmulaTransformer1shp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});