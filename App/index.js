import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from './screens';


// Cấu trúc của một navigator luôn được bọc trong một thẻ <NavigationContainer> (1)
// Trong thẻ (1) lại được bọc trong một cái <abc.Navigatoir> rồi sau đó là <abc.Screen>
// Cách 1
const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Register" component={Register} />
  </MainStack.Navigator>
);

// const ModalStack = createStackNavigator();
// const ModalStackScreen = () => (
//   <ModalStack.Navigator mode="modal">
//     <ModalStack.Screen
//       name="Main"
//       component={MainStackScreen}
//       options={{ headerShown: false }}
//     />
//     <ModalStack.Screen
//       name="CurrencyList"
//       component={CurrencyList}
//       // Đổi tên header cho từng trang khác nhau bằng options
//       options={({ navigation, route }) => ({
//         //route đóng vai trò như navigation (VD: Navigation.pop()) 
//         //route.params sẽ giúp ta truy cập vào thông tin title từng trang mà ta đặt code ở bên trang home thẻ <ConversionInput>
//         //Ta nên có thêm điều kiện là route.params để nó sẽ lấy tên component mặc định khi ta ko set title 
//         title: route.params && route.params.title,
//         headerLeft: null,
//         headerRight: () => (
//           <TouchableOpacity
//             onPress={() => navigation.pop()}
//             style={{ paddingHorizontal: 10 }}
//           >
//             <Entypo name="cross" size={30} color={colors.blue} />
//           </TouchableOpacity>
//         ),
//       })}
//     />
//   </ModalStack.Navigator>
// );

export default function App () {
  return (
  <NavigationContainer>
      <MainStackScreen />
  </NavigationContainer>
)};

