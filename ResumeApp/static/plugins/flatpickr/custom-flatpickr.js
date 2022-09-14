// Flatpickr
$(function () {
    // Basic Example
    $("#basicExample").flatpickr();
    // DateTime
    $("#dateTime").flatpickr({
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });
    // User friendly dates
    $("#userFriendly").flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });
    // Min Date
    $("#minDate").flatpickr({
        minDate: "2021-01"
    });
    // Max Date
    $("#maxDate").flatpickr({
        dateFormat: "d.m.Y",
        maxDate: "15.12.2017"
    });
    // Date from today
    $("#dateFromToday").flatpickr({
        minDate: "today",
        maxDate: new Date().fp_incr(120)
    });
    // Disable specific date
    $("#disableSpecificDate").flatpickr({
        minDate: "2025-01",
        disable: ["2025-01-15", "2025-02-21", "2025-03-08"],
        dateFormat: "Y-m-d",
    });
    // Disable range of date
    $("#disablerangeOfDate").flatpickr({
        minDate: "2025-01",
        dateFormat: "Y-m-d",
        disable: [
            {
                from: "2025-04-01",
                to: "2025-04-19"
            },
            {
                from: "2025-02-08",
                to: "2025-02-23"
            }
        ]
    });
    // Disable Weekends (using function)
    $("#disableWeekends").flatpickr({
        "disable": [
            function(date) {
                // return true to disable
                return (date.getDay() === 0 || date.getDay() === 6);
            }
        ],
        "locale": {
            "firstDayOfWeek": 1 // start week on Monday
        }
    });
    // Enable few dates
    $("#enableFew").flatpickr({
        minDate: "2025-01",
        enable: ["2025-03-30", "2025-05-21", "2025-06-08",]
    });
    // Enable range of dates
    $("#enablerange").flatpickr({
        minDate: "2025-01",
        enable: [
            {
                from: "2025-04-01",
                to: "2025-04-19"
            },
            {
                from: "2025-02-08",
                to: "2025-02-23"
            }
        ]
    });
    // Enable only first 14 days
    $("#enablefirst").flatpickr({
        enable: [
            function(date) {
                return (date.getDate() < 15);
            }
        ]
    });
    // Disable even months
    $("#disableEvenMonths").flatpickr({
        enable: [
            function(date) {
                return (date.getMonth() % 2 === 0);
            }
        ]
    });
    // Select Multiple Dates
    $("#multipleDates").flatpickr({
        mode: "multiple",
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });
    // Range Calender
    $("#rangeCalender").flatpickr({
        mode: "range",
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });
    // Time Picker
    $("#timePicker").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    });
    // 24-hour Time Picker
    $("#fullTimePicker").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    });
    // Time Picker with limits
    $("#timePickerWithLimits").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        minTime: "16:00",
        maxTime: "22:30",
    });
    // Default Time
    $("#defaultTime").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: "16:00"
    });
    // Inline
    $("#inline").flatpickr({
        inline: true
    });
    // Display Week Numbers
    $("#displayWeekNumbers").flatpickr({
        weekNumbers: true,
    });
    // External Buttons
    $("#externalButtons").flatpickr({
        wrap: true
    });
});