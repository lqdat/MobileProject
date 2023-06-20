/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {screenNames} from '../constants';
import BluetoothScreen from '../screens/blutooth';
import HomeScreens from '../screens/home';
import Login from '../screens/login';
import colorsStyle from '../styles/colors.style';
import {navigationRef} from './navigationRefs';
import CustomSidebarMenu from './stack/CustomSidebarMenu';

export type RootStackParamList = {
  [screenNames.BOTTOM_NAV]: undefined,
  [screenNames.LOGIN_SCREEN]: undefined,
  [screenNames.INFO]: {data: any},
  [screenNames.HOME_STACK]: undefined,
  [screenNames.DRAWER]: undefined,
  [screenNames.LISTPTD]: {data: any},
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();
function AppNavigation(): ReactElement {
  //   const dispatch = useDispatch();
  const Drawer = createDrawerNavigator();
  function Log() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Trang chủ"
          options={{
            headerShown: true,
            title: 'Trang chủ',
            headerRight: () => (
              <TouchableOpacity onPress={() => {}}>
                <Icon
                  name={'filter'}
                  type="font-awesome"
                  size={23}
                  style={{marginRight: 10}}
                  color={colorsStyle.BACK}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {color: 'black'},
            headerTransparent: false,
          }}
          component={HomeScreens}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: 'Đăng nhập',
            headerTitleStyle: {color: 'black'},
            headerTransparent: false,
          }}
        />
         <Drawer.Screen
          name="Blutooth"
          component={BluetoothScreen}
          options={{
            headerShown: true,
            title: 'Kết nối blutooth',
            headerTitleStyle: {color: 'black'},
            headerTransparent: false,
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator>
        <Screen name="DRAWER" component={Log} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
