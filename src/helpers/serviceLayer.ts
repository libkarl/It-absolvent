import { Article } from '../pages/BlogApp/BlogApp'
import { setQueryByName } from './functions'

const getServerUrl = process.env.REACT_APP_BACKEND_URL

export const fetchRequest = {
  blog: {
    getAllArticles: async () => {
      const response = await fetch(`${getServerUrl}articles`)
      if (!response.ok) throw new Error('Data fetch error')
      return (await response.json()) as Article[]
    },
    addNewPost: async (post: { title: string; text: string; category: string }) => {
      const response = await fetch(`${getServerUrl}articles`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post),
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as Article
    },
    getArticleBySlug: async (slug: string) => {
      const response = await fetch(`${getServerUrl}articles/${slug}`)
      if (!response.ok) throw new Error('Server side error')
      var resp = await response.json()
      return resp as Article
    },
    updateArticleBySlug: async (post: {
      slugToUpdate: string
      updateText: string
      category: string
      title: string
    }) => {
      const response = await fetch(`${getServerUrl}articles/${post.slugToUpdate}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post),
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as Article
    },
    deleteArticleBySlug: async (slug: string) => {
      const response = await fetch(`${getServerUrl}articles/${slug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw new Error('Server side error')
      return (await response.json()) as Article
    },
  },
}
