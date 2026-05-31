import { writable } from 'svelte/store'

export const _page = writable<'best' | 'new' | 'recent' | 'old'>('best')
