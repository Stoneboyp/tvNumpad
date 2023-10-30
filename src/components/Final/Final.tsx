import React from "react";

interface Props {}

const Final: React.FC<Props> = ({}) => {
    return (
        <div className="flex flex-col items-center h-full justify-center">
            <div className="text-3xl mb-6 ">ЗАЯВКА ПРИНЯТА</div>
            <p className="text-center text-xs">
                Держите телефон под рукой.<br></br> Скоро с Вами свяжется наш
                менеджер.{" "}
            </p>
        </div>
    );
};

export default Final;
