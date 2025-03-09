import React from "react";
import Input from "./core/Input";

const HowMuchIsItInput: React.FC = () => {
  return (
    <div>
      <Input inputType='number' placeholder='How much is it?' value={''}/>
    </div>
  );
}

export default HowMuchIsItInput;