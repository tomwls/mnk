import { supabase } from '$lib/supabase';

export async function load() {
	const [gamesRes, totalGamesRes, xboxRes, ps5Res, switchRes] = await Promise.all([
		supabase.from('games').select('*').order('name'),

		supabase.from('games').select('*', { count: 'exact', head: true }),
		supabase.from('games').select('*', { count: 'exact', head: true }).eq('platform', 'xbox'),
		supabase.from('games').select('*', { count: 'exact', head: true }).eq('platform', 'ps5'),
		supabase.from('games').select('*', { count: 'exact', head: true }).eq('platform', 'switch')
	]);

	return {
		games: gamesRes.data ?? [],
		totalGames: totalGamesRes.count ?? 0,
		totalXboxGames: xboxRes.count ?? 0,
		totalPs5Games: ps5Res.count ?? 0,
		totalSwitchGames: switchRes.count ?? 0
	};
}
