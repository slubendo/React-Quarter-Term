import GridItems from "@/components/gridItems";
import { categories } from "@/db/schema/items";
import { items, Category, categoryValues } from "@/db/schema/items"



  export default function Home( { searchParams,}: { searchParams: { category: Category }} ) {
    console.log(searchParams.category)
      return (
        <main className="">
          <GridItems searchParams={searchParams.category }></GridItems>
        </main>
      );

  

}
