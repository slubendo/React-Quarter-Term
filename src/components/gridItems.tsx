import * as fakeDatabase from "@/fakeDatabase"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import GridItem from "./gridItem"




export default function GridItems() {
    const gridItems = fakeDatabase.allItems()
    const gridItemsFeed = gridItems.map(gridItem =>
        <GridItem key={gridItem.id} id={gridItem.id}></GridItem>
        )
    return (
        <div>
        {gridItemsFeed}
      </div>
    )
}