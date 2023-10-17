import '@/styles/globals.scss';
import 'normalize.css/normalize.css';
import '@/styles/theme.scss';
import type { AppProps } from 'next/app';

import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
