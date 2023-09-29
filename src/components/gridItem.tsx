import * as fakeDatabase from "@/fakeDatabase"
import React from "react"
import Link from "next/link"
import Image from "next/image"


interface gridItemProps {
    id: number;
}

export default function GridItem({ id }: gridItemProps) {
    const gridItem = fakeDatabase.getItem(id)
    return (
        <div key={id} className='flex flex-wrap shadow rounded-md'>
            <div className="rounded-full overflow-hidden w-10 h-10">
                <img className="object-cover object-center w-10 h-10" src={gridItem?.imageUrl ?? "undefined"}  alt="" />
            </div>
            <Link href={`/items/${id}`}>
                <div className="w-4/5">
                    <p>{gridItem?.name}</p>
                    <p>{gridItem?.price}</p>
                </div>
            </Link>
        </div>
    )
}