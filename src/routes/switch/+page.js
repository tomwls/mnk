import { supabase } from '$lib/supabase';

export async function load() {
	const { data, error } = await supabase.from('games').select('*').eq('platform', 'switch');

	return {
		games: data ?? [],
		error
	};
}
