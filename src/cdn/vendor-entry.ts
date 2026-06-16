/**
 * CDN vendor chunk — React + ReactDOM on `window` for the app IIFE externals.
 */
import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import * as jsxRuntime from 'react/jsx-runtime'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'

declare global {
  interface Window {
    WoodsPortalVendor?: {
      React: typeof React
      ReactDOM: typeof ReactDOM
      ReactDOMClient: typeof ReactDOMClient
      jsxRuntime: typeof jsxRuntime
      jsxDevRuntime: typeof jsxDevRuntime
    }
  }
}

window.WoodsPortalVendor = {
  React,
  ReactDOM,
  ReactDOMClient,
  jsxRuntime,
  jsxDevRuntime,
}
