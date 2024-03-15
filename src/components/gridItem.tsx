import React from "react"
import Link from "next/link"
import Image from "next/image"
import { db } from "@/db/index"
import { items } from "@/db/schema/items"
import { eq, lt, gte, ne } from "drizzle-orm";


interface gridItemProps {
    id: number;
}

export default async function GridItem({ id }: gridItemProps) {

    const fetch = await db.select().from(items).where(eq(items.id, id))
    const gridItem = fetch[0]

        return (
        <div key={id} className=' flex-wrap shadow rounded-md grid grid-cols-1 md:grid-cols-3'>
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