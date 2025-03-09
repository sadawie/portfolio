import Image from 'next/image'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-64 h-64">
            <Image
              src="/images/profile.jpg" // Replace with your actual image filename
              alt="Profile picture"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            {/* ... rest of your about me content ... */}
          </div>
        </div>
      </div>
    </main>
  )
} 