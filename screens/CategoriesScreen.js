import { CATEGORIES } from "../data/dummy-data";
import { View, FlatList } from "react-native";
import CategoryGridTyle from "../components/CategoryGridTyle";

function renderCategroryItem(itemData) {
    return <CategoryGridTyle title={itemData.item.title} color={itemData.item.color} />;
}

function CategoriesScreen() {
  return (
    <View>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategroryItem}/>
    </View>
  );
}

export default CategoriesScreen;
