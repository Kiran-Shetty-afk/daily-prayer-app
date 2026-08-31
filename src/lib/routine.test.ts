import { countCompleted, isYouTubeUrl, parseReminderTime, toDateKey } from './routine';

describe('toDateKey', () => {
  it('uses the local calendar date with zero-padded month and day', () => {
    expect(toDateKey(new Date(2026, 7, 31, 23, 59))).toBe('2026-08-31');
  });
});

describe('countCompleted', () => {
  it('counts only routine item IDs completed for the selected day', () => {
    expect(countCompleted([1, 2, 3], new Set([1, 3, 99]))).toBe(2);
  });

  it('returns zero for an empty routine', () => {
    expect(countCompleted([], new Set([1]))).toBe(0);
  });
});

describe('parseReminderTime', () => {
  it('parses a valid 24-hour reminder time', () => {
    expect(parseReminderTime('07:30')).toEqual({ hour: 7, minute: 30 });
  });

  it.each(['24:00', '19:60', '7:30', 'night'])('rejects invalid time %s', (value) => {
    expect(parseReminderTime(value)).toBeNull();
  });
});

describe('isYouTubeUrl', () => {
  it.each(['https://www.youtube.com/watch?v=abc', 'https://youtu.be/abc'])('identifies YouTube URL %s', (url) => {
    expect(isYouTubeUrl(url)).toBe(true);
  });

  it('does not classify a direct media URL as YouTube', () => {
    expect(isYouTubeUrl('https://cdn.example.com/audio.mp3')).toBe(false);
  });
});
