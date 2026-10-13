// What the studio makes, shared by the home page and the app pages.

export type AppStats = {
    downloads: string
    // Absent until the store shows a rating (Google Play needs enough
    // reviews first).
    rating?: number
    reviews?: number
}

// Google Play figures, checked by hand on 13 Oct 2026. The App Store shows
// no ratings for either app yet. Update these when the numbers move.
export const APP_STATS = {
    readio: { downloads: '10K+', rating: 3.4, reviews: 184 },
    habidots: { downloads: '1K+' },
} satisfies Record<string, AppStats>

export type AppEntry = {
    name: string
    blurb: string
    href: string
    icon: string
    // Picks the card's look; see .app-card--* in globals.css.
    theme: 'readio' | 'habidots' | 'dog'
    live: boolean
    stats?: AppStats
}

export const APPS: AppEntry[] = [
    {
        name: 'Readio',
        blurb: 'PDFs, websites & more, as audiobooks',
        href: '/readio',
        icon: '/readio/icon.jpg',
        theme: 'readio',
        live: true,
        stats: APP_STATS.readio,
    },
    {
        name: 'Habidots',
        blurb: 'Daily habit tracker, one dot at a time',
        href: '/habidots',
        icon: '/habidots/icon.png',
        theme: 'habidots',
        live: true,
        stats: APP_STATS.habidots,
    },
    {
        name: 'Dog on Walk',
        blurb: 'Pet focus timer: your focus, their adventure',
        href: '/dog-on-walk',
        icon: '/dog-on-walk/icon.jpg',
        theme: 'dog',
        live: false,
    },
]

// Categories with nothing public yet show as in the works; give one real
// entries (as Apps, Agents and Skills have) once something ships.
export const UPCOMING = {
    Tools: 'Small, sharp tools for makers and developers.',
} as const

export const OFFERINGS = ['Apps', 'Agents', 'Skills', ...Object.keys(UPCOMING)] as (
    | 'Apps'
    | 'Agents'
    | 'Skills'
    | keyof typeof UPCOMING
)[]

// The latest daily app-ideas report, boiled down for the home page's agent
// card. Built on the server from data/ideas (see lib/ideas.ts).
export type IdeasDigest = {
    date: string
    count: number
    top: {
        id: string
        title: string
        category: string
        painScore: number
        sources: number
    }[]
}
