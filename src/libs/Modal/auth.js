import { writable } from 'svelte/store';

function store() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((n) => !n),
		reset: () => set(false)
	};
}

export const auth = store();
