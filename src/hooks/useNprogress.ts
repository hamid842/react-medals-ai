import {useEffect} from 'react';
import {useRouter} from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

nProgress.configure({showSpinner: false});

export function useNprogress() {
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeStart', nProgress.start);
        router.events.on('routeChangeError', nProgress.done);
        router.events.on('routeChangeComplete', nProgress.done);

        return () => {
            router.events.off('routeChangeStart', nProgress.start);
            router.events.off('routeChangeError', nProgress.done);
           router.events.off('routeChangeComplete', nProgress.done);
        };
    }, [router]);
}
