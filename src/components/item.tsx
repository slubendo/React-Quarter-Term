import * as fakeDatabase from "@/fakeDatabase"
import React from "react"
import Link from "next/link"
import Image from "next/image"


interface ItemProps {
    id: number;
}

export default function Item({ id }: ItemProps) {
    const item = fakeDatabase.getItem(id)

    return (
        <div className='flex flex-wrap shadow rounded-md'>
            <div className="rounded-full overflow-hidden w-10 h-10">
                <img className="object-cover object-center w-10 h-10" src={item?.imageUrl ?? "undefined"} alt="" />
            </div>

            <div className="w-4/5">
                <p>{item?.name}</p>
                <p>{item?.category}</p>
                <p>{item?.description}</p>
                <p>{item?.price}</p>
            </div>

        </div>
    )

}