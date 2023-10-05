import { ClerkProvider } from "@clerk/nextjs"
import '../globals.css'
import { PUBLISHABLE_KEY } from "@clerk/nextjs/server"

export const metadata = {
    title: 'MoviesForYou',
    description: 'App for browsing and rating movies'
}

export default function RootLayout({ children 
}: { 
    children: React.ReactNode
}) {
    return ( 
    <ClerkProvider>
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    </ClerkProvider>
        
    )
}