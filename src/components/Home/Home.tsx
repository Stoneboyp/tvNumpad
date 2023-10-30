import React, { useState } from "react";
import QrCode from "../QrCode/QrCode";
import Numpad from "../Numpad/Numpad";
import Video from "./Video/Video";

const Home: React.FC = () => {
    const [showNumPad, setShowNumPad] = useState(true);
    return (
        <div>
            <Video />
            <div className="w-[1280px] h-[720px] flex bg-transparent relative">
                {showNumPad && (
                    <div className="absolute top-1/2 right-[11%] transform translate-x-1/2 -translate-y-1/2">
                        <div className="max-w-xs h-96 bg-[#86D3F4] flex flex-col items-center justify-around">
                            <h1 className="text-lg text-center">
                                ИСПОЛНИТЕ МЕЧТУ ВАШЕГО
                                <br /> МАЛЫША!
                                <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
                            </h1>
                            <QrCode />
                            <p>Сканируйте QR-код или нажмите ОК</p>
                            <button
                                onClick={() => setShowNumPad((prev) => !prev)}
                                className="w-40"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
                {!showNumPad && (
                    <Numpad
                        showNumPad={showNumPad}
                        setShowNumPad={setShowNumPad}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
