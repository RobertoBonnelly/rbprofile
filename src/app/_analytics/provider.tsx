// app/providers.js
'use client'
import { useAuth, useUser } from '@clerk/nextjs'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: 'https://us.i.posthog.com'
  })
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
    return <PostHogProvider client={posthog}><PostHogAuthWrapper>{children}</PostHogAuthWrapper></PostHogProvider>
}

function PostHogAuthWrapper({ children} : {children: React.ReactNode}) {
    const auth = useAuth();
    const userInf = useUser();

    useEffect(() => {
        if (userInf.user) {
            posthog.identify(userInf.user.id, {email: userInf.user.emailAddresses[0]?.emailAddress,
                name: userInf.user.fullName,
            });
        } else if(!auth.isSignedIn){
            posthog.reset();
        }
        }, [auth, userInf]);

    return children;
}