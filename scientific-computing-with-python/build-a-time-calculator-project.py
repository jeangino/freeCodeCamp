def add_time(start: str, duration: str, starting_day: str = "") -> str:

    DAYS_OF_THE_WEEK = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    pm = start.endswith('PM')
    hour, minutes = start.split(" ")[0].split(':')
    plus_hours, plus_minutes = duration.split(':')

    result_hours = int(hour) + int(plus_hours)
    if pm:
        result_hours += 12
    result_minutes = int(minutes) + int(plus_minutes)

    extra_hours, result_minutes = divmod(result_minutes, 60)
    result_hours += extra_hours

    days_extra, result_hours = divmod(result_hours, 24)

    result = "12:" if result_hours % 12 == 0 else str(result_hours % 12) + ":"
    result += str(result_minutes) if result_minutes >= 10 else "0" + str(result_minutes)
    result += " PM" if result_hours >= 12 else " AM"

    if starting_day != "":
        result += ", " + DAYS_OF_THE_WEEK[(DAYS_OF_THE_WEEK.index(starting_day.lower()) + days_extra) % 7].title()

    if (days_extra) == 1:
        return result + " (next day)"
    if (days_extra) > 1:
        return result + " (" + str(days_extra) + " days later)"
    return result



if __name__ == '__main__':
    print(add_time('3:00 PM', '3:10'))# Returns: 6:10 PM
    print(add_time('11:30 AM', '2:32', 'Monday')) # Returns: 2:02 PM, Monday
    print(add_time('11:43 AM', '00:20')) # Returns: 12:03 PM
    print(add_time('10:10 PM', '3:30')) # Returns: 1:40 AM (next day)
    print(add_time('11:43 PM', '24:20', 'tueSday')) # Returns: 12:03 AM, Thursday (2 days later)
    print(add_time('6:30 PM', '205:12')) # Returns: 7:42 AM (9 days later)