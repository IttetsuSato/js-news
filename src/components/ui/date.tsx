import { format as dateFormat, parseISO } from "date-fns";
import { forwardRef } from "react";

export type DateProps = {
  /**
   * ISO 8601 format
   * @see https://date-fns.org/docs/parseISO
   */
  date: string;
  format: string;
};

export const Date = forwardRef<HTMLTimeElement, DateProps>(
  ({ date, format }, ref) => {
    return (
      <time dateTime={date} ref={ref}>
        {dateFormat(parseISO(date), format)}
      </time>
    );
  },
);
Date.displayName = "Date";
