export type Timezone = string;

export interface DateTimeParts {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export interface RangeEndpoint {
  parts: DateTimeParts;
  timezone: Timezone;
}

export type PartialRange =
  | { kind: "empty" }
  | { kind: "start-only"; start: RangeEndpoint }
  | { kind: "complete"; start: RangeEndpoint; end: RangeEndpoint };
  