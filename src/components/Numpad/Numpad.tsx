import React from "react";
import InputMask from "react-input-mask";

interface Props {}

const Numpad: React.FC<Props> = ({}) => {
    return (
        <div className="max-w-sm max-h-full flex flex-col justify-around  bg-[#86D3F4] text-[#000000]">
            <div className="flex flex-col items-center mb-4">
                <p>Введите ваш номер мобильного телефона</p>
                <InputMask
                    mask="+7 (999) 999-99-99"
                    maskChar="_"
                    className="max-w-[200px] text-2xl text-center bg-transparent text-black"
                    placeholder="+7(___)___-__-__"
                />
                <p className="text-xs max-w-xs text-center mt-2">
                    и с Вами свяжется наш менеджер для <br></br> дальнейшей
                    консультации<br></br>
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Стереть", 0].map(
                    (item, index) => (
                        <button
                            key={index}
                            className={
                                item === "Стереть"
                                    ? "btn border border-black col-span-2"
                                    : "w-[88px] btn border border-black"
                            }
                        >
                            {item}
                        </button>
                    )
                )}
            </div>
            <div className="flex flex-col items-center mb-5">
                <div className="flex items-center justify-evenly">
                    <button
                        className="border border-black w-12 h-12"
                        type="submit"
                    ></button>
                    <p className="text-[#565656] w-1/2">
                        Согласие на обработку персональных данных
                    </p>
                </div>
                <button className="w-[284px] col-span-3 border border-black text-[#565656] my-3">
                    Подтвердить номер
                </button>
            </div>
        </div>
    );
};

export default Numpad;
