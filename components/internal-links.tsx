import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface InternalLink {
  text: string
  href: string
  description?: string
}

interface InternalLinksProps {
  currentPage: string
  parentLinks?: InternalLink[]
  childLinks?: InternalLink[]
  siblingLinks?: InternalLink[]
}

export function InternalLinks({ currentPage, parentLinks, childLinks, siblingLinks }: InternalLinksProps) {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 面包屑导航 */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-900 font-medium">{currentPage}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 上级链接 */}
          {parentLinks && parentLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Categories</h3>
              <div className="space-y-3">
                {parentLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.text}
                    </div>
                    {link.description && <div className="text-sm text-gray-600 mt-1">{link.description}</div>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 子级链接 */}
          {childLinks && childLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Styles</h3>
              <div className="space-y-3">
                {childLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.text}
                    </div>
                    {link.description && <div className="text-sm text-gray-600 mt-1">{link.description}</div>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 同级链接 */}
          {siblingLinks && siblingLinks.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Styles</h3>
              <div className="space-y-3">
                {siblingLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.text}
                    </div>
                    {link.description && <div className="text-sm text-gray-600 mt-1">{link.description}</div>}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
