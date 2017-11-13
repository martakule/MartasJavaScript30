var origLat = 43.653226,
    origLong = -79.3831843,
    targetLat = 29.7604267,
    targetLong = -95.3698028;

var distance = Math.sqrt( Math.pow( Math.abs(origLat - targetLat), 2) + Math.pow( Math.abs(origLong - targetLong), 2) );

// http://www.nhc.noaa.gov/gccalc.shtml

// What's the relationship between distance in kilometres and my result?
// My result is flat -- what's the margin of error compared to spherical geometry? Large enough to actually get cities in wrong order? They're all on the same continent. Well, I'm glad I got to use the Pythagorean Theorem 20 years after elementary school. Time to sleep.