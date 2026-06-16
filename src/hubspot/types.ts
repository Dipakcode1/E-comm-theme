/** Runtime contract for window.hubSpotData (greenfield stub). */
export type HubSpotPortalData = {
  dataSourceSet?: unknown
  hubId?: string | number
  apiBaseUrlOption?: string
  userData?: unknown
  objectList?: unknown[]
  isInEditor?: boolean
}

declare global {
  interface Window {
    hubSpotData?: HubSpotPortalData
  }
}

export {}
