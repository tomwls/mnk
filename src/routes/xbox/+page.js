import { supabase } from '$lib/supabase';

export async function load() {
	const { data: games } = await supabase.from('games').select('*').eq('platform', 'xbox');

	return { games };
}
