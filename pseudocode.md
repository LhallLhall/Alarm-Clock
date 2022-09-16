# Alarm clock psuedocode
### Junk Drawer
the clock need to get the time and date from the date function then i need to figure out how to utilize that data once it's retrieved. Will update more once I have an idea how. found a way to take the data and add it to a div using a getelementbyid and using .innertext to add the hours, minutes, and seconds

need 

### Variables
- second
- minute
- hour
- day
- year
- month

### Funcitons
- getTime()
  - it will recieve data from the Data() function and use it to display the time into a div. (need to add more)


### The process
~~~
Function getTime
    get the date with Date funciton
    use the new variable to get the second
    get the minute
    get the hour

    find a way to get the time to only go to 12 then reset to 0. SUBJECT TO CHANGE WITH THE STRETCH GOALS

    get the current date with date()
    get day
    get month
    get year
    
    then put the day month year into a div to display the current date

    use a variable that has an empty string to put it the AM/PM in
    find a way to put am and pm with the time. (maybe do if else with the hours)

    put the hours, minutes, and seconds inside of a div to display the time

    update time every second using setTimout
~~~
    