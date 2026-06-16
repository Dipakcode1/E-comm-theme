/**
 * Monolith production entry — single IIFE `module.js` (wp build).
 * Dev overlay uses `src/main.tsx` instead.
 */
import '@/assets/css/main.dev.css'

import { mountPortal } from '@/portal/mount-portal'

void mountPortal()
