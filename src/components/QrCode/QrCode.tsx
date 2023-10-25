import React from "react";

interface Props {}

const QrCode: React.FC<Props> = ({}) => {
    return (
        <div className="">
            <img className="max-w-[150px]" src="/qr.png" />
        </div>
    );
};

export default QrCode;
