import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '@/types/blog'

interface BlogCardProps {
  blog: Blog
  large?: boolean
}

export function BlogCard({ blog, large = false }: BlogCardProps) {
  return (
    <article className="group flex flex-col">
      {/* Cover Image */}
      <style>{`
        @media (min-width: 768px) {
          .blog-large-height { height: 450px !important; }
        }
        @media (max-width: 767px) {
          .blog-large-height { height: 300px !important; }
        }
      `}</style>
      <Link
        href={`/blog/${blog.slug}`}
        className={`group relative block img-zoom rounded-2xl md:rounded-3xl overflow-hidden ${large ? 'blog-large-height' : ''}`}
        aria-label={`Read ${blog.title}`}
        style={{ ...(large ? {} : { aspectRatio: '4/3' }), marginBottom: '12px' }}
      >
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover"
        />
        {/* Hover arrow button */}
        <div className="absolute top-4 right-4 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out shadow-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#111111' }}>
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </Link>

      {/* Meta row: category pill + date */}
      <div className="flex items-center gap-4" style={{ marginBottom: large ? '10px' : '10px' }}>
        <div
          className="flex items-center justify-center font-medium rounded-[100px]"
          style={{ background: '#888888', color: '#ffffff', fontSize: '14px', padding: '0 16px', height: '32px' }}
        >
          {blog.category}
        </div>
        <span className="font-medium" style={{ color: '#111111', fontSize: '14px' }}>
          {blog.date}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`leading-snug mb-1.5 font-medium ${large ? 'text-[22px] md:text-[28px]' : 'text-[18px]'}`}
        style={{ color: '#111111' }}
      >
        <Link href={`/blog/${blog.slug}`} className="hover:underline decoration-1 underline-offset-2">
          {blog.title}
        </Link>
      </h3>

      {/* Excerpt */}
      {large && (
        <p
          className="leading-relaxed"
          style={{ color: '#666666', fontSize: '17px' }}
        >
          {blog.excerpt}
        </p>
      )}
    </article>
  )
}
