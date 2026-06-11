export interface Event {
  id: string
  title: string
  slug: string
  description: string
  type: 'EVENT' | 'INSTALLATION' | 'INTERVIEW' | 'TALK'
  date: string
  coverImage: string
}
