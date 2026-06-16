import ReactDOM from 'react-dom/client'

import { App } from '@/app'

/** Production mount — same App shell as woodsportal-client-frontend CDN app chunk. */
export async function mountPortal() {
  const root = document.getElementById('app')
  if (!root) {
    return
  }
  ReactDOM.createRoot(root).render(<App />)
}
