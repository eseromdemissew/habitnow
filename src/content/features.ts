export type FeatureArea =
  | "Habits"
  | "Tasks & routines"
  | "Planning"
  | "Focus & blocking"
  | "AI"
  | "Motivation"
  | "Reflection"
  | "App & data";

export const FEATURE_AREAS: FeatureArea[] = [
  "Habits",
  "Tasks & routines",
  "Planning",
  "Focus & blocking",
  "AI",
  "Motivation",
  "Reflection",
  "App & data",
];

export const FEATURES: { area: FeatureArea; name: string; benefit: string }[] = [
  { area: "Habits", name: "Yes/no habits", benefit: "Tick it off in one tap: did you do it today or not." },
  { area: "Habits", name: "Count habits", benefit: "Track how many: glasses of water, pages, push-ups." },
  { area: "Habits", name: "Duration habits", benefit: "Log minutes spent, like 20 minutes of reading." },
  { area: "Habits", name: "Distance habits", benefit: "Record kilometres walked, run or cycled." },
  { area: "Habits", name: "Measurement habits", benefit: "Follow any number over time, like weight or sleep hours." },
  { area: "Habits", name: "Quit habits", benefit: "Count clean days for things you want to stop." },
  { area: "Habits", name: "Streaks with grace days", benefit: "One missed day won't erase weeks of effort." },
  { area: "Habits", name: "Habit templates", benefit: "Start from proven habits instead of a blank page." },
  { area: "Habits", name: "Flexible scheduling", benefit: "Daily, specific weekdays, X times a week or every N days." },
  { area: "Tasks & routines", name: "Tasks with subtasks", benefit: "Break big jobs into small steps you can actually start." },
  { area: "Tasks & routines", name: "Projects", benefit: "Group related tasks so nothing gets lost." },
  { area: "Tasks & routines", name: "Kanban board", benefit: "Drag work from To do to Done and see progress at a glance." },
  { area: "Tasks & routines", name: "Routines with guided run mode", benefit: "Step-by-step morning or evening flows with a timer per step." },
  { area: "Planning", name: "Goals with milestones", benefit: "Turn a big ambition into checkpoints you can reach." },
  { area: "Planning", name: "Calendar with time blocking", benefit: "Give every task a slot so your day has a real shape." },
  { area: "Planning", name: "Voice and natural-language quick add", benefit: "Say 'gym tomorrow at 7' and it lands in the right place." },
  { area: "Planning", name: "Smart rescheduling", benefit: "Missed something? Move it to a free slot in one tap." },
  { area: "Focus & blocking", name: "Pomodoro and other timers", benefit: "Pomodoro, countdown and stopwatch for deep work." },
  { area: "Focus & blocking", name: "Ambient sounds", benefit: "Rain, café or white noise to help you settle in." },
  { area: "Focus & blocking", name: "App blocker with profiles", benefit: "Different block lists for work, study or bedtime." },
  { area: "Focus & blocking", name: "Project Mode", benefit: "Block distractions for the whole length of a project session." },
  { area: "Focus & blocking", name: "Daily app limits", benefit: "Cap time on a single app instead of banning it outright." },
  { area: "Focus & blocking", name: "Allow-passes", benefit: "Take a short, deliberate break without disabling everything." },
  { area: "Focus & blocking", name: "Strict mode", benefit: "Adds friction before you can turn blocking off." },
  { area: "AI", name: "AI coach", benefit: "Ask why a habit keeps slipping and get practical suggestions." },
  { area: "AI", name: "Daily planner", benefit: "Get a suggested plan for tomorrow based on your tasks and energy." },
  { area: "AI", name: "Routine generator", benefit: "Describe what you want, get a routine you can edit." },
  { area: "AI", name: "Goal breakdown", benefit: "Turn one goal into milestones, habits and tasks." },
  { area: "AI", name: "Recovery mode", benefit: "After a rough week, get a lighter plan to restart gently." },
  { area: "AI", name: "Weekly and monthly AI reviews", benefit: "A short summary of what worked and what to adjust." },
  { area: "Motivation", name: "XP and levels", benefit: "Every completed habit earns XP so progress feels visible." },
  { area: "Motivation", name: "Achievements", benefit: "Milestones that celebrate consistency, not perfection." },
  { area: "Motivation", name: "Challenges", benefit: "Time-boxed goals like 30 days of reading." },
  { area: "Reflection", name: "Journal", benefit: "A private place to write a few lines about your day." },
  { area: "Reflection", name: "Mood and energy tracking", benefit: "Spot how sleep, habits and mood connect over time." },
  { area: "Reflection", name: "Insights", benefit: "Heatmaps, charts and a productivity score from your own data." },
  { area: "App & data", name: "Home-screen widgets", benefit: "Check off habits without opening the app." },
  { area: "App & data", name: "Smart notifications with actions", benefit: "Mark done or snooze right from the notification." },
  { area: "App & data", name: "Light, dark and AMOLED themes", benefit: "Easy on the eyes at any hour, and on your battery." },
  { area: "App & data", name: "Offline-first sync", benefit: "Works without a connection and syncs when you're back online." },
  { area: "App & data", name: "Data export and delete", benefit: "Take your data with you, or erase it completely." },
];

export const FAQ: { q: string; a: string }[] = [
  { q: "Is HabitNow available now?", a: "HabitNow is in development for Android. Join early access and we'll email you once when it's ready to download." },
  { q: "Will there be an iPhone version?", a: "We're focused on building the best Android experience first. iOS isn't planned for launch." },
  { q: "Does it work offline?", a: "Yes. Your habits, tasks and routines are stored on your device first, so the app works fully without a connection and syncs when you're back online (if you choose to sign in)." },
  { q: "Do I need an account?", a: "No. You can use HabitNow on one device without an account. An account is only needed if you want cloud sync and backup across devices." },
  { q: "How does the app blocker work?", a: "It uses Android's Usage Access and 'Display over other apps' permissions to notice when you open a blocked app and show a focus screen instead. The app explains each permission before asking." },
  { q: "Can the blocker be made impossible to bypass?", a: "No, and we won't pretend otherwise. Strict mode adds real friction, like a hold-to-confirm unlock and a waiting period, but Android always lets you remove permissions or uninstall an app." },
  { q: "What does the AI coach do with my data?", a: "AI features run through Google Gemini. Only the information needed for your request is sent, and AI features are optional. Journal and mood notes are encrypted on your device." },
  { q: "Can I export or delete my data?", a: "Yes. You can export everything or delete all of your data at any time from Settings." },
];

export const CHAPTERS = [
  { id: "today", screen: "today", title: "Today dashboard", body: "Open the app and see exactly what matters today: habits due, tasks scheduled, your focus time and how close you are to closing your daily ring." },
  { id: "habits", screen: "habits", title: "Habits and smart scheduling", body: "Yes/no, count, duration, distance, measurement and quit habits. Schedule them daily, on weekdays or a few times a week. Grace days protect your streak from one bad day." },
  { id: "routines", screen: "routines", title: "Tasks and routines", body: "Tasks with subtasks, projects and a Kanban board. Routines run step by step in a guided mode, with a gentle timer for every step." },
  { id: "goals", screen: "routines", title: "Goals and calendar", body: "Break goals into milestones and give your work a time block. Your calendar shows what's planned and what's free." },
  { id: "focus", screen: "focus", title: "Focus timers", body: "Pomodoro, countdown and stopwatch timers with ambient sounds. Every session counts toward your daily focus goal." },
  { id: "blocker", screen: "blocker", title: "App and distraction blocker", body: "Profiles for work, study or sleep, daily app limits, allow-passes and Project Mode. Strict mode adds friction before you can switch it off." },
  { id: "coach", screen: "coach", title: "AI coach and planner", body: "Ask for tomorrow's plan, a shorter morning routine or an honest look at why a habit keeps slipping. Recovery mode helps you restart after a rough week." },
  { id: "insights", screen: "insights", title: "Insights and gamification", body: "Heatmaps, trends and a productivity score. Earn XP, level up and unlock achievements for showing up, not for being perfect." },
  { id: "journal", screen: "insights", title: "Journal and mood", body: "Write a few lines, log mood and energy, and see how they connect to your habits. Notes are encrypted on your device." },
  { id: "widgets", screen: "today", title: "Widgets and notifications", body: "Tick off habits from your home screen. Notifications have action buttons so you can mark done or snooze without opening the app." },
] as const;

export type ScreenId = "today" | "habits" | "routines" | "focus" | "blocker" | "coach" | "insights";
