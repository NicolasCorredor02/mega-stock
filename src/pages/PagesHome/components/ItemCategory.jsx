import CardCategory from "@/components/ui/CardCategory";

function ItemCategory({ categories }) {
  return (
    <>
      {categories.map((category, index) => (
        <CardCategory key={index} category={category} />
      ))}
    </>
  );
}

export default ItemCategory;
