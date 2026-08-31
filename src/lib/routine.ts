export function toDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function countCompleted(itemIds: readonly number[], completedIds: ReadonlySet<number>): number {
  return itemIds.reduce((count, id) => count + (completedIds.has(id) ? 1 : 0), 0);
}

export function parseReminderTime(value: string): { hour: number; minute: number } | null {
  const match = /^(\d{2}):(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  return hour <= 23 && minute <= 59 ? { hour, minute } : null;
}

export function isYouTubeUrl(url: string | null): boolean {
  return Boolean(url && /(youtube\.com|youtu\.be)/i.test(url));
}
