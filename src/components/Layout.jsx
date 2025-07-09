export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
        <main>{children}</main>
        <footer className="mt-10 text-sm bg-gray-100 text-center text-gray-500">
          &copy; 2025 Kotesh-arya
        </footer>
      </div>
    )
  }
  