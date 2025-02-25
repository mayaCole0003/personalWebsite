import { Text, Image, View, TouchableOpacity } from 'react-native';
import splashIcon from '../../../assets/graphics/splash-icon.png';

export default function ProductCard({ item }) {
  const defaultItem = { title: "Hairbrush", user: "Emma Phillips"  };
  const product = item || defaultItem;

  return (
    <TouchableOpacity>
    <View style={{
      width: "140%",
      height: "25%",
      backgroundColor: "transparent",
      padding: 10,
      shadowOpacity: 0.1,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    }}>
      {/* Image */}
      <Image 
        source={splashIcon} 
        style={{ 
          width: "100%", 
          height: "70%", 
          borderTopLeftRadius: 12, 
          borderTopRightRadius: 12 
        }} 
      />

      <View style={{alignItems: "flex-start" }}>
        <Text style={{ 
          fontSize: 20, 
          fontWeight: "bold", 
          letterSpacing: -0.5, 
          color: "#ffffff",
          marginBottom: 8, 
          textAlign: 'left'
        }}>
          {product.title}
        </Text>

        <Text style={{ 
          fontSize: 14, 
          color: "#ffffff", 
          marginBottom: 12,
          textAlign: 'left',
          }}>
          {product.user}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}