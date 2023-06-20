import React, {useCallback, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, CheckBox, Icon} from 'react-native-elements';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import colorsStyle from '../../styles/colors.style';
import {IS_IOS, SM_SIZE} from '../../untils/platformUntils';
import {FontSize, RatioHeight, RatioWidth} from '../../untils/scaleUntils';

function Login() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [sercur, setSercure] = useState(true);
  const [isCheck, setIsCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback((usern: string, passwo: string) => {
    console.log(usern + passwo);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.sideMenuProfileIcon}
        />
        <View style={styles.Formtitle}>
          <Text style={styles.TitleLogin}>Đăng nhập</Text>
          <Text style={styles.Texttitle}>Vui lòng đăng nhập để tiếp tục</Text>
        </View>
        <View style={styles.InputForm}>
          <View style={styles.ViewInput}>
            <View style={styles.ViewIcon}>
              <Icon name="user" type="font-awesome" color={colorsStyle.BACK} />
            </View>
            <TextInput
              placeholder="Tài khoản"
              style={styles.input}
              onChangeText={text => setUserName(text)}
              value={username}
              placeholderTextColor={colorsStyle.BLACK}
            />
          </View>
          <View style={styles.ViewInput}>
            <View style={styles.ViewIcon}>
              <Icon name="lock" type="font-awesome" color={colorsStyle.BACK} />
            </View>
            <TextInput
              secureTextEntry={sercur}
              placeholder="Mật khẩu"
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholderTextColor={colorsStyle.BLACK}
            />
            <View style={styles.ViewIconRight}>
              <Icon
                name={!sercur ? 'eye' : 'eye-slash'}
                type="font-awesome"
                color={colorsStyle.BACK}
                onPress={() => setSercure(prev => !prev)}
              />
            </View>
          </View>
          <View style={styles.viewFormCheckBox}>
            <View style={styles.viewCheckBox}>
              <CheckBox
                onPress={() => setIsCheck(prev => !prev)}
                checked={isCheck}
                size={20}
                title="Nhớ mật khẩu"
                containerStyle={styles.containerCheckBox}
              />
            </View>
            <View style={styles.textForgetPass}>
              <Text style={{color: colorsStyle.BLACK}}>Quên mật khẩu?</Text>
            </View>
          </View>
          <View style={styles.FormButton}>
            <Button
              loading={loading}
              onPress={() => handleLogin(username, password)}
              title={'Đăng nhập'}
              containerStyle={styles.containerButtonLogin}
              buttonStyle={styles.buttonStyleLogin}
              iconRight
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
            />
          </View>
        </View>
      </View>
      {!IS_IOS && (
        <TouchableOpacity style={styles.ViewRegis}>
          <Text style={styles.TextRegis}>
            Bạn chưa có tài khoản?{' '}
            <Text style={styles.TextRegister}>Đăng kí</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsStyle.WHITE,
  },
  form: {
    flex: 1,
    padding: 5,
    alignItems: ScreenWidth > SM_SIZE ? 'center' : 'flex-start',
  },
  Formtitle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: ScreenWidth > SM_SIZE ? 'center' : 'flex-start',
  },
  Texttitle: {
    fontSize: FontSize(15),
    fontWeight: 'bold',
    color: colorsStyle.BACK,
  },
  TitleLogin: {
    fontSize: FontSize(23),
    fontWeight: 'bold',
    color: colorsStyle.BACK,
    paddingVertical: 5,
  },
  InputForm: {
    paddingTop: 2,
    width: ScreenWidth < SM_SIZE ? '100%' : '50%',
  },
  input: {
    height: ScreenWidth < SM_SIZE ? RatioHeight(50) : RatioHeight(50),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    paddingLeft: 39,
    fontSize: FontSize(15),
    color: colorsStyle.BLACK,
  },
  ViewInput: {},
  ViewIcon: {
    position: 'absolute',
    top: ScreenWidth < SM_SIZE ? RatioHeight(28) : RatioHeight(23),
    left: ScreenWidth < SM_SIZE ? RatioWidth(23) : RatioWidth(10),
  },
  ViewIconRight: {
    position: 'absolute',
    top: ScreenWidth < SM_SIZE ? RatioHeight(28) : RatioHeight(23),
    right: RatioWidth(23),
  },
  FormButton: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 15,
  },
  buttonStyleLogin: {
    paddingHorizontal: 15,
    paddingVertical: ScreenWidth < SM_SIZE ? RatioWidth(14) : RatioWidth(8),
    backgroundColor: colorsStyle.BACK,
  },
  ViewRegis: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
  TextRegis: {
    color: colorsStyle.BLACK,
  },
  textForgetPass: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
    color: colorsStyle.BLACK,
  },
  viewFormCheckBox: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  viewCheckBox: {width: '50%', flexDirection: 'row', paddingLeft: 0},
  containerCheckBox: {
    borderWidth: 0,
    padding: 0,
    backgroundColor: colorsStyle.WHITE,
  },
  containerButtonLogin: {
    borderRadius: 20,
    width: ScreenWidth < SM_SIZE ? RatioWidth(130) : '100%',
  },
  TextRegister: {
    color: colorsStyle.BACK,
    fontSize: FontSize(15),
    fontWeight: 'bold',
  },
  sideMenuProfileIcon: {
    resizeMode: 'cover',
    width: 170,
    height: 170,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 20,
    marginVertical: 15,
  },
});

export default Login;
