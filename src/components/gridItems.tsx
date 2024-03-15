import React from "react"
import Link from "next/link"
import Image from "next/image"
import GridItem from "./gridItem"
import { db } from "@/db/index"
import { items, Category, categoryValues } from "@/db/schema/items"
import { eq, lt, gte, ne } from "drizzle-orm";
import { categories } from "@/db/schema/items"

interface gridItemsProps {
    searchParams: Category;
}


export default async function GridItems({ searchParams }: gridItemsProps) { 
    let gridItems;

    if (categoryValues.includes(searchParams)) {
        gridItems = await db.select().from(items).where(eq(items.category, searchParams));
    } else {
        gridItems = await db.select().from(items);
    }
    
    const gridItemsFeed = gridItems.map(gridItem =>
        <GridItem key={gridItem.id} id={gridItem.id}></GridItem>
        )
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {gridItemsFeed}
      </div>
    )
}