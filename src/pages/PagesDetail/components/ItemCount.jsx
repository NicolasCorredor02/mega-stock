import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";


function ItemCount({ onCountChange }) {
  const [count, setCount] = useState(1);
  const handleCountSum = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleCountSub = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
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
      <Label className="w-16 text-center">
        {count}
      </Label>
      <Button onClick={handleCountSum} size="icon">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}

export default ItemCount;
