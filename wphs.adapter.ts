import type { HubSpotKitAdapter } from '@woodsportal/hubspot-kit'
const adapter: HubSpotKitAdapter = {
  syncLiveData(built) {
    ;(window as Window & { __WPHS_DATA__?: Record<string, unknown> }).__WPHS_DATA__ = built
  },
}
export default adapter
