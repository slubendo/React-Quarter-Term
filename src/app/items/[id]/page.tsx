import Link from 'next/link'
import Item from '@/components/item'

import * as fakeDatabase from '@/fakeDatabase'

export default function ItemPage({ params }: { params: { id: string } }) {
return (
<div>
  <Item id={Number(params.id)}></Item>
</div>
    )
  }