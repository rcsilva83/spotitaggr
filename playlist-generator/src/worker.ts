/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Generator } from "./generator";
import { SpotifyClient } from "./spotify.client";
import { Buffer } from 'node:buffer';

globalThis.Buffer = Buffer

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	SPOTIFY_CREDENTIALS: KVNamespace;
	
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
	//
	// Example binding to a D1 Database. Learn more at https://developers.cloudflare.com/workers/platform/bindings/#d1-database-bindings
	// DB: D1Database
}

export default {
	// The scheduled handler is invoked at the interval set in our wrangler.toml's
	// [[triggers]] configuration.
	async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
		let clientId = await env.SPOTIFY_CREDENTIALS.get("clientId")
		let acessToken = await env.SPOTIFY_CREDENTIALS.get("acessToken")!
		let refreshToken = await env.SPOTIFY_CREDENTIALS.get("refreshToken")!

		const spotify = new SpotifyClient(clientId!, acessToken!, refreshToken!);

		const gen = new Generator(spotify)
		gen.generatePlaylist("4eyu0emr8qYu18RYsKArqZ", ["#rock", "#pop"])
					.then(() => new Response(null, {status : 200}))
	},
	async fetch(req: Request, env: Env): Promise<Response> {
		let clientId = await env.SPOTIFY_CREDENTIALS.get("clientId")
		let acessToken = await env.SPOTIFY_CREDENTIALS.get("acessToken")!
		let refreshToken = await env.SPOTIFY_CREDENTIALS.get("refreshToken")!

		const spotify = new SpotifyClient(clientId!, acessToken!, refreshToken!);

		const gen = new Generator(spotify)
		return gen.generatePlaylist("4eyu0emr8qYu18RYsKArqZ", ["#rock", "#pop"])
					.then(() => new Response(null, {status : 200}))
	}
};
