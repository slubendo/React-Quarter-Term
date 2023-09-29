import React from "react"
import Link from "next/link"
import Image from "next/image"
import { db } from "@/db/index"
import { Item } from "@/db/schema/items"
import { items } from "@/db/schema/items";
import { eq, lt, gte, ne } from "drizzle-orm";





interface ItemProps {
    id: number;
}

export default async function Item({ id }: ItemProps) {

    const fetch = await db.select().from(items).where(eq(items.id, id))
    const item = fetch[0]

    return (
        <div className='flex flex-wrap shadow rounded-md'>
            <div className="rounded-full overflow-hidden w-10 h-10">
                <img className="object-cover object-center w-10 h-10" src={item.imageUrl} alt="" />
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