import Link from "next/link";
import {
  YouTubeIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShortsIcon,
  BookmarkIcon,
  ListIcon,
  LayersIcon,
  KeyboardIcon,
  TerminalIcon,
  ChromeIcon,
  ZapIcon,
  ExternalLinkIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  SpeedometerIcon,
  VolumeHighIcon,
  SlidersIcon,
  MinimizeIcon,
  HeadphonesIcon,
  EyeOffIcon,
  ClockIcon,
  TrashIcon,
  SparklesIcon,
  CheckCircleIcon,
  SettingsIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* Navigation Bar */}
      <header className="border-b border-zinc-800/80 bg-zinc-900/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              <YouTubeIcon size={22} />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white block">Floatube</span>
              <span className="text-xs text-zinc-400 block -mt-1">Floating Player Extension</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features-overview" className="text-zinc-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#settings-breakdown" className="text-zinc-400 hover:text-white transition-colors">
              Settings & Controls
            </a>
            <a href="#shorts-mode" className="text-zinc-400 hover:text-white transition-colors">
              Shorts
            </a>
            <a href="#how-to-use" className="text-zinc-400 hover:text-white transition-colors">
              Installation
            </a>
            <Link
              href="/privacy"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700 transition-colors"
            >
              <ShieldCheckIcon size={14} className="text-emerald-400" />
              <span>Privacy Policy</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section with Live Extension Mockup */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-6 border-b border-zinc-800/60 bg-gradient-to-b from-zinc-900/60 via-zinc-950 to-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-xs font-semibold text-red-400">
              <ZapIcon size={14} />
              <span>All-In-One YouTube Multitasking Suite</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Float, Multitask & Customize Your{" "}
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-500 bg-clip-text text-transparent">
                YouTube Experience
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Floatube is a Chrome Extension designed for high productivity. Watch YouTube videos & Shorts in resizable floating windows, manage custom queues, control opacity, and toggle audio-only mode.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#how-to-use"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 font-semibold text-white text-sm shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <ChromeIcon size={18} />
                <span>Install Extension</span>
              </a>
              <a
                href="#settings-breakdown"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold border border-zinc-700 transition-all"
              >
                <SlidersIcon size={16} />
                <span>Explore Features</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon size={14} className="text-emerald-400" /> 100% Local Storage
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon size={14} className="text-emerald-400" /> Zero Telemetry
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon size={14} className="text-emerald-400" /> Manifest V3
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Extension Popup Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-left ring-1 ring-white/10">
              {/* Extension Popup Top Bar */}
              <div className="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-500/30">
                    FL
                  </div>
                  <span className="font-semibold text-sm text-white">Floatube</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ready
                  </span>
                </div>
                <div className="p-1 rounded text-zinc-400 hover:text-white">
                  <SettingsIcon size={16} />
                </div>
              </div>

              {/* Video Card Preview */}
              <div className="p-4 space-y-3">
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-3">
                    <span className="self-end px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-zinc-200">
                      13:24
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">Now Playing</span>
                      <p className="text-xs font-bold text-white line-clamp-1">
                        Hanuman vs Yamraj | Katha Comics
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-zinc-100 line-clamp-1">
                    Hanuman vs Yamraj | Jab Yamraj Shri Ram Ko Lene Aaye
                  </h4>
                  <p className="text-[11px] text-zinc-400">Katha Comics</p>
                </div>

                {/* Primary Action Button */}
                <button className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-colors">
                  <ExternalLinkIcon size={14} />
                  <span>Open Floating Player</span>
                </button>

                {/* Secondary Action Row */}
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-1.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-zinc-700/60">
                    <span>+ Queue</span>
                  </button>
                  <button className="py-1.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-zinc-700/60">
                    <ClockIcon size={13} />
                    <span>Watch Later</span>
                  </button>
                </div>

                {/* Queue Tabs Mockup */}
                <div className="pt-2 border-t border-zinc-800/80">
                  <div className="flex gap-2 p-1 rounded-lg bg-zinc-950/60 border border-zinc-800 text-xs">
                    <span className="flex-1 text-center py-1 rounded-md bg-blue-600 text-white font-medium">
                      Queue (2)
                    </span>
                    <span className="flex-1 text-center py-1 text-zinc-400">
                      Watch Later
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown: Exactly matching the extension screenshots */}
      <section id="settings-breakdown" className="max-w-6xl mx-auto px-6 py-20 border-b border-zinc-800/60">
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs uppercase font-semibold text-red-400 tracking-wider">Complete Settings Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Everything You Can Customize in Floatube
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            A comprehensive look at all the settings and toggles available inside the extension popup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Appearance Section */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-400">
                <SunIcon size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Appearance & Themes</h3>
                <span className="text-xs text-zinc-400">Visual Styling</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Match your browser setup effortlessly with three distinct appearance presets:
            </p>
            <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-blue-500/50 text-blue-400 font-medium flex flex-col items-center gap-1">
                <MoonIcon size={14} />
                <span>Dark</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 flex flex-col items-center gap-1">
                <SunIcon size={14} />
                <span>Light</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 flex flex-col items-center gap-1">
                <MonitorIcon size={14} />
                <span>System</span>
              </div>
            </div>
          </div>

          {/* 2. Playback Control */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400">
                <SpeedometerIcon size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Playback Controls</h3>
                <span className="text-xs text-zinc-400">Speed & Automation</span>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex justify-between items-center p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span>Default Speed</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-white font-mono text-[11px]">0.5x — 2.0x</span>
              </li>
              <li className="flex justify-between items-center p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span>Default Volume Slider</span>
                <span className="text-blue-400 font-mono text-[11px]">80% Preset</span>
              </li>
              <li className="flex justify-between items-center p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span>Auto-play Next Video</span>
                <span className="text-emerald-400 font-semibold text-[11px]">Enabled</span>
              </li>
            </ul>
          </div>

          {/* 3. Player Sizing & Opacity */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                <SlidersIcon size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Player Dimensions & Opacity</h3>
                <span className="text-xs text-zinc-400">Size & Transparency</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Fine-tune the mini-player window so it never blocks your workspace:
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-300">
                <span>Size Presets:</span>
                <span className="font-mono text-zinc-400">Small · Medium · Large</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span>Opacity Slider:</span>
                <span className="text-blue-400">30% to 100% see-through</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300">
                <span>Auto-hide Controls:</span>
                <span className="text-zinc-400">Hides after 3 seconds</span>
              </div>
            </div>
          </div>

          {/* 4. Behavior Modes: Bubble, Focus & Audio-only */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400">
                <MinimizeIcon size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Smart Behavior Modes</h3>
                <span className="text-xs text-zinc-400">Distraction-Free Multi-Tasking</span>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span className="font-semibold text-white block">Minimize to Bubble</span>
                <span className="text-zinc-400 text-[11px]">Shrinks the player into a compact floating bubble when minimized.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span className="font-semibold text-white block">Focus Mode</span>
                <span className="text-zinc-400 text-[11px]">Hides all secondary buttons and timelines for pure video immersion.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span className="font-semibold text-white block flex items-center gap-1.5">
                  <HeadphonesIcon size={13} className="text-amber-400" />
                  <span>Audio-Only Mode</span>
                </span>
                <span className="text-zinc-400 text-[11px]">Hides the video feed to conserve laptop battery, RAM, and GPU.</span>
              </div>
            </div>
          </div>

          {/* 5. Shorts Superpowers */}
          <div id="shorts-mode" className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-400">
                <ShortsIcon size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">YouTube Shorts Mode</h3>
                <span className="text-xs text-zinc-400">Vertical 9:16 Feed</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Full specialized handling designed specifically for YouTube Shorts:
            </p>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircleIcon size={14} className="text-rose-400" />
                <span><strong>Auto-next Short:</strong> Plays the next short reel automatically.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon size={14} className="text-rose-400" />
                <span><strong>Scroll Direction:</strong> Choose between Natural or Inverted mouse wheel.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon size={14} className="text-rose-400" />
                <span><strong>Keyboard Navigation:</strong> Use <kbd className="px-1 rounded bg-zinc-800 text-[10px]">↑</kbd> <kbd className="px-1 rounded bg-zinc-800 text-[10px]">↓</kbd> arrows to flip Shorts.</span>
              </li>
            </ul>
          </div>

          {/* 6. Queue, Watch Later & Privacy Data */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-800/50 flex items-center justify-center text-teal-400">
                <ShieldCheckIcon size={18} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Local Data & Privacy</h3>
                <span className="text-xs text-zinc-400">Total User Ownership</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No cloud accounts needed. You have instant 1-click control over stored browser data:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span>Clear Queue / Watch Later</span>
                <TrashIcon size={14} className="text-zinc-500" />
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span>Reset All Settings to Defaults</span>
                <span className="text-red-400 font-medium">1-Click Reset</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-950 border border-zinc-800/60">
                <span>Privacy Standard</span>
                <span className="text-emerald-400 font-medium">100% On-Device</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Keyboard Shortcuts Section */}
      <section id="shortcuts" className="max-w-4xl mx-auto px-6 py-20 border-b border-zinc-800/60 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-red-400 tracking-wider mb-1">
            <KeyboardIcon size={16} />
            <span>Productivity Controls</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Default Keyboard Shortcuts</h2>
          <p className="text-xs text-zinc-400 mt-1">Control your floating video without taking hands off the keyboard</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 text-center hover:border-zinc-700 transition-colors">
            <kbd className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white font-mono text-sm shadow inline-block mb-3">
              Alt + F
            </kbd>
            <h4 className="font-semibold text-white text-sm">Toggle Floating Player</h4>
            <p className="text-xs text-zinc-400 mt-1">Spawns or hides the floating player window</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 text-center hover:border-zinc-700 transition-colors">
            <kbd className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white font-mono text-sm shadow inline-block mb-3">
              Alt + Space
            </kbd>
            <h4 className="font-semibold text-white text-sm">Play / Pause</h4>
            <p className="text-xs text-zinc-400 mt-1">Instantly starts or pauses video playback</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 text-center hover:border-zinc-700 transition-colors">
            <kbd className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white font-mono text-sm shadow inline-block mb-3">
              Alt + B
            </kbd>
            <h4 className="font-semibold text-white text-sm">Add Bookmark</h4>
            <p className="text-xs text-zinc-400 mt-1">Saves current timestamp & note to popup</p>
          </div>
        </div>
      </section>

      {/* How to Install Section */}
      <section id="how-to-use" className="max-w-4xl mx-auto px-6 py-20 border-b border-zinc-800/60 w-full">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-semibold text-red-400 tracking-wider">Quick Setup</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">How to Install in Chrome</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex gap-5">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 text-red-400 border border-red-800/40 font-bold flex items-center justify-center shrink-0">
              <TerminalIcon size={20} />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold text-white text-base">Step 1: Build the Extension</h3>
              <p className="text-sm text-zinc-400">
                Navigate to your extension directory in your command line and build:
              </p>
              <pre className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-emerald-400 font-mono overflow-x-auto">
                cd youtube/extension && npm run build
              </pre>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex gap-5">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 text-red-400 border border-red-800/40 font-bold flex items-center justify-center shrink-0">
              <ChromeIcon size={20} />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold text-white text-base">Step 2: Load Unpacked in Chrome</h3>
              <p className="text-sm text-zinc-400">
                Open Google Chrome, Brave, or Edge and go to:
              </p>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                chrome://extensions/
              </div>
              <ul className="text-xs text-zinc-400 list-disc list-inside space-y-1 pt-1">
                <li>Toggle on <strong>Developer mode</strong> in the top-right corner.</li>
                <li>Click <strong>&quot;Load unpacked&quot;</strong>.</li>
                <li>Select the folder: <code className="text-red-400">youtube/extension/dist</code>.</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex gap-5">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 text-red-400 border border-red-800/40 font-bold flex items-center justify-center shrink-0">
              <YouTubeIcon size={20} />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-semibold text-white text-base">Step 3: Play YouTube Videos</h3>
              <p className="text-sm text-zinc-400">
                Navigate to any YouTube video or Short. The floating player will be ready instantly via the player controls, popup icon, or <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 text-xs">Alt + F</kbd>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Privacy Policy Link */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-10 text-center text-xs text-zinc-500 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <YouTubeIcon size={16} className="text-red-500" />
            <span>© {new Date().getFullYear()} Floatube. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#settings-breakdown" className="hover:text-zinc-300 transition-colors">Features</a>
            <a href="#how-to-use" className="hover:text-zinc-300 transition-colors">Installation</a>
            <Link href="/privacy" className="text-zinc-300 font-medium hover:underline inline-flex items-center gap-1">
              <ShieldCheckIcon size={14} className="text-emerald-400" />
              <span>Privacy Policy (/privacy)</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
