import { Button } from "@/components/ui/button";
import { StorageCondition as TStorageCondition } from "../../types/fridge";

interface Props {
  storageCondition: string;
  onChange: (storageCondition: TStorageCondition) => void;
}

const StorageCondition = ({ storageCondition, onChange }: Props) => {
  return (
    <div className="h-32 flex items-center">
      <p className=" w-1/2">보관장소</p>
      <div className="w-1/2 flex justify-center gap-8 text-label-xs">
        <Button
          onClick={() => onChange("냉장")}
          variant={"ghost"}
          className={`flex items-center justify-center grow ${storageCondition === "냉장" ? "text-foundation-primary" : ""}`}
        >
          냉장
        </Button>
        <Button
          onClick={() => onChange("냉동")}
          variant={"ghost"}
          className={`flex items-center justify-center grow ${storageCondition === "냉동" ? "text-foundation-primary" : ""}`}
        >
          냉동
        </Button>
        <Button
          onClick={() => onChange("실온")}
          variant={"ghost"}
          className={`flex items-center justify-center grow ${storageCondition === "실온" ? "text-foundation-primary" : ""}`}
        >
          실온
        </Button>
      </div>
    </div>
  );
};

export default StorageCondition;
