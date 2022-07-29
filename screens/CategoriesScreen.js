import { CATEGORIES } from "../data/dummy-data";
import { View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategroryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

function CategoriesScreen() {
  return (
    <View>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategroryItem} numColumns={2}/>
    </View>
  );
}

export default CategoriesScreen;
