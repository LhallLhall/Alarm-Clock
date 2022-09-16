# Alarm clock psuedocode
### Variables
- second
- minute
- hour
- day
- year
- month

### Funcitons
- getTime()
  - it will recieve data from the Data() function and use it to display the time and date into a div.


### The process
~~~
Function getTime
    GET the date with Date funciton
    USE the new variable to get the second
    GET the minute
    GET the hour

    FIND a way to get the time to only go to 12 then reset to 0. SUBJECT TO CHANGE WITH THE STRETCH GOALS

    GET the current date with date()
    GET day
    GET month
    GET year
    
    then put the day month year into a div to display the current date

    use a variable that has an empty string to put it the AM/PM

    put the hours, minutes, and seconds inside of a div to display the time

    update time every second using setInterval
~~~