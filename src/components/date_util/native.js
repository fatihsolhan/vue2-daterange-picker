import { dateFormat, getWeek } from "../dateformat";

const DateUtil = {
  isSame: (date1, date2, granularity) => {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    if (granularity === "date") {
      dt1.setHours(0, 0, 0, 0);
      dt2.setHours(0, 0, 0, 0);
    }
    return dt1.getTime() === dt2.getTime();
  },
  daysInMonth: (year, month) => {
    return new Date(year, month, 0).getDate();
  },
  weekNumber: date => {
    return getWeek(date);
  },
  format: (date, mask) => {
    return dateFormat(date, mask);
  },
  nextMonth: date => {
    let nextMonthDate = new Date(date.getTime());
    nextMonthDate.setDate(1);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    return nextMonthDate;
  },
  prevMonth: date => {
    let prevMonthDate = new Date(date.getTime());
    prevMonthDate.setDate(1);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    return prevMonthDate;
  },
  getNthMonth: (date, n) => {
    let nthMonthDate = new Date(date.getTime());
    nthMonthDate.setDate(1);
    nthMonthDate.setMonth(nthMonthDate.getMonth() + n);
    return nthMonthDate;
  },
  validateDateRange: (newDate, min, max) => {
    let max_date = new Date(max);
    let min_date = new Date(min);

    if (max && newDate.getTime() > max_date.getTime()) {
      return max_date;
    }

    if (min && newDate.getTime() < min_date.getTime()) {
      return min_date;
    }

    return newDate;
  },
  localeData: options => {
    let default_locale = {
      format: "DD/MM/YYYY",
      separator: " - ",
      applyLabel: "Uygula",
      cancelLabel: "Vazgeç",
      fromLabel: "Dan",
      toLabel: "a",
      customRangeLabel: "Seç",
      daysOfWeek: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
      monthNames: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ],
      firstDay: 0
    };

    return { ...default_locale, ...options };
  },
  yearMonth: date => {
    let month = date.getMonth() + 1;
    return date.getFullYear() + (month < 10 ? "0" : "") + month;
  },
  isValidDate: d => {
    return d instanceof Date && !isNaN(d);
  }
};

export default DateUtil;
