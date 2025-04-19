import { ICategoryAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

function CategoriesTagsCard(item: Props) {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl flex flex-col justify-center 
		items-center hover:bg-secondary/80 transition-colors dark:shadow-white/20'
		>
			{item.type === 'tags' ? <Tags /> : <Layers2 />}
			<h1 className='text-xl font-creteRound'>{item.name}</h1>
			<p>{item.blogs.length} blog(s)</p>
		</Link>
	)
}

export default CategoriesTagsCard
