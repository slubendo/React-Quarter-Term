import GridItems from "@/components/gridItems";
import { categories } from "@/db/schema/items";


  export default function Home( { searchParams,}: { searchParams: { category?: string }} ) {
    console.log(searchParams.category)
      return (
        <main className="">
          <GridItems searchParams={searchParams?.category ?? "undefined"}></GridItems>
        </main>
      );

  

}
