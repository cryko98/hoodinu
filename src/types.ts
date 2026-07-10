export interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  iconName: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  points: string[];
}

export interface NewsItem {
  id: string;
  source: string;
  time: string;
  title: string;
  summary: string;
  sentiment: 'bullish' | 'highly-bullish' | 'moon';
  reads: number;
}
