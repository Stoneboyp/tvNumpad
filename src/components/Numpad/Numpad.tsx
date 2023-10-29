import React, { useState } from "react";
import InputMask from "react-input-mask";
import QrCode from "../QrCode/QrCode";

interface Props {
    showNumPad: boolean;
    setShowNumPad: React.Dispatch<React.SetStateAction<boolean>>;
}
const Numpad: React.FC<Props> = ({ showNumPad, setShowNumPad }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isPrivacy, setIsPrivacy] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);

    const handlePhoneNumberChange = () => {
        if (isPrivacy || isValid) {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "Dhl6RgZ1KnuP2YuErr4H99G6PQzvP85C");

            var requestOptions = {
                method: "GET",
                redirect: "follow",
                headers: myHeaders,
            };
            fetch(
                `https://api.apilayer.com/number_verification/validate?number=+7${phoneNumber}`,
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    setIsValid(data.valid);
                })
                .catch((error) => console.error("Error:", error));
        }
    };
    const handleButtonClick = (value: string) => {
        if (phoneNumber.length <= 9) {
            setPhoneNumber((prev) => prev + value);
        }
    };
    return (
        <div className="max-w-sm max-h-full flex flex-col justify-around  bg-[#86D3F4] text-[#000000]">
            <div className="h-[150px] justify-between flex flex-col items-center">
                <p className="text-center">
                    Введите ваш номер <br></br>мобильного телефона
                </p>
                <InputMask
                    mask="+7(999)999-99-99"
                    className="w-[250px] text-4xl text-center bg-inherit text-black "
                    placeholder="+7(___)___-__-__"
                    value={phoneNumber}
                    disabled
                />
                <p className="text-xs max-w-xs text-center mt-2">
                    и с Вами свяжется наш менеджер для <br></br> дальнейшей
                    консультации<br></br>
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto ">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Стереть", 0].map(
                    (item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (item === "Стереть") {
                                    setPhoneNumber((prev) => prev.slice(0, -1));
                                } else {
                                    handleButtonClick(item);
                                }
                                setClickedButton(item);
                            }}
                            className={
                                item === "Стереть"
                                    ? "btn border border-black col-span-2"
                                    : `w-[88px] btn border border-black ${
                                          clickedButton === item
                                              ? "bg-black text-white "
                                              : ""
                                      }`
                            }
                        >
                            {item}
                        </button>
                    )
                )}
            </div>
            <div className="flex flex-col items-center mb-5">
                {isValid ? (
                    <div className="flex items-center justify-evenly">
                        <button
                            onClick={() => setIsPrivacy((prev) => !prev)}
                            className="border border-black w-10 h-10 flex items-center justify-center"
                            type="submit"
                        >
                            {isPrivacy && <span className="text-4xl">✓</span>}
                        </button>
                        <p className="text-[#565656] w-1/2">
                            Согласие на обработку персональных данных
                        </p>
                    </div>
                ) : (
                    <p className="text-red-500">НЕВЕРНО ВВЕДЁН НОМЕР</p>
                )}
                <button
                    onClick={handlePhoneNumberChange}
                    className="w-[284px] col-span-3 border border-black text-[#565656] my-3 mt-5"
                >
                    <p>Подтвердить номер</p>
                </button>
            </div>
            <div className="absolute top-0 right-0 mr-5">
                <button
                    onClick={() => setShowNumPad((prev) => !prev)}
                    className="w-[80px] h-12 border border-black"
                >
                    X
                </button>
            </div>
            <div className="absolute right-0 bottom-0 flex mr-5 mb-5">
                <p className="max-w-[100px] ">
                    Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
                </p>
                <QrCode />
            </div>
        </div>
    );
};

export default Numpad;
