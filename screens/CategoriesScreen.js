import { CATEGORIES } from "../data/dummy-data";
import { View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}) {
    function renderCategroryItem(itemData) {
        function pressHandler() {
      navigation.navigate('MealsOverview');
        }
      
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
          />
        );
      }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategroryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
