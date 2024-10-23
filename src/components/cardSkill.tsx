import type React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";

interface cardProps {
  title: string;
  color?: string;
  type: string;
  effectColor: string
}

const CardSkill: React.FC<cardProps> = ({ title, type, color, effectColor }) => {
  return (
    <>
      <Card
        id="card"
        className={`lg:bg-[#062A66] ${color} text-white border-0 w-[40vw] h-[28vh] rounded-3xl p-5 flex flex-col justify-between cursor-pointer z-50 ${effectColor} group`}
      >
        <div
          className={`absolute -top-8 -right-10 h-[35%] w-[25%] ${color} rounded-full`}
        >
          s
        </div>
        <CardTitle className="lg:text-[1.8vw]">{title}</CardTitle>
        <CardDescription className="text-gray-400 group-hover:text-white transition-colors duration-[0.4s]">{type}</CardDescription>
      </Card>
    </>
  );
};

export default CardSkill;
