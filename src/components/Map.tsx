/* eslint-disable prettier/prettier */
import {useRef, useState} from 'react';
import React, {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import colorsStyle from '../styles/colors.style';
// const FtsQuery = require('full-text-search-query');

// type Props = {
//   data: GeoData[] | [];
//   handleFilter: (type: number, id: string) => void;
// };

const MapUI = () => {
//   const [infoData, setInfoData] = useState<GeoData>();
//   const [coords, setCoords] = useState(0);
//   const dispatch = useDispatch();
  const [latitudes, setlatitudes] = useState(13.7734629);
  const [latitudesDel] = useState(0.015);
  const [longitudes, setlongitudes] = useState(109.2333769);
  const [longitudesDel] = useState(0.0121);
  const refMap = useRef(null);
//   const stateLocationSearch = useSelector<RootReducer, any>(
//     state => state.homeLocation.searchLocation,
//   );
//   const radius = 50;

//   // const stateIsSearch = useSelector<RootReducer, any>(
//   //   state => state.navigation.isSearch,
//   // );
//   const search = useSelector<RootReducer,any>(
//     state => state.navigation.search,
//   );

  const region = {
    latitude: latitudes,
    longitude: longitudes,
    latitudeDelta: latitudesDel,
    longitudeDelta: longitudesDel,
  };

//   const stateGroupPTD = useSelector<RootReducer, any>(
//     state => state.homeLocation.group,
//   );

//   const handleShowInfomations = (value: GeoData) => {
//     fitMapToCircle(value);
//     setInfoData(value);
//     // setRegions(prev => ({
//     //   ...prev,
//     //   // latitude: value.geometry.coordinates[1],
//     //   // longitude: value.geometry.coordinates[0],
//     // }));
//   };

//   const handleEmptyInfo = () => {
//     setInfoData(undefined);
//   };

//   const fitMapToCircle = (val: GeoData) => {
//     const coordinates = region;
//     const radiusBoundaries = getBoundsOfDistance(coordinates, radius / 1);
//     // setlatitudesDel(0.006);
//     // setlongitudesDel(0.006);
//     // refMap?.current.fitToElements(true);

//     setlatitudes(val.geometry.coordinates[1]);
//     setlongitudes(val.geometry.coordinates[0]);

//     refMap?.current.fitToCoordinates(radiusBoundaries, {
//       edgePadding: {
//         top: 10,
//         right: 10,
//         bottom: 10,
//         left: 10,
//       },
//     });
//   };

//   const handleGetSearch = useCallback((text: string) => {
//     const ftsQuery = new FtsQuery(true);
//     const searchTerm = ftsQuery.transform(text);
//     const xmlData = `<GetFeature
//     xmlns="http://www.opengis.net/wfs" service="WFS" version="1.1.0" outputFormat="application/json" maxFeatures="1000" startIndex="0" viewParams="s:FORMSOF(INFLECTIONAL\\, ${text})"
//     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd">
//     <Query typeName="gdt:textsearch" srsName="EPSG:4326"
//       xmlns:gdt="https://gis.gdtvietnam.com/geoserver"/>
//     </GetFeature>`;
//     const config = {
//       headers: {'Content-Type': 'text/xml'},
//     };
//     geoApi
//       .postGetInfoPTD(xmlData, config)
//       .then(res => {
//         dispatch(actionSearch(JSON.parse(res)));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },[dispatch]);

//   useEffect(() => {
//     handleGetSearch(search);
//     if (stateLocationSearch) {
//       setlatitudes(stateLocationSearch.geometry.coordinates[1]);
//       setlongitudes(stateLocationSearch.geometry.coordinates[0]);
//       return;
//     }
//   }, [handleGetSearch, search, stateLocationSearch]);

  return (
    <View style={styles.container}>
      <MapView
        ref={refMap}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        zoomEnabled={true}
        scrollEnabled={true}
        showsScale={true}
        region={region} />
      {/* {stateIsSearch && <SearchUI />} */}
      {/* <FormInfoUI infoData={infoData} handleEmptyInfo={handleEmptyInfo} /> */}
      {/* <OverlayComponent handleFilter={handleFilter} stategr1={stateGroupPTD} stategr2={datalist} /> */}
    </View>
  );
};

export default MapUI;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
  textMarker: {
    color: colorsStyle.PRIMARY,
  },
});
