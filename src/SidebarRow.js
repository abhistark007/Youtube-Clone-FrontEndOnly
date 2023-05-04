import React from 'react'

function SidebarRow({ selected,text, Icon }) {

    return (
        <div className={`flex justify-start gap-5 px-3 py-2 items-center cursor-pointer 
        hover:bg-gray-400 duration-200 ease-in-out mx-3 hover:rounded-full select-none group 
        ${selected && "bg-gray-400 rounded-full"}`}
        >
            <Icon className={`group-hover:text-red-600 duration-200 ease-in-out ${selected && "text-red-600"}`} />
            <p className={`group-hover:font-bold duration-200 ease-in-out ${selected && "font-bold"}`}>{text}</p>
        </div>
    )


}

export default SidebarRow