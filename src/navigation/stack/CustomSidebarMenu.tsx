import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colorsStyle from '../../styles/colors.style';
import {FontSize} from '../../untils/scaleUntils';

const CustomSidebarMenu = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        /> */}
        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      <Text style={styles.regis}>Chưa có tài khoản? Đăng kí</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  sideMenuProfileIcon: {
    resizeMode: 'cover',
    width: 150,
    height: 140,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  regis: {
    fontSize: FontSize(14),
    textAlign: 'center',
    color: colorsStyle.BACK,
  },
});

export default CustomSidebarMenu;
