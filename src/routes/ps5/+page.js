import { supabase } from '$lib/supabase';

export async function load() {
	const { data, error } = await supabase.from('games').select('*').eq('platform', 'ps5');

	return {
		games: data ?? [],
		error
	};
}
