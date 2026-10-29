import type { Metadata } from "next";
import Link from "next/link";
import {
  YouTubeIcon,
  ShieldCheckIcon,
  LockIcon,
  EyeOffIcon,
  CheckCircleIcon,
  LayersIcon,
  ExternalLinkIcon,
  ListIcon,
  BookmarkIcon,
  ClockIcon,
  SlidersIcon,
  ChromeIcon,
  PlayIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy - Floatube YouTube Floating Player Extension",
  description: "Official Privacy Policy and Permission Disclosures for the Floatube Chrome Extension according to its codebase.",
};

export default function PrivacyPage() {
  const lastUpdated = "October 29, 2026";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* Navigation Header */}
      <header className="border-b border-zinc-800/80 bg-zinc-900/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              <YouTubeIcon size={22} />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white block">Floatube</span>
              <span className="text-xs text-zinc-400 block -mt-1">Extension Privacy Policy</span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Home & Features
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-xs border border-zinc-700">
              <ShieldCheckIcon size={14} className="text-emerald-400" />
              <span>Verified Policy</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 flex-1 w-full space-y-12">
        {/* Title Section */}
        <div className="border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
            <ShieldCheckIcon size={14} className="text-emerald-400" />
            <span>Codebase-Accurate Disclosure</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Privacy Policy & Data Disclosures
          </h1>
          <p className="mt-3 text-zinc-400 text-sm">
            Last updated: <span className="text-zinc-200 font-medium">{lastUpdated}</span> · Extension: <code className="bg-zinc-800 px-2 py-0.5 rounded text-zinc-200 text-xs font-mono">Floatube (v1.0.0)</code>
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3 ring-1 ring-white/5">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <CheckCircleIcon size={22} className="text-emerald-400 shrink-0" />
            <h2>Zero Data Collection & 100% Local Storage</h2>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Floatube operates with a strict <strong>zero remote data collection architecture</strong>. 
            The extension does <strong>not</strong> operate remote user databases, does <strong>not</strong> transmit telemetric data to external tracking servers, and does <strong>not</strong> collect personal identifiers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
              <span className="font-semibold text-white block mb-0.5">No Remote Servers</span>
              <span className="text-zinc-400 text-[11px]">No external APIs or analytics SDKs receive your data.</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
              <span className="font-semibold text-white block mb-0.5">Local Storage Only</span>
              <span className="text-zinc-400 text-[11px]">Preferences stay purely on your device in <code className="text-zinc-300">chrome.storage.local</code>.</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
              <span className="font-semibold text-white block mb-0.5">Zero Ads or Sales</span>
              <span className="text-zinc-400 text-[11px]">Your history and bookmarks are never sold or shared.</span>
            </div>
          </div>
        </div>

        {/* Section 1: Exact Storage Schema */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <LayersIcon size={20} className="text-blue-400" />
            <span>1. Exact Data Stored Locally on Your Machine</span>
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            In compliance with Google Chrome Web Store User Data Policies, here is the exact breakdown of the data schema stored inside your browser&apos;s isolated <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-zinc-200">chrome.storage.local</code>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <SlidersIcon size={16} className="text-blue-400" />
                <span>User Settings (<code className="text-xs text-zinc-400">settings</code>)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stores your preferred playback rate (0.25x–2.0x), default volume, size presets (Small, Medium, Large), player opacity (30%–100%), auto-hide control timers, theme (Dark, Light, System), and behavior toggles (Minimize to Bubble, Focus Mode, Audio-Only Mode).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ListIcon size={16} className="text-emerald-400" />
                <span>Video Queue (<code className="text-xs text-zinc-400">queue</code>)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stores videos you manually add to your queue (Video ID, title, channel, duration, and thumbnail URL) to allow auto-playing the next video.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ClockIcon size={16} className="text-amber-400" />
                <span>Watch Later (<code className="text-xs text-zinc-400">watchLater</code>)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stores video links you mark to watch later. Completely private to your browser and not synchronized with any external server.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <BookmarkIcon size={16} className="text-purple-400" />
                <span>Timestamp Bookmarks (<code className="text-xs text-zinc-400">bookmarks</code>)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stores your saved timestamps with custom notes and labels (<kbd className="px-1 rounded bg-zinc-800 text-[10px]">Alt + B</kbd>) so you can jump back to specific moments in tutorials or podcasts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <PlayIcon size={16} className="text-rose-400" />
                <span>Continue Watching (<code className="text-xs text-zinc-400">continueWatching</code>)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stores your last watched timestamp and progress percentage for recent videos so you can resume where you left off.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <ChromeIcon size={16} className="text-cyan-400" />
                <span>Window Coordinates (<code className="text-xs text-zinc-400">playerPosition</code> & <code className="text-xs text-zinc-400">playerSize</code>)</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Saves the X and Y coordinates and width/height of the floating player on screen so it stays in your preferred position.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Permissions Justification */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <LockIcon size={20} className="text-red-400" />
            <span>2. Manifest Permissions & Exact Technical Justification</span>
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Every permission declared in Floatube&apos;s <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-zinc-200">manifest.json</code> is strictly limited to enabling player functionality:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">storage</span>
                <span className="text-xs text-zinc-500">chrome.storage API</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Why needed:</strong> Enables reading and saving local settings, queues, bookmarks, and player coordinates strictly on your local computer.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">activeTab & tabs</span>
                <span className="text-xs text-zinc-500">chrome.tabs API</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Why needed:</strong> Used only when interacting with the extension to check if the currently active tab is playing a YouTube video (<code className="text-zinc-300">youtube.com/watch</code> or <code className="text-zinc-300">youtube.com/shorts</code>), allowing the popup to display current video info and control playback.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">scripting</span>
                <span className="text-xs text-zinc-500">chrome.scripting API</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Why needed:</strong> Injects the Picture-in-Picture trigger and floating UI overlay scripts into the YouTube page when requested by the user.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">contextMenus</span>
                <span className="text-xs text-zinc-500">chrome.contextMenus API</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Why needed:</strong> Creates 3 right-click context menu shortcuts on YouTube links and video pages: <em>&quot;Open in Floating Player&quot;</em>, <em>&quot;Add to Queue&quot;</em>, and <em>&quot;Watch Later&quot;</em>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">nativeMessaging (Optional)</span>
                <span className="text-xs text-zinc-500">chrome.runtime.connectNative</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Why needed:</strong> Communicates with the optional local Electron companion app (<code className="text-zinc-300">com.floatube.companion</code>) via standard local OS standard input/output pipes (<code className="text-zinc-300">stdin/stdout</code>) for true system-wide always-on-top window display. No network communication is involved.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">host_permissions (*://*.youtube.com/*)</span>
                <span className="text-xs text-zinc-500">Scope Restriction</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Why needed:</strong> Strictly restricted to <code className="text-zinc-300">youtube.com</code> domains. Floatube has zero permission or capability to read, monitor, or interact with any non-YouTube website you visit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Third Party & YouTube Terms */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <YouTubeIcon size={20} className="text-red-500" />
            <span>3. YouTube API & Third-Party Interaction</span>
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Floatube operates on top of YouTube using standard web video elements and official YouTube IFrame embeds:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-300">
            <li>
              When you watch a video, YouTube&apos;s standard content delivery rules and policies apply. View YouTube&apos;s official <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-400 underline inline-flex items-center gap-1">Google Privacy Policy <ExternalLinkIcon size={11} /></a> and <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-red-400 underline inline-flex items-center gap-1">YouTube Terms of Service <ExternalLinkIcon size={11} /></a>.
            </li>
            <li>
              Floatube does not bypass advertisements, does not download copyrighted videos to disk, and does not harvest private user tokens or cookies.
            </li>
          </ul>
        </section>

        {/* Section 4: Data Deletion */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">4. How to Delete All Stored Data</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Because all data is stored exclusively on your device, you have immediate, permanent control:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="font-semibold text-white block mb-1">Within the Extension:</span>
              <p className="text-zinc-400">
                Click the extension icon &gt; Settings &gt; scroll to <strong>DATA</strong> &gt; click <em>&quot;Clear Queue&quot;</em>, <em>&quot;Clear Watch Later&quot;</em>, or <em>&quot;Reset All Settings&quot;</em>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="font-semibold text-white block mb-1">By Uninstalling:</span>
              <p className="text-zinc-400">
                Removing Floatube from <code className="bg-zinc-800 px-1 rounded text-zinc-200">chrome://extensions/</code> immediately and permanently purges all saved local data and preferences from your device.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">5. Children&apos;s Privacy (COPPA Compliance)</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Floatube does not collect any personal data from anyone, including children under the age of 13.
          </p>
        </section>

        {/* Section 6: Contact */}
        <section className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
          <h2 className="text-lg font-bold text-white">6. Contact & Support</h2>
          <p className="text-sm text-zinc-400">
            For questions regarding this privacy policy or the Floatube Chrome Extension, please contact:
          </p>
          <p className="text-sm text-zinc-200 font-medium">
            Developer Support: <span className="text-red-400 font-mono">support@apnichoice.com</span>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <YouTubeIcon size={16} className="text-red-500" />
            <span>© {new Date().getFullYear()} Floatube. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-zinc-300 transition-colors">Home & Features</Link>
            <Link href="/privacy" className="text-zinc-300 font-medium hover:underline inline-flex items-center gap-1">
              <ShieldCheckIcon size={14} className="text-emerald-400" />
              <span>Privacy Policy</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
