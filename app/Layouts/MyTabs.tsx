import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favs from '../Screens/Favs';
import New from '../Screens/New';

const Tab = createMaterialTopTabNavigator();

function Tobtabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="فروش" component={Favs}
        options={{
   
          tabBarStyle:{ backgroundColor: '#ffff' },

          // tabBarStyle: { backgroundColor: "#fff",  },
          tabBarIndicatorStyle: { backgroundColor: "#6c9c3c" },
          tabBarLabelStyle: { fontFamily: "IRANYekan" },
        }}
      />
      <Tab.Screen name="اجاره" component={New}
        options={{
          tabBarIndicatorStyle: { backgroundColor: "#6c9c3c"  },
          tabBarLabelStyle:{fontFamily: "IRANYekan"},}}
      
      />
    </Tab.Navigator>
  );
} export default Tobtabs;