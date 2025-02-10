import React from 'react';

const ItemCardHome = ({ image, heading, description }) => {
    return (
        <div className="flex flex-col items-center w-1/3 mt-0">
            <img
                src={image}
                alt={heading}
            />
            <h2 className="text-xl font-semibold mb-2">{heading}</h2>
            <p className="text-center text-lg">{description}</p>
        </div>

    );
};

export default ItemCardHome;
