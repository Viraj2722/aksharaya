import Link from 'next/link'
import { getBlogs } from '@/lib/getBlogs'
import { BlogCard } from '@/components/cards/BlogCard'

export function FeaturedBlogs() {
  const blogs = getBlogs(5)
  const topBlogs = blogs.slice(0, 2)
  const bottomBlogs = blogs.slice(2, 5)

  return (
    <section
      className="py-10 md:py-14"
      style={{ background: '#f2f2f2' }}
      aria-label="Insights and Writings"
    >
      <div className="page-container">
        {/* Header row */}
        <div className="flex items-center justify-between insights-header-container" style={{ marginBottom: '40px' }}>
          <style>{`
            @media (min-width: 768px) {
              .insights-header { height: 39px !important; line-height: 39px !important; font-size: 32px !important; }
            }
            @media (max-width: 767px) {
              .insights-header { font-size: 22px !important; line-height: 1.2 !important; height: auto !important; }
              .insights-header-container { align-items: flex-start !important; }
              .view-all-text { font-size: 16px !important; height: auto !important; margin-top: 3px; }
            }
          `}</style>
          <h2
            className="font-bold insights-header"
            style={{ color: '#111111' }}
          >
            Insights &amp; Writings
          </h2>
          <Link
            href="/events"
            className="group flex items-center font-medium overflow-hidden text-[20px] flex-shrink-0 whitespace-nowrap view-all-text"
            style={{ color: '#111111', height: '24px' }}
          >
            <span className="mr-2">View all</span>
            <div className="relative flex items-center w-5 h-5 overflow-hidden">
              {/* The arrow that slides out to the right */}
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-full">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* The arrow that slides in from the left */}
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

        {/* Top row: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" style={{ marginBottom: '40px' }}>
          {topBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} large />
          ))}
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {bottomBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
