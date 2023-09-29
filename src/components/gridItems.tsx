import React from "react"
import Link from "next/link"
import Image from "next/image"
import GridItem from "./gridItem"
import { db } from "@/db/index"
import { items } from "@/db/schema/items"
import { eq, lt, gte, ne } from "drizzle-orm";




export default async function GridItems() {
    const gridItems = await db.select().from(items)
    
    const gridItemsFeed = gridItems.map(gridItem =>
        <GridItem key={gridItem.id} id={gridItem.id}></GridItem>
        )
    return (
        <div>
        {gridItemsFeed}
      </div>
    )
}