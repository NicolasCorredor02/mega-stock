import CardCategory from "@/components/ui/CardCategory";

function ItemCategory({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <CardCategory key={categories.indexOf(category)} category={category} />
      ))}
    </>
  );
}

export default ItemCategory;
