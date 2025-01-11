import CardCategory from "@/components/ui/CardCategory";

function ItemCategory({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <CardCategory key={category.id} category={category} />
      ))}
    </>
  );
}

export default ItemCategory;
