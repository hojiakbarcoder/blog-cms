import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByCategory = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				blog {
					description
					author {
						name
						image {
							url
						}
						bio
					}
					content {
						html
					}
					createdAt
					image {
						url
					}
					slug
					tag {
						name
						slug
					}
					category {
						name
						slug
					}
					title
				}
				name
			}
		}
	`

	const { category } = await request<{
		category: { blog: IBlog[]; name: string }
	}>(graphqlAPI, query, { slug })
	return category
}
