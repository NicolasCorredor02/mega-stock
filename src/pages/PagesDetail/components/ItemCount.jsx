import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

function ItemCount() {
  const [count, setCount] = useState(1);
  const handleCountSum = () => {
    setCount(count + 1);
  };

  const handleCountSub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={handleCountSub}
        disabled={count <= 1}
        variant="destructive"
        size="icon"
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Input
        type="number"
        className="w-16 text-center"
        value={count}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          setCount(Math.max(0, newValue));
        }}
      />
      <Button onClick={handleCountSum} size="icon">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}

export default ItemCount;
