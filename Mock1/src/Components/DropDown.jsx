import React from "react";

function DropDown({ options }){
    return (
        <div>
            <select>
                <option>Bộ lọc</option>
                {options.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;